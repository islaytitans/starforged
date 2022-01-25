import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-center bg-black py-3 font-mono text-2xl font-extrabold text-white">
      <Link href="/">
        <a>
          <p>Starforged - Starting Sector</p>
        </a>
      </Link>
    </header>
  );
};

export default Header;
