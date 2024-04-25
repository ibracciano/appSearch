const Colors = ({ color, colorWhite, colorBlue, colorRed, colorBlack, colorGreen, colorAll }) => {
  return (
    <div>
      <span className="inline-flex mt-3 mb-2 font-bold">Colors</span>
      <div className="space-x-2 cursor-pointer" onClick={colorAll}>
        <span className={color === "all" ? "inline-flex w-3 h-3 bg-gray-200 border-2 border-gray-700 rounded-full" : "inline-flex w-3 h-3 bg-gray-200 border border-gray-700 rounded-full"} ></span>
        <span className={color === 'all' ? "text-gray-300" : "text-black"}>All</span>
      </div>

      <div className="space-x-2 cursor-pointer" onClick={colorBlack}>
        <span className="inline-flex w-3 h-3 bg-black border border-gray-700 rounded-full"></span>
        <span className={color === 'black' ? "text-gray-300" : "text-black"}>Black</span>
      </div>

      <div className="space-x-2 cursor-pointer" onClick={colorBlue}>
        <span className="inline-flex w-3 h-3 bg-blue-600 border border-gray-700 rounded-full"></span>
        <span className={color === 'blue' ? "text-gray-300" : "text-black"}>Blue</span>
      </div>

      <div className="space-x-2 cursor-pointer" onClick={colorRed}>
        <span className="inline-flex w-3 h-3 bg-red-600 border border-gray-700 rounded-full"></span>
        <span className={color === 'red' ? "text-gray-300" : "text-black"}>Red</span>
      </div>

      <div className="space-x-2 cursor-pointer" onClick={colorGreen}>
        <span className="inline-flex w-3 h-3 bg-green-700 border border-gray-700 rounded-full"></span>
        <span className={color === 'green' ? "text-gray-300" : "text-black"}>Green</span>
      </div>

      <div className="space-x-2 cursor-pointer" onClick={colorWhite}>
        <span className="inline-flex w-3 h-3 bg-white border border-gray-700 rounded-full"></span>
        <span className={color === 'white' ? "text-gray-300" : "text-black"} >White</span>
      </div>
    </div>
  );
};

export default Colors;
