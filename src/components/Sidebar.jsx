import { FaCartShopping } from "react-icons/fa6";
import Category from "../utils/Category";
import Price from "../utils/Price";
import Colors from "../utils/Colors";
const Sidebar = ({
  handleSneakers,
  handleFlats,
  handleSandals,
  handleHeels,
  handleAll,
  colorAll,
  colorBlue,
  colorBlack,
  colorRed,
  colorGreen,
  colorWhite,
  color,
  val,
  price,
  priceOne,
  priceTwo,
  priceThree,
  priceFor,
  priceAll,
}) => {
  return (
    <div className="border-r border-gray-300 w-[15%] h-screen fixed top-0">
      <nav className="flex items-center justify-center gap-3 py-3 border-b border-gray-300">
        <FaCartShopping />
        <span className="font-semibold">Shopping Day's</span>
      </nav>
      <main className="flex flex-col pt-5 pl-6">
        <Category
          val={val}
          handleSneakers={handleSneakers}
          handleFlats={handleFlats}
          handleSandals={handleSandals}
          handleHeels={handleHeels}
          handleAll={handleAll}
        />
        <Price price={price} priceOne={priceOne} priceTwo={priceTwo} priceThree={priceThree} priceFor={priceFor} priceAll={priceAll} />
        <Colors
          color={color}
          colorAll={colorAll}
          colorBlue={colorBlue}
          colorBlack={colorBlack}
          colorRed={colorRed}
          colorGreen={colorGreen}
          colorWhite={colorWhite}
        />
      </main>
    </div>
  );
};

export default Sidebar;
