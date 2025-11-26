import type { GithubUser } from "../types/user";

export const fetchGithubUser = async (username: string) => {
  const res = await fetch(
    `${import.meta.env.VITE_GITHUB_API_URL}/users/${username}`
  );

  if (!res.ok) {
    throw new Error("User not found.");
  }

  const data: GithubUser = await res.json();
  return data;
};
