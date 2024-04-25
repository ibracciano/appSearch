
const Price = ({ price, priceOne, priceTwo, priceThree, priceFor, priceAll }) => {
    return (
        <div>
            <span className="inline-flex mt-3 mb-2 font-bold">Price</span>
            <div className="space-x-2 cursor-pointer" onClick={priceAll}>
                <span className={price === 'all' ? "inline-flex w-3 h-3 bg-white border-2 border-gray-700 rounded-full" : "inline-flex w-3 h-3 bg-white border border-gray-700 rounded-full"}></span>
                <span className={price === 'all' ? "text-gray-400" : "text-black"}>All</span>
            </div>

            <div className="space-x-2 cursor-pointer" onClick={priceOne}>
                <span className={price === 'one' ? "inline-flex w-3 h-3 bg-white border-2 border-gray-700 rounded-full" : "inline-flex w-3 h-3 bg-white border border-gray-700 rounded-full"}></span>
                <span className={price === 'one' ? "text-gray-400" : "text-black"}>$0 - 50</span>
            </div>

            <div className="space-x-2 cursor-pointer" onClick={priceTwo}>
                <span className={price === 'two' ? "inline-flex w-3 h-3 bg-white border-2 border-gray-700 rounded-full" : "inline-flex w-3 h-3 bg-white border border-gray-700 rounded-full"}></span>
                <span className={price === 'two' ? "text-gray-400" : "text-black"}>$50 - 100</span>
            </div>

            <div className="space-x-2 cursor-pointer" onClick={priceThree}>
                <span className={price === 'three' ? "inline-flex w-3 h-3 bg-white border-2 border-gray-700 rounded-full" : "inline-flex w-3 h-3 bg-white border border-gray-700 rounded-full"}></span>
                <span className={price === 'three' ? "text-gray-400" : "text-black"}>$100 - 150</span>
            </div>

            <div className="space-x-2 cursor-pointer" onClick={priceFor}>
                <span className={price === 'for' ? "inline-flex w-3 h-3 bg-white border-2 border-gray-700 rounded-full" : "inline-flex w-3 h-3 bg-white border border-gray-700 rounded-full"}></span>
                <span className={price === 'for' ? "text-gray-400" : "text-black"}>Over $150</span>
            </div>
        </div>
    )
}

export default Price
