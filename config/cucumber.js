module.exports = {
  default: {
    tags: process.env.npm_config_tags || "",
    formatOptions: {
      snippetInterface: "async-await",
    },
    paths: ["src/test/features/"],
    publishQuite: true,

    dryRun: false,
    require: ["src/test/steps/*.ts", "src/hooks/hooks.ts"],
    requireModule: ["ts-node/register"],
    format: [
      "html:test-results/reports/cucumber-report.html",
      "json:test-results/reports/cucumber-report.json",
      "rerun:@rerun.txt",
    ],
  },

  rerun: {
    formatOptions: {
      snippetInterface: "async-await",
    },
    publishQuite: true,

    dryRun: false,
    require: ["src/test/steps/*.ts", "src/hooks/hooks.ts"],
    requireModule: ["ts-node/register"],
    format: [
      "html:test-results/reports/cucumber-report.html",
      "json:test-results/reports/cucumber-report.json",
      "rerun:@rerun.txt",
    ],
  },
};
