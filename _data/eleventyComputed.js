module.exports = {
  layout: data => {
    if (data.page?.fileSlug === "404" || data.page?.fileSlug === "secreto") {
      return false;
    }
    return "layouts/base.njk";
  }
};
