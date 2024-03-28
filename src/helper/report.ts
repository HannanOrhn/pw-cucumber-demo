const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "test-results/reports",
  reportPath: "./test-results/html-reports",
  metadata: {
    browser: {
      name: "chrome",
      version: "60",
    },
    device: "Local test machine",
    platform: {
      name: "windows",
      version: "11",
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "Custom project" },
      { label: "Release", value: "V9" },
      { label: "Cycle", value: "S131" },
    ],
  },
});