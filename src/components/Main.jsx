import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";

import { AiFillStar } from "react-icons/ai";
import { FaShoppingBag } from "react-icons/fa";






const Main = ({ input, setInput, datas, All, Puma, Nike, Adidas, Vans, value }) => {


  return (
    <div className="ml-[15%] w-[85%]">
      <nav className="py-2 border-b border-gray-300 flex items-center gap-[650px] px-[5%] fixed w-full bg-white">
        <input
          type="text"
          placeholder="Enter your search shoes"
          className="px-3 py-1 bg-gray-200 border border-gray-200 outline-none"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <div className="flex gap-3">
          <CiHeart />
          <CiShoppingCart />
          <CiUser />
        </div>
      </nav>

      <main className="my-20">
        <h2 className="font-bold ml-[5%] mb-2">Recommended</h2>

        <div className="space-x-2 ml-[5%]">
          <button className={value === 'All' ? "px-2 py-1  rounded-sm bg-red-500 font-medium text-white" : "px-2 py-1 border border-gray-400 rounded-sm"}
            onClick={All}>
            All Products
          </button>

          <button className={value === 'Nike' ? "px-2 py-1  rounded-sm bg-red-500 font-medium text-white" : "px-2 py-1 border border-gray-400 rounded-sm"}
            onClick={Nike}>
            Nike
          </button>
          <button className={value === 'Adidas' ? "px-2 py-1  rounded-sm bg-red-500 font-medium text-white" : "px-2 py-1 border border-gray-400 rounded-sm"}
            onClick={Adidas}>
            Addidas
          </button>
          <button className={value === 'Puma' ? "px-2 py-1  rounded-sm bg-red-500 font-medium text-white" : "px-2 py-1 border border-gray-400 rounded-sm"}
            onClick={Puma}>
            Puma
          </button>
          <button className={value === 'Vans' ? "px-2 py-1  rounded-sm bg-red-500 font-medium text-white" : "px-2 py-1 border border-gray-400 rounded-sm"}
            onClick={Vans}>
            Vans
          </button>
        </div>

        <div className="grid grid-cols-5 gap-5 mx-[5%] my-[40px] ">
          {datas
            .filter((item) => {
              if (input.trim() === "") {
                return item;
              } else if (
                item.title.toLowerCase().includes(input.toLowerCase().trim())
              ) {
                return item;
              }
            })
            .map((item, i) => (
              <div
                key={i}
                className="px-3 py-2 border border-gray-200 rounded-md shadow-md"
              >
                <img src={item.img} alt="" />
                <h4 className="text-[12px] font-bold mt-2">{item.title} </h4>
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center text-yellow-500">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </div>
                  <span className="text-[12px]">123 reviews </span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <p>
                    <span className="font-semibold text-gray-300">
                      <del>{item.prevPrice}</del>{" "}
                    </span>
                    <span className="font-semibold">{item.newPrice}</span>
                  </p>
                  <FaShoppingBag />
                </div>
              </div>
            ))}
        </div>
      </main>
    </div>
  );
};

export default Main;
