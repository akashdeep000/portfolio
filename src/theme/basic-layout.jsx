import Head from "next/head";
import { useRef } from "react";
import { useBlogContext } from "./blog-context";
import { HeadingContext } from "./mdx-theme";
import Nav from "./nav";

export const BasicLayout = ({ children }) => {
  const { config, opts } = useBlogContext();
  const title = `${opts.title}${config.titleSuffix || ""}`;
  const ref = useRef(null);
  return (
    <article
      className="container prose max-md:prose-sm dark:prose-dark"
      dir="ltr"
    >
      <Head>
        <title>{title}</title>
        {config.head?.({ title, meta: opts.frontMatter })}
      </Head>
      <Nav />
      <HeadingContext.Provider value={ref}>
        {/*
        opts.hasJsxInH1 ? (
          <h1 className="m!-0 !mt-3 !p-0 font-sans tracking-wide" ref={ref} />
        ) : null}
        {opts.hasJsxInH1 ? null : (
          <h1 className="!m-0 !p-0 font-sans tracking-wide">{opts.title}</h1>
        )
          */}
        {children}
        {config.footer}
      </HeadingContext.Provider>
    </article>
  );
};
