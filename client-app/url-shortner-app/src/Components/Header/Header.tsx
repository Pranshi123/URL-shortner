import * as React from 'react';

interface IHeaderProps {
}

const Header: React.FunctionComponent<IHeaderProps> = () => {
  return (
    <div className="bg-slate-900">
        <div className="container flex justify-between items-center p-2 mx-auto">
            <nav className="py-5">
                <div className="text-base text-white">URLShortner</div>
            </nav>
            <div>
                {/* Signup Button */}
                <a href="http://127.0.0.1:5500/index.html" target="_blank" rel="noopener noreferrer">
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mr-2 rounded">Signup</button>
                </a>
                {/* Login Button */}
                <a href="http://127.0.0.1:5500/index.html" target="_blank" rel="noopener noreferrer">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</button>
                </a>
            </div>
        </div>
    </div>
  );
};

export default Header;
