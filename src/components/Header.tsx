import { Link } from "react-router";
import { useState } from "react";

function Header() {
    const [menu, setMenu] = useState(1);
    return (
        <nav className="flex flex-row justify-between bg-[#2E2B28] text-white md:px-40 py-3">
            <a className="flex flex-row p-2 gap-2">
                <img src="/images/logo.png" alt="Logo" className="h-12 rounded-full" />
                <h1 className="p-2 text-2xl font-bold">Coffee Shop</h1>
            </a>
            <ul className="flex flex-row justify-center gap-5">
                <li className="p-6">
                    <Link
                        to="/"
                        className={
                            menu == 1
                                ? "cursor-default text-white border-b-2 border-[#C89F94]"
                                : "text-gray-300 hover:text-[#C89F94]"
                        }
                        onClick={() => setMenu(1)}
                    >
                        Home
                    </Link>
                </li>
                <li className="p-6">
                    <Link
                        to="/about"
                        className={
                            menu == 2
                                ? "cursor-default text-white border-b-2 border-[#C89F94] "
                                : "text-gray-300 hover:text-[#C89F94]"
                        }
                        onClick={() => setMenu(2)}
                    >
                        About
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Header;
