const path = require("path");

module.exports = function override(config) {
  config.resolve.alias = {
    ...config.resolve.alias,
    "@assets": path.resolve(__dirname, "src/assets/"),
    "@containers": path.resolve(__dirname, "src/containers/"),
    "@types": path.resolve(__dirname, "src/types/"),
    "@utils": path.resolve(__dirname, "src/utils/"),
    "@confing": path.resolve(__dirname, "src/confing/"),
  };

  return config;
};
