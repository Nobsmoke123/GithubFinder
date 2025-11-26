import { FaGithub } from "react-icons/fa";
import UserSearch from "./components/UserSearch";

const App = () => {
  return (
    <div className="bg-white w-[35vw] px-6 py-6 rounded-lg shadow-xl shadow-stone-400">
      <div className="flex items-center justify-center gap-4">
        <FaGithub className="text-zinc" size={35} />
        <h1 className="font-bold text-center text-3xl text-zinc tracking-wider">
          Github Finder
        </h1>
      </div>

      <UserSearch />
    </div>
  );
};

export default App;
