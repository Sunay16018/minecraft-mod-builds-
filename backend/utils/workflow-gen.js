/**
 * GitHub Actions Workflow Generator
 * Fabric mod derleme icin dinamik workflow olusturucu
 */

const { getJavaVersion } = require('./gradle-configs');

function generateWorkflow(version, branchName) {
  const javaVersion = getJavaVersion(version) || "21";
  
  let setupJavaVersion;
  if (javaVersion === "8") setupJavaVersion = "8";
  else if (javaVersion === "16") setupJavaVersion = "16";
  else if (javaVersion === "17") setupJavaVersion = "17";
  else if (javaVersion === "21") setupJavaVersion = "21";
  else if (javaVersion === "25") setupJavaVersion = "25";
  else setupJavaVersion = "21";

  return `name: Build Fabric Mod

on:
  push:
    branches:
      - '${branchName}'
    paths:
      - 'src/**'
      - 'build.gradle'
      - 'settings.gradle'
      - 'gradle.properties'
      - 'gradle/**'

env:
  JAVA_VERSION: ${setupJavaVersion}

jobs:
  build:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      actions: write

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
        with:
          ref: ${branchName}

      - name: Setup Java ${setupJavaVersion}
        uses: actions/setup-java@v4
        with:
          java-version: '${setupJavaVersion}'
          distribution: 'temurin'

      - name: Make gradlew executable
        run: chmod +x ./gradlew

      - name: Cache Gradle dependencies
        uses: actions/cache@v4
        with:
          path: |
            ~/.gradle/caches
            ~/.gradle/wrapper
          key: gradle-\${{ runner.os }}-\${{ hashFiles('**/*.gradle*', '**/gradle-wrapper.properties') }}
          restore-keys: |
            gradle-\${{ runner.os }}-

      - name: Build mod with Gradle
        run: ./gradlew build --no-daemon
        env:
          GRADLE_OPTS: -Dorg.gradle.jvmargs="-Xmx4G" -Dorg.gradle.daemon=false

      - name: Find built JAR
        id: find-jar
        run: |
          JAR_FILE=$(find build/libs -name "*.jar" -not -name "*-sources.jar" -not -name "*-dev.jar" | head -n 1)
          echo "jar_path=$JAR_FILE" >> $GITHUB_OUTPUT
          echo "jar_name=$(basename $JAR_FILE)" >> $GITHUB_OUTPUT

      - name: Upload mod JAR artifact
        uses: actions/upload-artifact@v4
        with:
          name: mod-jar
          path: build/libs/*.jar
          if-no-files-found: error
          retention-days: 30

      - name: Upload build logs on failure
        if: failure()
        uses: actions/upload-artifact@v4
        with:
          name: build-logs
          path: build/reports/
          retention-days: 7
`;
}

module.exports = {
  generateWorkflow
};
