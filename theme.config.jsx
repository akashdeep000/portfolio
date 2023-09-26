const YEAR = new Date().getFullYear();

export default {
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
