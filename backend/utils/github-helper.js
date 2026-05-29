/**
 * GitHub Helper - Octokit ile repo islemleri
 */

const { Octokit } = require("@octokit/rest");

class GitHubHelper {
  constructor(token, repo) {
    this.octokit = new Octokit({ auth: token });
    const [owner, repoName] = repo.split("/");
    this.owner = owner;
    this.repo = repoName;
  }

  /**
   * Yeni branch olustur (base: main/master)
   */
  async createBranch(branchName) {
    try {
      // Once default branch'i bul
      const { data: repoData } = await this.octokit.rest.repos.get({
        owner: this.owner,
        repo: this.repo
      });
      const baseBranch = repoData.default_branch;

      // Base branch'in son commit SHA'sini al
      const { data: refData } = await this.octokit.rest.git.getRef({
        owner: this.owner,
        repo: this.repo,
        ref: `heads/${baseBranch}`
      });
      const baseSha = refData.object.sha;

      // Yeni branch olustur
      await this.octokit.rest.git.createRef({
        owner: this.owner,
        repo: this.repo,
        ref: `refs/heads/${branchName}`,
        sha: baseSha
      });

      return { success: true, baseBranch };
    } catch (error) {
      if (error.status === 422 && error.message.includes("Reference already exists")) {
        return { success: true, message: "Branch already exists" };
      }
      throw error;
    }
  }

  /**
   * Dosya icerigini al (SHA icin)
   */
  async getFileSha(path, branch) {
    try {
      const { data } = await this.octokit.rest.repos.getContent({
        owner: this.owner,
        repo: this.repo,
        path: path,
        ref: branch
      });
      return data.sha;
    } catch (error) {
      if (error.status === 404) return null;
      throw error;
    }
  }

  /**
   * Tek dosya pushla (create or update)
   */
  async pushFile(path, content, branch, message) {
    const sha = await this.getFileSha(path, branch);

    const params = {
      owner: this.owner,
      repo: this.repo,
      path: path,
      message: message,
      content: Buffer.from(content).toString("base64"),
      branch: branch
    };

    if (sha) {
      params.sha = sha;
    }

    const { data } = await this.octokit.rest.repos.createOrUpdateFileContents(params);
    return data;
  }

  /**
   * Coklu dosya pushla (tek commit)
   */
  async pushFiles(files, branch, message) {
    // Once base tree'yi al
    const { data: refData } = await this.octokit.rest.git.getRef({
      owner: this.owner,
      repo: this.repo,
      ref: `heads/${branch}`
    });
    const baseCommitSha = refData.object.sha;

    const { data: baseCommit } = await this.octokit.rest.git.getCommit({
      owner: this.owner,
      repo: this.repo,
      commit_sha: baseCommitSha
    });
    const baseTreeSha = baseCommit.tree.sha;

    // Blob'lari olustur
    const treeEntries = [];
    for (const file of files) {
      const { data: blob } = await this.octokit.rest.git.createBlob({
        owner: this.owner,
        repo: this.repo,
        content: Buffer.from(file.content).toString("base64"),
        encoding: "base64"
      });

      treeEntries.push({
        path: file.path,
        mode: "100644",
        type: "blob",
        sha: blob.sha
      });
    }

    // Yeni tree olustur
    const { data: newTree } = await this.octokit.rest.git.createTree({
      owner: this.owner,
      repo: this.repo,
      base_tree: baseTreeSha,
      tree: treeEntries
    });

    // Commit olustur
    const { data: newCommit } = await this.octokit.rest.git.createCommit({
      owner: this.owner,
      repo: this.repo,
      message: message,
      tree: newTree.sha,
      parents: [baseCommitSha]
    });

    // Branch'i guncelle
    await this.octokit.rest.git.updateRef({
      owner: this.owner,
      repo: this.repo,
      ref: `heads/${branch}`,
      sha: newCommit.sha
    });

    return { commitSha: newCommit.sha, treeSha: newTree.sha };
  }

  /**
   * Workflow dosyasini pushla (.github/workflows/build-mod.yml)
   */
  async pushWorkflow(workflowContent, branch) {
    return await this.pushFile(
      ".github/workflows/build-mod.yml",
      workflowContent,
      branch,
      "ci: Add GitHub Actions workflow for mod build"
    );
  }

  /**
   * Workflow run durumunu sorgula
   */
  async getWorkflowRun(branch) {
    const { data } = await this.octokit.rest.actions.listWorkflowRunsForRepo({
      owner: this.owner,
      repo: this.repo,
      branch: branch,
      per_page: 1
    });

    if (data.workflow_runs.length === 0) {
      return null;
    }

    return data.workflow_runs[0];
  }

  /**
   * Workflow run detaylarini al
   */
  async getWorkflowRunDetails(runId) {
    const { data } = await this.octokit.rest.actions.getWorkflowRun({
      owner: this.owner,
      repo: this.repo,
      run_id: runId
    });
    return data;
  }

  /**
   * Artifact listesini al
   */
  async getArtifacts(runId) {
    const { data } = await this.octokit.rest.actions.listWorkflowRunArtifacts({
      owner: this.owner,
      repo: this.repo,
      run_id: runId
    });
    return data.artifacts;
  }

  /**
   * Artifact indirme URL'sini olustur
   */
  getArtifactDownloadUrl(artifactId) {
    return `https://github.com/${this.owner}/${this.repo}/actions/artifacts/${artifactId}/zip`;
  }
}

module.exports = GitHubHelper;
