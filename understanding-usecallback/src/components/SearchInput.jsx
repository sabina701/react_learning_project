import React from "react";

const SearchInput = React.memo(({ search, onSearch }) => {
  console.log("search input rendered");
  return (
    <div>
      <input
        type="text"
        placeholder="Enter you search products"
        value={search}
        onChange={onSearch}
      />
    </div>
  );
});

export default SearchInput;
