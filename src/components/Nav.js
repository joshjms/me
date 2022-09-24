const navigation = [
    { name: "Home", href: "#", current: true },
];

function Nav() {
    return (
        <nav className="nav w-full bg-gray-800 p-2 fixed top-0 z-50">
            {/* Mobile View */}

            <div className="lg:hidden mx-auto">
                <div className="logo inline-block p-3 rounded-xl text-white hover:bg-gray-700 hover:cursor-pointer duration-500 ease-in-out">
                    <h1 className="text-xl">
                        > Joshua James <span className="blink">_</span>
                    </h1>
                </div>
            </div>

            {/* PC View */}

            <div className="hidden lg:block">
                <div className="logo inline-block mx-10 p-3 rounded-xl text-white hover:bg-gray-700 hover:cursor-pointer duration-500 ease-in-out">
                    <h1 className="text-xl">
                        > Joshua James <span className="blink">_</span>
                    </h1>
                </div>
                <div className="nav-links ml-10 inline-flex gap-4">
                    {navigation.map((link) => (
                        <a className="text-white p-3 rounded-xl hover:bg-gray-700 hover:cursor-pointer duration-500 ease-in-out">
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
}

export default Nav;
