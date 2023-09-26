# Minimal Portfolio Website

This portfolio is built with **Next.js** and a library called [Nextra](https://nextra.vercel.app/). It allows you to write Markdown and focus on the _content_ of your portfolio. This website includes:

- Automatically configured to handle Markdown/MDX
- Generates an RSS feed based on your posts
- A beautiful theme
- Easily categorize posts with tags
- You can use Tailwind classes in your Markdown files

## Run locally

```bash
npm install
npm dev
```

## Configuration

1. Update your name in `theme.config.js` or change the footer.
2. Update your name and site URL for the RSS feed in `src/scripts/gen-rss.js`.
3. Update the meta tags in `src/pages/_document.js`.
4. Add your resume to `public` folder.
5. Update the `src/pages/index.mdx` with your own content for home page and resume link.
6. Update the posts inside `src/pages/posts/*.md` with your own content.
