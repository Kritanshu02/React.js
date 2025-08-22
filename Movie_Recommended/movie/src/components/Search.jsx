function Search({ searchTerm, setSearchTerm, onSearch }) {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-6 px-4 ">
      <div className="flex items-center gap-2">
        {/* <img src="search.svg" alt="search" className="w-5 h-5" /> */}
        <input
          type="text"
          placeholder="Search through thousands of movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyPress}
          className="p-2 border border-gray-500  rounded w-full max-w-md"
        />
        <button
          onClick={onSearch}
          className="mt-2 w-20 py-1 bg-stone-950 text-white font-semibold rounded-lg hover:bg-stone-600"
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default Search;











