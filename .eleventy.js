module.exports = function (eleventyConfig) {
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

  eleventyConfig.addFilter("find", function (arr=[], key="", value) {
    const thing =  arr?.filter(item => item[key] === value);
    return thing;
});
};
