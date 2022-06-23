const { config } = require("@swc/core/spack");

module.exports = config({
  entry: {
    index: __dirname + "/src.js",
  },
  output: {
    path: __dirname + "/dist",
  },
  module: {},
});
