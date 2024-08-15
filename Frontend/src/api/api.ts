import { authStore } from "@/store/user";
import axios from "axios";

export const getAllPosts = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return response.data;
  } catch (error) {
    console.error("error loading posts: ", error);
  }
};

export const getPost = async (id: string) => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    return response.data;
  } catch (error) {
    console.error("error loading post: ", error);
  }
};

export const getAllCommentPost = async (id: string) => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );
    return response.data;
  } catch (error) {
    console.error("error loading comments: ", error);
  }
};

export const getUser = async (id: string) => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    return response.data;
  } catch (error) {
    console.error("error loading user: ", error);
  }
};

export async function login(username: string, password: string) {
  try {
    const response = await fetch("http://localhost:3030/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (data.success) {
      authStore.set({ isAuthenticated: true, token: data.token, username });
      return { success: true };
    } else {
      return { success: false, message: data.message };
    }
  } catch (error) {
    console.error("error:", error);
    return { success: false, message: "error server" };
  }
}
