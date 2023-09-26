const YEAR = new Date().getFullYear();

export default {
  components: {
    h1: ({ children }) => (
      <h1 className="!m-1 font-sans tracking-wide">{children}</h1>
    ),
  },
  footer: (
    <small className="mt-16 block">
      <time>{YEAR}</time> © Your Name.
      <a className="float-right" href="/feed.xml">
        RSS
      </a>
    </small>
  ),
  readMore: "Read More →",
  postFooter: null,
  darkMode: true,
};
