import traverse from "./traverse";

export const getParent = ({ opts }) => {
  let back = null;
  const parentPages = [];
  const { route } = opts;

  traverse(opts.pageMap, (page) => {
    if (
      "route" in page &&
      route !== page.route &&
      (route + "/").startsWith(page.route === "/" ? "/" : page.route + "/")
    ) {
      parentPages.push(page);
    }
  });

  const parentPage = parentPages
    .reverse()
    .find(
      (page) =>
        "frontMatter" in page &&
        page.frontMatter &&
        page.frontMatter.type === "posts"
    );
    
    
    
  if (parentPage) {
    back = parentPage.route;
  }

  return { parentPage, back };
};
