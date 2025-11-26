import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { fetchGithubUser, searchGithubUser } from "../api/github";
import UserCard from "./UserCard";
import RecentSearches from "./RecentSearches";
import { useDebounce } from "use-debounce";
import SuggestionDropdown from "./SuggestionDropdown";

const UserSearch = () => {
  const [username, setUseranme] = useState("");
  const [submittedUsername, setSubmittedUsername] = useState("");
  const [recentUsers, setRecentUsers] = useState<string[]>(() => {
    const stored = localStorage.getItem("recentUsers");
    return stored ? JSON.parse(stored) : [];
  });
  const [debouncedUsername] = useDebounce(username, 300);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    localStorage.setItem("recentUsers", JSON.stringify(recentUsers));
  }, [recentUsers]);

  // Query to fetch a github user
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["users", submittedUsername],
    queryFn: () => fetchGithubUser(submittedUsername),
    enabled: !!submittedUsername,
  });

  // Query to fetch github user suggestions
  const { data: suggestions } = useQuery({
    queryKey: ["github-user-suggestions", debouncedUsername],
    queryFn: () => searchGithubUser(debouncedUsername),
    enabled: debouncedUsername.length > 1,
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const user = username.trim();

    if (!user) return;

    setSubmittedUsername(user);
    setUseranme("");

    setRecentUsers((prev) => {
      const updated = [user, ...prev.filter((value) => value !== user)];
      return updated;
    });
  };

  const onRecentSearchSelect = (user: string) => {
    setUseranme(user);
    setSubmittedUsername(user);
  };

  const onSuggestionListClick = (username: string) => {
    setUseranme(username);
    setShowSuggestions(false);

    if (submittedUsername !== username) {
      setSubmittedUsername(username);
      setRecentUsers((prev) => [
        username,
        ...prev.filter((value) => value !== username),
      ]);
    } else {
      refetch();
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="mt-4 flex flex-col justify-center gap-2"
      >
        <div className="relative">
          <input
            type="text"
            name="username"
            value={username}
            placeholder="Enter Github Username..."
            className="w-full bg-slate-100 text-zinc-900 px-2 py-1 text-lg font-semibold outline-2 rounded-sm outline-zinc-400"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              const value = event.target.value;
              setUseranme(value);
              setShowSuggestions(value.trim().length > 1);
            }}
          />

          {showSuggestions && suggestions && suggestions?.length > 0 && (
            <SuggestionDropdown
              suggestions={suggestions}
              onClick={onSuggestionListClick}
            />
          )}
        </div>

        <button
          type="submit"
          className="text-white bg-blue-600 px-6 py-2 rounded-sm text-lg font-semibold"
        >
          Search
        </button>
      </form>

      {isLoading && <p className="text-zinc-900">Loading...</p>}
      {isError && <p className="text-red-600">{error.message}</p>}

      {data && <UserCard user={data} />}

      {recentUsers.length > 0 && (
        <RecentSearches users={recentUsers} onSelect={onRecentSearchSelect} />
      )}
    </>
  );
};

export default UserSearch;
