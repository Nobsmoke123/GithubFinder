import { BsGithub } from "react-icons/bs";
import type { GithubUser } from "../types/user";

const UserCard: React.FC<{ user: GithubUser }> = ({ user }) => {
  return (
    <div className="mt-4 flex flex-col justify-center items-center gap-4 px-6 py-4 rounded-md shadow-xl/20 shadow-gray-900">
      <img
        src={user.avatar_url}
        alt={user.name}
        className="size-20 rounded-full border-2 border-zinc-600"
      />
      <h2 className="text-2xl font-semibold">{user.name || user.login}</h2>
      <p className="text-sm font-light text-center">{user.bio}</p>
      <a
        href={user.html_url}
        className="bg-zinc-800 text-white px-6 py-2 w-full text-center text-sm font-light rounded-sm flex justify-center items-center gap-3"
        target="_blank"
        rel={"noopener noreferrer"}
      >
        <BsGithub /> View Github Profile
      </a>
    </div>
  );
};

export default UserCard;
