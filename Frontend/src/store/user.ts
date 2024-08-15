import { atom } from "nanostores";

export const authStore = atom({
  isAuthenticated: false,
  token: "",
  username: "",
});
