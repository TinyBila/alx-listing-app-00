const Header = () => {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">ALX Listing App</h1>
      <nav className="space-x-4">
        <a href="/" className="text-gray-600 hover:text-black">Home</a>
        <a href="/listings" className="text-gray-600 hover:text-black">Listings</a>
        <a href="/about" className="text-gray-600 hover:text-black">About</a>
      </nav>
    </header>
  );
};
export default Header;
