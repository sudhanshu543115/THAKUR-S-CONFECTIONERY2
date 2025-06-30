import Map from "./map.js";

//import HomeCard from "../component/HomeCard";
import HomeCard from "../assest/download.jpeg";

import AllProduct from "../component/AllProduct";

const Home = () => {
  //const productData = useSelector((state) => state.product.productList);

  return (
    <div className="p-2 md:p-4">
      {/* Hero Section */}
      <div className="md:flex gap-4 py-2">
        <div className="md:w-1/2">
          <div className="flex gap-3 bg-slate-300 w-36 px-2 items-center rounded-full">
            <p className="text-sm font-medium text-slate-900">Bike Delivery</p>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2972/2972185.png"
              alt="bike"
              className="h-7"
            />
          </div>
          <h2 className="text-4xl md:text-7xl font-bold py-3">
            Delicious🍲Food🍽️ Delivered{" "}
            <span className="text-red-600">Fast, Fresh & Hot!</span>
          </h2>
          <p className="py-3 text-base">
            Welcome to{" "}
            <span className="text-red-600">Thakur Confectionery 😊</span> – your
            one-stop destination for tasty treats and daily essentials. Explore
            our wide range of fresh, hygienic, and affordable products delivered
            right to your doorstep with love and care.
          </p>
          <button className="font-bold bg-red-500 text-white px-4 py-2 rounded-md">
            🔴 Order Now
          </button>
        </div>

        {/* Cards beside Hero */}

        <div className="flex flex-col gap-4 w-full max-w-md mx-auto">
          {/* Cards beside Hero */}
          <img
            src={HomeCard}
            alt="Product 1"
            className="rounded-lg shadow-md w-full h-auto"
          />
          
        </div>
      </div>

      {/* All Products */}
      <div>
        <AllProduct heading={"Your Product"} />
      </div>
      <Map />
    </div>
  );
};

export default Home;
