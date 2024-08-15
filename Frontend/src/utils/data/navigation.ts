import { routes } from "@/routes";

export const menuLinks = [
  { id: "home", name: "Home", href: routes.home() },
  { id: "posts", name: "Posts", href: routes.posts() },
  { id: "login", name: "Login", href: routes.auth() },
];
