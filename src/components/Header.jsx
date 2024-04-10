import Navigation from "./Navigation";

function Header() {
  return (
    <header className="w-[calc(100vw-5%)] absolute top-0 left-[2.5%] z-10 bg-transparent">
      <Navigation />
    </header>
  );
}

export default Header;
