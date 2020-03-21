module.exports = function(eleventyConfig) {
  eleventyConfig.setTemplateFormats("html,liquid,njk,gif,jpg");
  eleventyConfig.setBrowserSyncConfig({
    host: "0.0.0.0"
  });
}