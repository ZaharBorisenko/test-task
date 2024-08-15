"use client";
import { login } from "@/api/api";
import { authStore } from "@/store/user";
import { useStore } from "@nanostores/react";
import { useState } from "react";

export default function Page() {
  const auth = useStore(authStore);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await login(username, password);

    if (!result.success) {
      setError(result.message);
    }
  };
  return (
    <div>
      {!auth.isAuthenticated && (
        <div>
          <p>Test User: </p>
          <p>username: test</p>
          <p>password: 1234</p>
        </div>
      )}
      {auth.isAuthenticated ? (
        <div>
          <h2>Welcome, {auth.username}!</h2>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Login..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Войти</button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      )}
    </div>
  );
}
