
import { styles } from "@/app/stylesPage";
import { navLinks } from "@/constans";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-night" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          href={"/"}
          className="flex items-center gap-2"
          onClick={() => {
            // setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <p className="text-white text-[18px] font-bold cursor-pointer flex ">
            Showcase &nbsp;
            <span className="sm:block hidden"> | Bejostore</span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
            {navLinks.map((nav) => (
                <li
                key={nav.id}
                >
                <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
            ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
