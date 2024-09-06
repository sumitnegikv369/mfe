const Header = () => {
  return <header className="bg-white lg:py-8">
    <nav className="shadow-md py-4 px-8 m-2 rounded-md border-2 flex items-center justify-between">
        <div>
            <h1 className="font-bold text-2xl">Host</h1>
        </div>
        <ul>
            <button className="bg-black font-bold text-white text-xl shadow-md py-2 px-4 rounded-md cursor-pointer">Login</button>
        </ul>
    </nav>
  </header>;
};
export default Header;
