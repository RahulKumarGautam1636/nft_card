import { getCategories } from "@/api/api";
import { imgSource } from "@/api/actionUtils";
import { Button, ButtonBase } from "@mui/material";
import Link from "next/link";

export const FeaturedCategories = async () => {

    const categories = await getCategories('Featured Products.');

    return (
        <section className="pt-[2.65rem] lg:pt-4 pb-4 lg:pb-6">
            <h2 className="text-[1.4rem] md:text-2xl font-semibold mb-4 hidden lg:block">Featured Categories</h2>
            <div className="flex overflow-auto gap-3 md:gap-10">
            {categories.categoryList.map(i => (
                <ButtonBase variant="text" key={i.id} className="text-center min-w-fit cursor-pointer group flex-1 flex flex-col items-center">
                    <Link href={`#`}>
                        {/* <div className="rounded-full max-w-[7rem] lg:max-w-[9.5rem] p-[1.7rem] border border-gray-300 group-hover:shadow-xl group-hover:border-gray-400" style={{background: i.color}}> */}
                        <div className="rounded-full max-w-[7rem] lg:max-w-[9.5rem] p-[1.7rem] shadow-sm shadow-purple-400 group-hover:shadow-md group-hover:shadow-purple-400" style={{background: i.color}}>
                            <img className="max-w-full" src={imgSource('categories', i.images[0])} />
                        </div>
                        <h3 className="text-lg font-semibold mt-2">{i.name}</h3>
                    </Link>
                </ButtonBase>
            ))}
            </div>
        </section>
    )
}