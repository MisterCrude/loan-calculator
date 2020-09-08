const path = require("path");

module.exports = function override(config) {
  config.resolve.alias = {
    ...config.resolve.alias,
    "@assets": path.resolve(__dirname, "src/assets/"),
    "@components": path.resolve(__dirname, "src/components/"),
    "@typing": path.resolve(__dirname, "src/typing/"),
    "@utils": path.resolve(__dirname, "src/utils/"),
    "@config": path.resolve(__dirname, "src/config/"),
  };

  return config;
};
