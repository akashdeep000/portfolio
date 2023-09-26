import { ThemeProvider } from "next-themes";
import { ArticleLayout } from "./article-layout";
import { BlogProvider } from "./blog-context";
import { DEFAULT_THEME } from "./constants";
import { PageLayout } from "./page-layout";
import { PostsLayout } from "./posts-layout";

const layoutMap = {
  post: ArticleLayout,
  page: PageLayout,
  posts: PostsLayout,
  tag: PostsLayout,
};

const BlogLayout = ({ config, children, opts }) => {
  const type = opts.frontMatter.type || "post";
  const Layout = layoutMap[type];
  if (!Layout) {
    throw new Error(
      `nextra-theme-blog does not support the layout type "${type}" It only supports "post", "page", "posts" and "tag"`
    );
  }
  return   (
    <BlogProvider opts={opts} config={config}>
      <Layout>{children}</Layout>
    </BlogProvider>
  );
};

export default function Layout({ children, ...context }) {
  const extendedConfig = { ...DEFAULT_THEME, ...context.themeConfig };

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <BlogLayout config={extendedConfig} opts={context.pageOpts}>
        {children}
      </BlogLayout>
    </ThemeProvider>
  );
}

export { useTheme } from "next-themes";
export { useBlogContext } from "./blog-context";
export { getStaticTags } from "./utils/get-tags";
