import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { fetchGithubUser } from "../api/github";
import UserCard from "./UserCard";

const UserSearch = () => {
  const [username, setUseranme] = useState("");
  const [submittedUsername, setSubmittedUsername] = useState("");

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["users", submittedUsername],
    queryFn: () => fetchGithubUser(submittedUsername),
    enabled: !!submittedUsername,
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmittedUsername(username.trim());
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="mt-4 flex flex-col justify-center gap-2"
      >
        <input
          type="text"
          name="username"
          value={username}
          placeholder="Enter Github Username..."
          className="bg-slate-100 text-zinc-900 px-2 py-1 text-lg font-semibold outline-2 rounded-sm outline-zinc-400"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setUseranme(event.target.value)
          }
        />
        <button
          type="submit"
          className="text-white bg-blue-600 px-6 py-2 rounded-sm text-lg font-semibold tracking-wider"
        >
          Search
        </button>
      </form>

      {isLoading && <p className="text-zinc-900">Loading...</p>}
      {isError && <p className="text-red-600">{error.message}</p>}

      {data && <UserCard user={data} />}
    </>
  );
};

export default UserSearch;
