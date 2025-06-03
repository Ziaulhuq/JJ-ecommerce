const SearchMenu = () => {
  return (
    <div>
      <form>
        <input
          type="text"
          name="search"
          placeholder="Search products..."
          className=" rounded-lg p-2 w-[250px] border-2 text-sm focus-visible:ring-0"
        />
      </form>
    </div>
  );
};

export default SearchMenu;
