module.exports = function(eleventyConfig) {
  // Copy the css directory to the output
  eleventyConfig.addPassthroughCopy("src/css");

  // Copy logo and favicon
  eleventyConfig.addPassthroughCopy("src/logo.svg");
  eleventyConfig.addPassthroughCopy("src/favicon.ico");

  // Copy CNAME file for custom domain
  eleventyConfig.addPassthroughCopy("CNAME");

  // Copy robots.txt
  eleventyConfig.addPassthroughCopy("src/robots.txt");

  // Add date filter for sitemap
  eleventyConfig.addFilter("dateFilter", function(date) {
    return new Date().toISOString().split('T')[0];
  });

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
