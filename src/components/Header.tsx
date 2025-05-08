import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                {/* Left: Logo */}
                <div className="flex items-center gap-2">
                    <img
                        src="https://sse-website.s3.ap-south-1.amazonaws.com/common/10ysvg.svg"
                        alt="Logo"
                        className="h-10"
                    />
                    <div className="text-sm text-blue-900 font-semibold leading-tight">
                        <span className="text-xs block">Years of</span>
                        <span className="text-lg font-bold">solar square</span>
                    </div>
                </div>

                <nav className="hidden md:flex gap-6 text-black font-medium">
                    <Link to="/">Homes</Link>
                    <Link to="/housing-society">Housing Society</Link>
                    <Link to="/commercial">Commercial</Link>
                    <Link to="/about">About Us</Link>
                    <Link to="/careers">Careers</Link>
                    <div className="relative group">
                        <span className="cursor-pointer">More ▾</span>
                        <div className="absolute hidden group-hover:block bg-white shadow-md mt-2 py-2 rounded-md z-10">
                            <Link to="/faq" className="block px-4 py-2 hover:bg-gray-100">FAQ</Link>
                            <Link to="/blog" className="block px-4 py-2 hover:bg-gray-100">Blog</Link>
                        </div>
                    </div>
                </nav>

                <Link
                    to="/signup"
                    className="bg-gradient-to-r from-blue-800 to-black text-white px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 hidden md:inline"
                >
                    Sign up for free electricity →
                </Link>

                <button className="md:hidden text-black" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            {menuOpen && (
                <div className="md:hidden px-4 pb-4 bg-white">
                    <nav className="flex flex-col gap-4 font-medium text-black">
                        <Link to="/">Homes</Link>
                        <Link to="/housing-society">Housing Society</Link>
                        <Link to="/commercial">Commercial</Link>
                        <Link to="/about">About Us</Link>
                        <Link to="/careers">Careers</Link>
                        <Link to="/faq">FAQ</Link>
                        <Link to="/blog">Blog</Link>
                        <Link
                            to="/signup"
                            className="mt-2 bg-gradient-to-r from-blue-800 to-black text-white px-4 py-2 rounded-full text-sm font-semibold text-center"
                        >
                            Sign up for free electricity →
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
