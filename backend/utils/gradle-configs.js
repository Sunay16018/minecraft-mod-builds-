/**
 * Fabric Minecraft Mod - Gradle Configuration Manager
 * Guncel surumler: Mayis 2026
 * 
 * ONEMLI DEGISIKLIKLER 2026:
 * - Minecraft 26.1+ unobfuscated (Yarn mappings KALKTI, Mojang mappings kullaniliyor)
 * - Loom plugin ID degisti: fabric-loom -> net.fabricmc.fabric-loom (26.1+)
 * - Loom 1.16 = Gradle 9.4+, Java 21+
 * - Fabric Loader 0.19.2 (en guncel)
 * - 1.21.11 son obfuscated surum
 */

const FABRIC_VERSIONS = {
  // === YENI SURUM: Minecraft 26.1 (2026, unobfuscated) ===
  "26.1": {
    minecraft_version: "26.1",
    loader_version: "0.19.2",
    fabric_version: "0.149.1+26.1",
    loom_version: "1.16-SNAPSHOT",
    gradle_version: "9.4",
    java_version: "25",
    mappings_type: "mojang",
    plugin_id: "net.fabricmc.fabric-loom",
    is_unobfuscated: true,
    note: "Unobfuscated version - no Yarn mappings, use Mojang mappings"
  },
  "26.1.2": {
    minecraft_version: "26.1.2",
    loader_version: "0.19.2",
    fabric_version: "0.149.1+26.1.2",
    loom_version: "1.16-SNAPSHOT",
    gradle_version: "9.4",
    java_version: "25",
    mappings_type: "mojang",
    plugin_id: "net.fabricmc.fabric-loom",
    is_unobfuscated: true
  },

  // === 1.21.x Serisi (Son obfuscated surumler) ===
  "1.21.11": {
    minecraft_version: "1.21.11",
    yarn_mappings: "1.21.11+build.1",
    loader_version: "0.18.1",
    fabric_version: "0.141.4+1.21.11",
    loom_version: "1.14-SNAPSHOT",
    gradle_version: "9.2",
    java_version: "21",
    mappings_type: "yarn",
    plugin_id: "net.fabricmc.fabric-loom-remap",
    is_unobfuscated: false
  },
  "1.21.10": {
    minecraft_version: "1.21.10",
    yarn_mappings: "1.21.10+build.1",
    loader_version: "0.18.1",
    fabric_version: "0.140.0+1.21.10",
    loom_version: "1.14-SNAPSHOT",
    gradle_version: "9.2",
    java_version: "21",
    mappings_type: "yarn",
    plugin_id: "net.fabricmc.fabric-loom-remap",
    is_unobfuscated: false
  },
  "1.21.9": {
    minecraft_version: "1.21.9",
    yarn_mappings: "1.21.9+build.1",
    loader_version: "0.18.1",
    fabric_version: "0.139.0+1.21.9",
    loom_version: "1.14-SNAPSHOT",
    gradle_version: "9.2",
    java_version: "21",
    mappings_type: "yarn",
    plugin_id: "net.fabricmc.fabric-loom-remap",
    is_unobfuscated: false
  },
  "1.21.8": {
    minecraft_version: "1.21.8",
    yarn_mappings: "1.21.8+build.1",
    loader_version: "0.18.1",
    fabric_version: "0.138.0+1.21.8",
    loom_version: "1.14-SNAPSHOT",
    gradle_version: "9.2",
    java_version: "21",
    mappings_type: "yarn",
    plugin_id: "net.fabricmc.fabric-loom-remap",
    is_unobfuscated: false
  },
  "1.21.5": {
    minecraft_version: "1.21.5",
    yarn_mappings: "1.21.5+build.1",
    loader_version: "0.16.14",
    fabric_version: "0.119.5+1.21.5",
    loom_version: "1.10-SNAPSHOT",
    gradle_version: "8.12",
    java_version: "21",
    mappings_type: "yarn",
    plugin_id: "fabric-loom",
    is_unobfuscated: false
  },
  "1.21.4": {
    minecraft_version: "1.21.4",
    yarn_mappings: "1.21.4+build.8",
    loader_version: "0.16.14",
    fabric_version: "0.114.0+1.21.4",
    loom_version: "1.10-SNAPSHOT",
    gradle_version: "8.12",
    java_version: "21",
    mappings_type: "yarn",
    plugin_id: "fabric-loom",
    is_unobfuscated: false
  },
  "1.21.3": {
    minecraft_version: "1.21.3",
    yarn_mappings: "1.21.3+build.2",
    loader_version: "0.16.14",
    fabric_version: "0.114.0+1.21.3",
    loom_version: "1.10-SNAPSHOT",
    gradle_version: "8.12",
    java_version: "21",
    mappings_type: "yarn",
    plugin_id: "fabric-loom",
    is_unobfuscated: false
  },
  "1.21.1": {
    minecraft_version: "1.21.1",
    yarn_mappings: "1.21.1+build.3",
    loader_version: "0.16.14",
    fabric_version: "0.116.12+1.21.1",
    loom_version: "1.10-SNAPSHOT",
    gradle_version: "8.12",
    java_version: "21",
    mappings_type: "yarn",
    plugin_id: "fabric-loom",
    is_unobfuscated: false
  },
  "1.21": {
    minecraft_version: "1.21",
    yarn_mappings: "1.21+build.9",
    loader_version: "0.16.14",
    fabric_version: "0.100.1+1.21",
    loom_version: "1.10-SNAPSHOT",
    gradle_version: "8.12",
    java_version: "21",
    mappings_type: "yarn",
    plugin_id: "fabric-loom",
    is_unobfuscated: false
  },

  // === 1.20.x Serisi ===
  "1.20.6": {
    minecraft_version: "1.20.6",
    yarn_mappings: "1.20.6+build.1",
    loader_version: "0.16.14",
    fabric_version: "0.97.8+1.20.6",
    loom_version: "1.7-SNAPSHOT",
    gradle_version: "8.8",
    java_version: "21",
    mappings_type: "yarn",
    plugin_id: "fabric-loom",
    is_unobfuscated: false
  },
  "1.20.4": {
    minecraft_version: "1.20.4",
    yarn_mappings: "1.20.4+build.3",
    loader_version: "0.16.14",
    fabric_version: "0.96.4+1.20.4",
    loom_version: "1.7-SNAPSHOT",
    gradle_version: "8.8",
    java_version: "17",
    mappings_type: "yarn",
    plugin_id: "fabric-loom",
    is_unobfuscated: false
  },
  "1.20.2": {
    minecraft_version: "1.20.2",
    yarn_mappings: "1.20.2+build.4",
    loader_version: "0.16.14",
    fabric_version: "0.91.6+1.20.2",
    loom_version: "1.7-SNAPSHOT",
    gradle_version: "8.8",
    java_version: "17",
    mappings_type: "yarn",
    plugin_id: "fabric-loom",
    is_unobfuscated: false
  },
  "1.20.1": {
    minecraft_version: "1.20.1",
    yarn_mappings: "1.20.1+build.10",
    loader_version: "0.16.14",
    fabric_version: "0.92.9+1.20.1",
    loom_version: "1.7-SNAPSHOT",
    gradle_version: "8.8",
    java_version: "17",
    mappings_type: "yarn",
    plugin_id: "fabric-loom",
    is_unobfuscated: false
  },
  "1.20": {
    minecraft_version: "1.20",
    yarn_mappings: "1.20+build.1",
    loader_version: "0.16.14",
    fabric_version: "0.83.0+1.20",
    loom_version: "1.7-SNAPSHOT",
    gradle_version: "8.8",
    java_version: "17",
    mappings_type: "yarn",
    plugin_id: "fabric-loom",
    is_unobfuscated: false
  },

  // === 1.19.x Serisi ===
  "1.19.4": {
    minecraft_version: "1.19.4",
    yarn_mappings: "1.19.4+build.2",
    loader_version: "0.16.14",
    fabric_version: "0.87.0+1.19.4",
    loom_version: "1.6-SNAPSHOT",
    gradle_version: "8.5",
    java_version: "17",
    mappings_type: "yarn",
    plugin_id: "fabric-loom",
    is_unobfuscated: false
  },
  "1.19.3": {
    minecraft_version: "1.19.3",
    yarn_mappings: "1.19.3+build.5",
    loader_version: "0.16.14",
    fabric_version: "0.76.1+1.19.3",
    loom_version: "1.6-SNAPSHOT",
    gradle_version: "8.5",
    java_version: "17",
    mappings_type: "yarn",
    plugin_id: "fabric-loom",
    is_unobfuscated: false
  },
  "1.19.2": {
    minecraft_version: "1.19.2",
    yarn_mappings: "1.19.2+build.28",
    loader_version: "0.16.14",
    fabric_version: "0.76.1+1.19.2",
    loom_version: "1.6-SNAPSHOT",
    gradle_version: "8.5",
    java_version: "17",
    mappings_type: "yarn",
    plugin_id: "fabric-loom",
    is_unobfuscated: false
  },

  // === 1.18.x Serisi ===
  "1.18.2": {
    minecraft_version: "1.18.2",
    yarn_mappings: "1.18.2+build.4",
    loader_version: "0.16.14",
    fabric_version: "0.76.0+1.18.2",
    loom_version: "0.13-SNAPSHOT",
    gradle_version: "7.6",
    java_version: "17",
    mappings_type: "yarn",
    plugin_id: "fabric-loom",
    is_unobfuscated: false
  },
  "1.18.1": {
    minecraft_version: "1.18.1",
    yarn_mappings: "1.18.1+build.22",
    loader_version: "0.16.14",
    fabric_version: "0.46.6+1.18",
    loom_version: "0.13-SNAPSHOT",
    gradle_version: "7.6",
    java_version: "17",
    mappings_type: "yarn",
    plugin_id: "fabric-loom",
    is_unobfuscated: false
  },

  // === 1.17.x Serisi ===
  "1.17.1": {
    minecraft_version: "1.17.1",
    yarn_mappings: "1.17.1+build.65",
    loader_version: "0.16.14",
    fabric_version: "0.46.1+1.17",
    loom_version: "0.13-SNAPSHOT",
    gradle_version: "7.6",
    java_version: "16",
    mappings_type: "yarn",
    plugin_id: "fabric-loom",
    is_unobfuscated: false
  },

  // === 1.16.x Serisi ===
  "1.16.5": {
    minecraft_version: "1.16.5",
    yarn_mappings: "1.16.5+build.10",
    loader_version: "0.16.14",
    fabric_version: "0.42.0+1.16",
    loom_version: "0.12-SNAPSHOT",
    gradle_version: "7.5",
    java_version: "8",
    mappings_type: "yarn",
    plugin_id: "fabric-loom",
    is_unobfuscated: false
  },
  "1.16.4": {
    minecraft_version: "1.16.4",
    yarn_mappings: "1.16.4+build.9",
    loader_version: "0.16.14",
    fabric_version: "0.42.0+1.16",
    loom_version: "0.12-SNAPSHOT",
    gradle_version: "7.5",
    java_version: "8",
    mappings_type: "yarn",
    plugin_id: "fabric-loom",
    is_unobfuscated: false
  },

  // === 1.15.x Serisi ===
  "1.15.2": {
    minecraft_version: "1.15.2",
    yarn_mappings: "1.15.2+build.17",
    loader_version: "0.16.14",
    fabric_version: "0.28.5+1.15",
    loom_version: "0.12-SNAPSHOT",
    gradle_version: "7.5",
    java_version: "8",
    mappings_type: "yarn",
    plugin_id: "fabric-loom",
    is_unobfuscated: false
  },

  // === 1.14.x Serisi ===
  "1.14.4": {
    minecraft_version: "1.14.4",
    yarn_mappings: "1.14.4+build.18",
    loader_version: "0.16.14",
    fabric_version: "0.28.5+1.14",
    loom_version: "0.12-SNAPSHOT",
    gradle_version: "7.5",
    java_version: "8",
    mappings_type: "yarn",
    plugin_id: "fabric-loom",
    is_unobfuscated: false
  },

  // === 1.12.2 (Legacy) ===
  "1.12.2": {
    minecraft_version: "1.12.2",
    yarn_mappings: "1.12.2+build.2",
    loader_version: "0.14.25",
    fabric_version: "0.2.0+1.12.2",
    loom_version: "0.6-SNAPSHOT",
    gradle_version: "7.3",
    java_version: "8",
    mappings_type: "yarn",
    plugin_id: "fabric-loom",
    is_unobfuscated: false,
    note: "Legacy version, limited Fabric API support"
  },

  // === 1.8.9 (Legacy) ===
  "1.8.9": {
    minecraft_version: "1.8.9",
    yarn_mappings: "1.8.9+build.1",
    loader_version: "0.14.25",
    fabric_version: "0.2.0+1.8.9",
    loom_version: "0.6-SNAPSHOT",
    gradle_version: "7.3",
    java_version: "8",
    mappings_type: "yarn",
    plugin_id: "fabric-loom",
    is_unobfuscated: false,
    note: "Legacy version, limited Fabric API support"
  },

  // === 1.7.10 (Legacy) ===
  "1.7.10": {
    minecraft_version: "1.7.10",
    yarn_mappings: "1.7.10+build.1",
    loader_version: "0.14.25",
    fabric_version: "0.2.0+1.7.10",
    loom_version: "0.6-SNAPSHOT",
    gradle_version: "7.3",
    java_version: "8",
    mappings_type: "yarn",
    plugin_id: "fabric-loom",
    is_unobfuscated: false,
    note: "Legacy version, limited Fabric API support"
  }
};

function getGradleProperties(version) {
  const config = FABRIC_VERSIONS[version];
  if (!config) return null;

  if (config.is_unobfuscated) {
    return `# Fabric Properties
minecraft_version=${config.minecraft_version}
loader_version=${config.loader_version}
fabric_version=${config.fabric_version}

# Mod Properties
mod_version=1.0.0
maven_group=com.example
archives_base_name=example-mod

# Gradle
org.gradle.jvmargs=-Xmx4G
org.gradle.parallel=true
`;
  } else {
    return `# Fabric Properties
minecraft_version=${config.minecraft_version}
yarn_mappings=${config.yarn_mappings}
loader_version=${config.loader_version}
fabric_version=${config.fabric_version}

# Mod Properties
mod_version=1.0.0
maven_group=com.example
archives_base_name=example-mod

# Gradle
org.gradle.jvmargs=-Xmx4G
org.gradle.parallel=true
`;
  }
}

function getBuildGradle(version, modId, modName) {
  const config = FABRIC_VERSIONS[version];
  if (!config) return null;

  const group = `com.${modId.toLowerCase().replace(/[^a-z0-9]/g, "")}`;

  if (config.is_unobfuscated) {
    return `plugins {
    id "${config.plugin_id}" version "${config.loom_version}"
    id "maven-publish"
}

version = "1.0.0"
group = "${group}"

base {
    archivesName = "${modId}"
}

repositories {
    mavenCentral()
    maven { url "https://maven.fabricmc.net/" }
}

dependencies {
    minecraft "com.mojang:minecraft:\${project.minecraft_version}"
    modImplementation "net.fabricmc:fabric-loader:\${project.loader_version}"
    modImplementation "net.fabricmc.fabric-api:fabric-api:\${project.fabric_version}"
}

processResources {
    inputs.property "version", project.version
    filteringCharset "UTF-8"
    filesMatching("fabric.mod.json") {
        expand "version": project.version
    }
}

def targetJavaVersion = ${config.java_version}
java {
    toolchain.languageVersion = JavaLanguageVersion.of(targetJavaVersion)
    withSourcesJar()
}

tasks.withType(JavaCompile).configureEach {
    it.options.release = targetJavaVersion
}

jar {
    from("LICENSE") {
        rename { "\${it}_\${project.archivesName}"}
    }
}
`;
  } else {
    return `plugins {
    id "${config.plugin_id}" version "${config.loom_version}"
    id "maven-publish"
}

version = "1.0.0"
group = "${group}"

base {
    archivesName = "${modId}"
}

repositories {
    mavenCentral()
    maven { url "https://maven.fabricmc.net/" }
}

dependencies {
    minecraft "com.mojang:minecraft:\${project.minecraft_version}"
    mappings "net.fabricmc:yarn:\${project.yarn_mappings}:v2"
    modImplementation "net.fabricmc:fabric-loader:\${project.loader_version}"
    modImplementation "net.fabricmc.fabric-api:fabric-api:\${project.fabric_version}"
}

processResources {
    inputs.property "version", project.version
    filteringCharset "UTF-8"
    filesMatching("fabric.mod.json") {
        expand "version": project.version
    }
}

def targetJavaVersion = ${config.java_version}
java {
    toolchain.languageVersion = JavaLanguageVersion.of(targetJavaVersion)
    withSourcesJar()
}

tasks.withType(JavaCompile).configureEach {
    it.options.release = targetJavaVersion
}

jar {
    from("LICENSE") {
        rename { "\${it}_\${project.archivesName}"}
    }
}
`;
  }
}

function getSettingsGradle() {
  return `rootProject.name = 'mod-project'

pluginManagement {
    repositories {
        mavenCentral()
        gradlePluginPortal()
        maven { url "https://maven.fabricmc.net/" }
    }
}
`;
}

function getJavaVersion(version) {
  const config = FABRIC_VERSIONS[version];
  return config ? config.java_version : "21";
}

function getGradleVersion(version) {
  const config = FABRIC_VERSIONS[version];
  return config ? config.gradle_version : "8.12";
}

function getFabricModJson(version, modId, modName, description, entrypoint) {
  const config = FABRIC_VERSIONS[version];
  const schemaVersion = 1;

  return JSON.stringify({
    schemaVersion: schemaVersion,
    id: modId.toLowerCase().replace(/[^a-z0-9]/g, ""),
    version: "${version}",
    name: modName || modId,
    description: description || "A Fabric mod generated by AI",
    authors: ["AI Mod Generator"],
    contact: {},
    license: "MIT",
    icon: "assets/${modId.toLowerCase().replace(/[^a-z0-9]/g, "")}/icon.png",
    environment: "*",
    entrypoints: {
      main: [
        entrypoint || `${modId.toLowerCase().replace(/[^a-z0-9]/g, "")}.${modId}Mod`
      ]
    },
    depends: {
      fabricloader: ">=0.14.0",
      minecraft: `~${version}`,
      java: ">= " + (getJavaVersion(version) || "17")
    }
  }, null, 2);
}

function getMixinConfig(modId) {
  return JSON.stringify({
    required: true,
    minVersion: "0.8",
    package: `com.${modId.toLowerCase().replace(/[^a-z0-9]/g, "")}.mixin`,
    compatibilityLevel: "JAVA_17",
    mixins: [],
    client: [],
    injectors: {
      defaultRequire: 1
    }
  }, null, 2);
}

module.exports = {
  FABRIC_VERSIONS,
  getGradleProperties,
  getBuildGradle,
  getSettingsGradle,
  getJavaVersion,
  getGradleVersion,
  getFabricModJson,
  getMixinConfig
};
