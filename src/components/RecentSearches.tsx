import { useQueryClient } from "@tanstack/react-query";
import { FaClock, FaUser } from "react-icons/fa";
import { fetchGithubUser } from "../api/github";

const RecentSearches: React.FC<{
  users: string[];
  onSelect: (user: string) => void;
}> = ({ users, onSelect }) => {
  const queryClient = useQueryClient();

  return (
    <div className="mt-6 bg-gray-200/50 px-6 py-4 rounded-md">
      <div className="flex justify-start items-center gap-2 mb-4">
        <FaClock className="text-zinc-900" />
        <h3 className="text-lg font-semibold text-zinc-900">Recent Searches</h3>
      </div>

      <ul className="flex flex-col gap-2">
        {users.map((user) => (
          <li
            key={user}
            className="bg-slate-300 hover:bg-neutral-500 rounded px-4 py-2 text-zinc-900 hover:text-white"
          >
            <button
              className="flex justify-start items-center gap-2  text-md font-semibold"
              onClick={() => onSelect(user)}
              onMouseEnter={() => {
                queryClient.prefetchQuery({
                  queryKey: ["users", user],
                  queryFn: () => fetchGithubUser(user),
                });
              }}
            >
              <FaUser className="" /> {user}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentSearches;
