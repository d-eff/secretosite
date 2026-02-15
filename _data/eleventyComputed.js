module.exports = {
  layout: data => {
    const exemptions = ["404", "grid", "secreto"];
    if (exemptions.includes(data.page?.fileSlug)) {
      return false;
    }
    return "layouts/base.njk";
  }
};
