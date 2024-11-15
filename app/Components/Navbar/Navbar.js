import Link from 'next/link';
import { VscThreeBars } from 'react-icons/vsc';

const Navbar = () => {
  const menuItems = {
    Home: "/",
    Pricing: "/pricing",
    Industries: "/industries",
    "How It Works": "/how-it-works",
    Login: "/login"
  };

  const industriesSubCategories = {
    "For Law Firms": "/industries/law-firms",
    "For Business": "/industries/business",
    "Company & Banks": "/industries/company-banks"
  };

  return (
    <nav className="bg-white border-b p-4 font-bold border-none fixed top-0 w-full z-20">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Left Side - Website Name */}
        <div className="text-xl font-bold">
          <Link href="/" legacyBehavior>
            <a className="text-gray-800 hover:text-blue-500">Online Notary</a>
          </Link>
        </div>
  
        {/* Right Side - Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {Object.entries(menuItems).map(([label, path]) => (
            <div key={label} className="relative group">
              {label === "Industries" ? (
                <div className="relative group">
                  <Link href={path} legacyBehavior>
                    <a className="text-gray-800 hover:text-blue-500 font-bold">
                      {label}
                    </a>
                  </Link>

                  {/* Subcategories */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white shadow-lg rounded-md py-2 flex flex-col space-y-1 z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 ease-in-out">
                    {Object.entries(industriesSubCategories).map(([subLabel, subPath]) => (
                      <Link key={subLabel} href={subPath} legacyBehavior>
                        <a className="block px-4 py-2 text-gray-800 hover:bg-blue-100 rounded">{subLabel}</a>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link href={path} legacyBehavior>
                  <a
                    className={`${
                      label === "How It Works" || label === "Login"
                        ? "px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-400"
                        : "text-gray-800 hover:text-blue-500"
                    }`}
                  >
                    {label}
                  </a>
                </Link>
              )}
            </div>
          ))}
        </div>
  
        {/* Mobile Menu Icon */}
        <div className="md:hidden relative group">
          <VscThreeBars size={24} className="text-gray-800 cursor-pointer" />
          {/* Mobile Dropdown Menu */}
          <div className="absolute right-0 top-full mt-2 bg-white shadow-lg rounded-md py-2 flex flex-col space-y-1 z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 ease-in-out">
            {Object.entries(menuItems).map(([label, path]) => (
              <div key={label}>
                {label === "Industries" ? (
                  <div className="relative group">
                    <a className="text-gray-800 block w-full text-left px-4 py-2 cursor-pointer">
                      {label}
                    </a>
                    <div className="absolute left-full top-0 ml-2 bg-white shadow-lg rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 ease-in-out">
                      {Object.entries(industriesSubCategories).map(([subLabel, subPath]) => (
                        <Link key={subLabel} href={subPath} legacyBehavior>
                          <a className="block px-4 py-2 text-gray-800 hover:bg-blue-100 rounded">
                            {subLabel}
                          </a>
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link href={path} legacyBehavior>
                    <a className="block px-4 py-2 text-gray-800 hover:bg-blue-500">
                      {label}
                    </a>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
