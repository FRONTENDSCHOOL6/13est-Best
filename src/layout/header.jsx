import Profile from "../components/Profile";
import Nav from "./Nav";

function Header() {
  return (
    <header className="bg-primary pt-9 text-white">
      <Profile />
      <Nav />
    </header>
  );
}

export default Header;
