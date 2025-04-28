

const cookwareItems = [
  {
    name: "Global G2 8-Inch Chef’s Knife",
    description:
      "An absolute workhorse. Lightweight, razor-sharp, and perfect for all your chopping needs.",
    image:
      "https://m.media-amazon.com/images/I/6185l7oAf-L._AC_SL1500_.jpg",
    amazonLink:
      "https://www.amazon.com/dp/B00005OL44",
    category: "Preparation Tools & Essentials",
  },
  {
    name: "Lodge Cast Iron Skillet",
    description:
      "Pre-seasoned, versatile, and incredibly durable. A must-have for any serious cook.",
    image:
      "https://m.media-amazon.com/images/I/51hSkgFqVqL._AC_SL1250_.jpg",
    amazonLink:
      "https://www.amazon.com/dp/B00006JSUA",
    category: "Cookware & Bakeware",
    },
  
  // Add more products as needed
];

function CookWare() {
  return (
    <div className="bg-[#fff8f0] min-h-screen py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-orange-600 text-center">
          🍳 Kitchen Essentials List
        </h1>
        <p className="text-gray-700 text-lg text-center mb-12 max-w-3xl mx-auto">
          We’ve tested everything so you don’t have to. These are the best high-quality kitchen
          essentials worth your money — categorized and linked directly to Amazon.
        </p>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {cookwareItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-fit h-60 "
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-orange-500 mb-2">{item.name}</h3>
                <p className="text-gray-700 text-sm mb-4">{item.description}</p>
                <a
                  href={item.amazonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-white bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded"
                >
                  Buy on Amazon
                </a>
                <p className="mt-4 text-xs text-gray-500">Category: {item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CookWare;
