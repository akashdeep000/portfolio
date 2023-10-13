import Link from "next/link";
import { useBlogContext } from "./blog-context";
import ThemeSwitch from "./theme-switch";
import { collectPostsAndNavs } from "./utils/collect";

export default function Nav() {
  const { opts, config } = useBlogContext();
  const { navPages } = collectPostsAndNavs({ opts, config });

  return (
    <div className="flex items-center gap-3">
      <div className="flex grow flex-wrap items-center justify-end gap-3">
        {navPages.map((page) => {
          const name = page.frontMatter?.title || page.name;
          if (name === "Posts") return null;
          if (page.active) {
            return (
              <span
                key={page.route}
                className="cursor-default dark:text-gray-400 text-gray-600"
              >
                {name}
              </span>
            );
          }
          return (
            <Link key={page.route} href={page.route} passHref legacyBehavior>
              <a>{name}</a>
            </Link>
          );
        })}
        {config.navs?.map((nav) => (
          <Link key={nav.url} href={nav.url} passHref legacyBehavior>
            <a>{nav.name}</a>
          </Link>
        ))}
      </div>
      {config.darkMode && <ThemeSwitch />}
    </div>
  );
}
