const NAV_MENU = ["피드", "방문", "리뷰", "예약"];

function Nav() {
  return (
    <nav className="text-gray-200">
      <ul className="flex items-center justify-center gap-5 py-4">
        {NAV_MENU.map((item) => {
          return (
            <li key={crypto.randomUUID()} className="px-4">
              {item}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Nav;
