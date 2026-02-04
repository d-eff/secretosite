module.exports = {
  layout: data => {
    if (data.page?.fileSlug === "404") {
      return false;
    }
    return "layouts/base.njk";
  }
};
