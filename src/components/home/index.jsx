import { getCategories } from "@/api/api";

export const FeaturedCategories = async () => {

    const categories = await getCategories('Featured Products.');

    return (
        <section className="pt-7 pb-4 lg:pb-7">
            <h2 className="text-[1.4rem] md:text-2xl font-semibold mb-4">Featured Categories</h2>
            <div className="flex overflow-auto gap-3 md:gap-10">
            {categories.categoryList.map(i => (
                <div key={i.id} className="text-center min-w-fit cursor-pointer group flex-1 flex flex-col items-center">
                    <div className="rounded-full max-w-[7rem] lg:max-w-[9.5rem] p-[1.7rem] border border-gray-300 group-hover:shadow-xl group-hover:border-gray-400" style={{background: i.color}}>
                    <img className="max-w-full" src={'/images/categories/' + i.images[0]} />
                    </div>
                    <h3 className="text-lg font-semibold mt-2">{i.name}</h3>
                </div>
            ))}
            </div>
        </section>
    )
}