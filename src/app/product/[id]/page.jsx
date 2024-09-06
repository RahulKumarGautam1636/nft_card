import { Star } from "@mui/icons-material";

export default async function Product() {
  
  return (
    <div className="product-page mt-3 py-8 bg-gray-100">  
      <main className="container mx-auto px-3">
        <section className="p-7 rounded-[1.3rem] bg-white">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Field Roast Chao Cheese Creamy Original</h2>
            <div className="flex gap-4 font-medium">
                <div className="text-yellow-600 flex gap-[0.1rem]">
                    {Array.from(Array(5).keys()).map(i => (<Star key={i} />))}
                </div>
                <p className="text-gray-500">1 Review</p>
                <span className="w-[2px] bg-gray-300"></span>
                <p className="text-gray-500">SKU: F95MK</p>
            </div>
          </div>
          <div>

          </div>
        </section>
      </main>
    </div>
  );
}
