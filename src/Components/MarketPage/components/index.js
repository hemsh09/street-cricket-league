import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

import { getProducts } from "../services";

const MarketPage = () => {
  const [sizeFilter, setSizeFilter] = useState("");
  const [colorFilter, setColorFilter] = useState("");
  const [brandFilter, setBrandFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [products, setProduct] = useState([]);
  const [showProduct, setShowProduct] = useState(products);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setShowProduct(products.slice(8));
  };

  const filteredProducts = products?.filter((product) => {
    const filter =
      product.size.toLowerCase().includes(sizeFilter.toLowerCase()) &&
      product.color.toLowerCase().includes(colorFilter.toLowerCase()) &&
      product.brand.toLowerCase().includes(brandFilter.toLowerCase()) &&
      priceFilter === ""
        ? product.price
        : product.price <= priceFilter;
    return filter;
  });

  useEffect(() => {
    getProducts(setProduct, setIsLoading);
  }, []);

  useEffect(() => {
    setShowProduct(filteredProducts);
  }, [sizeFilter, colorFilter, brandFilter, priceFilter, isLoading]);

  const sizes = ["S", "M", "L", "XL"];
  const colors = ["Red", "Blue", "Green", "Yellow", "White"];
  const brands = ["Nike", "Adidas", "Puma", "Reebok"];
  const prices = ["50", "100", "150", "200", "250"];

  return (
    <div className="container mx-auto py-10">
      <div className="text-[32px] mb-5 font-bold">Cricket Sports Market</div>
      <div className="flex flex-wrap justify-between">
        <div className="w-full lg:w-1/4 bg-white text-left p-5">
          <h2 className="text-2xl font-bold mb-2">Filters</h2>
          <div className="mb-4">
            <h3 className="font-bold mb-2">Size</h3>
            {sizes.map((size) => (
              <label key={size} className="block mb-2">
                <input
                  type="radio"
                  name="size"
                  value={size}
                  checked={sizeFilter === size}
                  onChange={(e) => setSizeFilter(e.target.value)}
                  className="mr-2"
                />
                {size}
              </label>
            ))}
          </div>
          <div className="mb-4">
            <h3 className="font-bold mb-2">Color</h3>
            {colors.map((color) => (
              <label key={color} className="block mb-2">
                <input
                  type="radio"
                  name="color"
                  value={color}
                  checked={colorFilter === color}
                  onChange={(e) => setColorFilter(e.target.value)}
                  className="mr-2"
                />
                {color}
              </label>
            ))}
          </div>
          <div className="mb-4">
            <h3 className="font-bold mb-2">Brand</h3>
            {brands.map((brand) => (
              <label key={brand} className="block mb-2">
                <input
                  type="radio"
                  name="brand"
                  value={brand}
                  checked={brandFilter === brand}
                  onChange={(e) => setBrandFilter(e.target.value)}
                  className="mr-2"
                />
                {brand}
              </label>
            ))}
          </div>
          <div>
            <h3 className="font-bold mb-2">Price</h3>
            <select
              value={priceFilter}
              onChange={(e) => setPriceFilter(e.target.value)}
              className="block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">All prices</option>
              {prices.map((price) => (
                <option key={price} value={price}>
                  {"<$" + price}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="w-full lg:w-3/4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 ml-5 gap-4">
            {isLoading ? (
              <div className="flex items-center justify-center text-[26px] font-bold">
                Loading ...
              </div>
            ) : (
              showProduct.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-md">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-52 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="text-lg font-bold mb-2">{product.name}</h4>
                    <p className="text-gray-700 text-base mb-2">
                      {product.description}
                    </p>
                    <p className="text-gray-500 text-base mb-2">
                      {product.brand}
                    </p>
                    <p className="text-gray-500 text-base">{`Price : $${product.price}`}</p>
                  </div>
                  <button className="w-1/4 m-auto mr-5 my-3 p-3 text-center hover:bg-green-200 hover:scale-110 bg-green-400 flex justify-center font-bold gap-4 items-center">
                    <div>Buy</div>
                    <FaArrowRight />
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <button
        onClick={handleClick}
        className="bg-[#ece53d] font-bold p-3 rounded-lg mt-10 m-auto text-black text-center flex justify-center"
      >
        Load More
      </button>
    </div>
  );
};

export default MarketPage;
