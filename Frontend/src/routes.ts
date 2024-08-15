export const routes = {
  home() {
    return "/";
  },
  posts() {
    return "/posts";
  },
  post(slug: string) {
    return `posts/${slug}`;
  },
  auth() {
    return "/auth";
  },
};
