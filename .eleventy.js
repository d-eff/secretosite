module.exports = function (eleventyConfig) {  
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("favicon.ico");

  eleventyConfig.addFilter("unique", function (arr) {
    if (!Array.isArray(arr)) return arr;
    return [...new Set(arr)];
  });

  eleventyConfig.addFilter("sortNumeric", function (arr) {
    return arr.slice().sort((a, b) => a - b);
  });

  eleventyConfig.addFilter("map", (arr, prop) => {
    if (!Array.isArray(arr)) return arr;
    return arr.map(item => item[prop]);
  });

  eleventyConfig.addFilter("filter", function (arr=[], key="", value) {
    return arr?.filter(item => item[key] === value);
  });

  eleventyConfig.addFilter("find", function (arr=[], key="", value) {
    return arr?.find(item => item[key] === value);
  });

  return {
    dir: {
      output: "_site"
    }
  };
};
