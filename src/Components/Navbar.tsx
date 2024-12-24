const Navbar = () => {
  return (
    <nav className="flex items-center justify-center gap-8 text-textDim w-full z-10 p-4 fixed top-0 bg-background">
      <p className="hover:text-white cursor-pointer">Services</p>
      <p className="hover:text-text cursor-pointer">Pricing</p>
      <p className="hover:text-text cursor-pointer">Features</p>
      <p className="hover:text-text cursor-pointer">About us</p>
    </nav>
  );
};

export default Navbar;
