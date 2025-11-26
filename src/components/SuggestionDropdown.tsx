import type { GithubUser } from "../types/user";

const SuggestionDropdown: React.FC<{
  suggestions: GithubUser[];
  onClick: (username: string) => void;
}> = ({ suggestions, onClick }) => {
  return (
    <ul className="absolute top-10 left-1 flex flex-col bg-white block w-md h-[50vh] overflow-y-scroll rounded-md">
      {suggestions.slice(0, 20).map((user) => (
        <li
          key={user.id}
          className="flex justify-left items-center text-md gap-4 px-6 py-4  hover:bg-zinc-300"
          onClick={() => onClick(user.login)}
        >
          <img
            src={user.avatar_url}
            alt={user.login}
            className="size-10 rounded-full"
          />
          {user.login || user.name}
        </li>
      ))}
    </ul>
  );
};

export default SuggestionDropdown;
