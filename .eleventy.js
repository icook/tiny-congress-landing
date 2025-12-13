module.exports = function(eleventyConfig) {
  // Copy the css directory to the output
  eleventyConfig.addPassthroughCopy("src/css");

  // Copy CNAME file for custom domain
  eleventyConfig.addPassthroughCopy("CNAME");

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
