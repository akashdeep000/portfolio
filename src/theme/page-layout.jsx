import { useBlogContext } from "./blog-context";
import { BasicLayout } from "./basic-layout";
import { MDXTheme } from "./mdx-theme";

export const PageLayout = ({ children }) => {
  const { opts } = useBlogContext();
  return (
    <BasicLayout>
      <MDXTheme>{children}</MDXTheme>
    </BasicLayout>
  );
};
