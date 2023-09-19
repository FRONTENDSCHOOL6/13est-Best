import { TiThMenu } from "react-icons/ti";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-primary text-white">
      <div className="mx-auto flex max-w-3xl items-center justify-between p-2">
        <h1>
          <Link to="/" className="flex items-center">
            <img src="/logo.svg" alt="베스트 플레이스" className="h-6 w-6" />
            <div className="ml-2 text-lg font-bold">
              <span className="font-black text-secondary">B</span>est{" "}
              <span className="font-black text-secondary">P</span>lace
            </div>
          </Link>
        </h1>
        <button type="button">
          <TiThMenu className="text-2xl text-secondary" />
        </button>
      </div>
    </header>
  );
}

export default Header;
