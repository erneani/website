export default function useFooter() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return {
    scrollToTop,
  };
}
