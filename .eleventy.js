const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addWatchTarget("src/css");
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
    // Return your Object options:
    return {
      markdownTemplateEngine: "njk",
      dir: {
        input: "src",
        output: "docs"
      }
    }
};