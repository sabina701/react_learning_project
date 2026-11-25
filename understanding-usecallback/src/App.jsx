import React, { useCallback, useState } from "react";
import ProductList from "./components/ProductList";
import SearchInput from "./components/SearchInput";

const App = () => {
  const products = [
    "Laptop",
    "keyboard",
    "Mobile",
    "Mouse",
    "Computer",
    "samsung Galaxy J1 Ace",
  ];
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const filteredProducts = products.filter((product) => {
    return product.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <>
      <h2>product Search </h2>
      <SearchInput search={search} onSearch={handleSearch} />
      <ProductList products={filteredProducts} />
      <hr />
      count:{count}
      <br />
      <button onClick={() => setCount(count + 1)}>Counter</button>
    </>
  );
};

export default App;
