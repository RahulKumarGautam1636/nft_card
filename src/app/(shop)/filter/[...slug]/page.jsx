import { getCategories, getFilteredProducts } from '@/api/api';
import { FilterSection, SortByDropdown, ShowDropdown } from '../filterSection';
import { FaListUl } from "react-icons/fa";
import { BsFillGridFill, BsGrid3X3GapFill  } from "react-icons/bs";
import { ProductCard } from '@/components/cards';
import { Suspense } from 'react';
import { ProductGridLoader } from '@/components/utils/loaders';

async function Filter(props) {
    
    const params = await props.params;
    const slug = params.slug;
    
    const catName = slug[0];
    const catId = slug[1];

    const searchParams = await props.searchParams;
    
    const minPrice = searchParams.minPrice || 100;
    const maxPrice = searchParams.maxPrice || 100000;
    const location = searchParams.location || 'All';
    const rating = searchParams.rating || '';

    const categories = await getCategories('filter');
    const allCategories = categories.categoryList.map(i => i.children).reduce((all, current) => [ ...all, ...current ]);

    return (
        <main className='mt-6'>
            <div className="container mx-auto px-4 flex flex-col md:flex-row gap-4">
                <FilterSection allCategories={allCategories} catName={catName} catId={catId} minPrice={minPrice} maxPrice={maxPrice} rating={rating} location={location} />
                <div className="w-full">
                    <ul className='w-full flex flex-wrap gap-4 items-center bg-gray-200 text-gray-600 py-1 px-[1.6rem] mb-4 gap-y-0'>
                        <li className='text-[1.25rem]'><FaListUl /></li>
                        <li className='text-[1.25rem]'><BsFillGridFill /></li>
                        <li className='text-[1.25rem]'><BsGrid3X3GapFill /></li>
                        <li className='m-0 md:ms-auto'><SortByDropdown /></li>
                        <li><ShowDropdown /></li>
                    </ul>
                    <Suspense fallback={<ProductGridLoader cardCount={12} />}>
                        {(async () => {
                            const filteredProducts = await getFilteredProducts(catName, catId, minPrice, maxPrice, location);
                            return (
                                <div className="grid gap-3 mt-4 product-grid relative">
                                    {filteredProducts.products.map(i => (<ProductCard key={i.id} data={i} styles={{maxWidth: 'none'}} />))}
                                </div>
                            )
                        })()}
                    </Suspense>
                </div>
            </div>
        </main>
    )
}

export default Filter;


// const ProductView = async ({ filteredProducts, catName, catId, minPrice, maxPrice, location }) => {
//     // const filteredProducts = await getFilteredProducts(catName, catId, minPrice, maxPrice, location);

//     console.log(catName, catId, minPrice, maxPrice, location, '0000000000000000000000000000000000000000');
    
//     return (
//         <div className="grid gap-3 mt-4 product-grid relative">
//             {filteredProducts.products.map(i => (<ProductCard key={i.id} data={i} styles={{maxWidth: 'none'}} />))}
//         </div>
//     )
// }


