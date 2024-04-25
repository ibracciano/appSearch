const Category = ({
  handleSneakers,
  handleFlats,
  handleSandals,
  handleHeels,
  handleAll,
  val,
}) => {
  return (
    <div>
      <span className="inline-flex mb-2 font-bold">Category</span>
      <div className="space-x-2 cursor-pointer" onClick={handleAll}>
        <span
          className={
            val === "all"
              ? "w-3 h-3 border-2 border-gray-700 inline-block rounded-full bg-white"
              : "w-3 h-3 border border-gray-700 inline-block rounded-full bg-white"
          }
        ></span>
        <span>All</span>
      </div>

      <div className="space-x-2 cursor-pointer" onClick={handleSneakers}>
        <span
          className={
            val === "sneakers"
              ? "w-3 h-3 border-2 border-gray-700 inline-block rounded-full bg-white"
              : "w-3 h-3 border border-gray-700 inline-block rounded-full bg-white"
          }
        ></span>
        <span>Sneakers</span>
      </div>

      <div className="space-x-2 cursor-pointer" onClick={handleFlats}>
        <span
          className={
            val === "flats"
              ? "w-3 h-3 border-2 border-gray-700 inline-block rounded-full bg-white"
              : "w-3 h-3 border border-gray-700 inline-block rounded-full bg-white"
          }
        ></span>
        <span>Flats</span>
      </div>

      <div className="space-x-2 cursor-pointer" onClick={handleSandals}>
        <span
          className={
            val === "sandals"
              ? "w-3 h-3 border-2 border-gray-700 inline-block rounded-full bg-white"
              : "w-3 h-3 border border-gray-700 inline-block rounded-full bg-white"
          }
        ></span>
        <span>Sandals</span>
      </div>

      <div className="space-x-2 cursor-pointer" onClick={handleHeels}>
        <span
          className={
            val === "heels"
              ? "w-3 h-3 border-2 border-gray-700 inline-block rounded-full bg-white"
              : "w-3 h-3 border border-gray-700 inline-block rounded-full bg-white"
          }
        ></span>
        <span>Heels</span>
      </div>
    </div>
  );
};

export default Category;

("w-3 h-3 border border-gray-700 inline-flex rounded-full bg-white");
