import { sortDate } from "./date";
import traverse from "./traverse";

const isNav = (page) => {
  const type = "frontMatter" in page && page.frontMatter?.type;
  return type && ["page", "posts"].includes(type);
};
const isPost = (page) => {
  if (
    page.kind === "Folder" ||
    page.kind === "Meta" ||
    page.name.startsWith("_")
  )
    return false;
  const { draft, type } = page.frontMatter || {};
  return !draft && (!type || type === "post");
};

export const collectPostsAndNavs = ({ opts }) => {
  const posts = [];
  const navPages = [];
  const { route } = opts;
  traverse(opts.pageMap, (page) => {
    if (isNav(page)) {
      navPages.push({ ...page, active: page.route === route });
    }
    if (isPost(page)) {
      posts.push(page);
    }
  });
  posts.sort(sortDate);
  navPages.sort(sortDate);
  return { posts, navPages };
  
  
};