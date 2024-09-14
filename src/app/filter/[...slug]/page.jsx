import { getCategories, getFilteredProducts } from '@/api/api';
import { FilterSection } from '../filterSection';

async function Filter({ params }) {

    console.log(params);
    

    const categories = await getCategories();
    const filteredProducts = await getFilteredProducts('66c0dfab3490222862ae78c7', 100, 100000, 'All');

    return (
        <FilterSection cat={categories} filteredProducts={filteredProducts} />
    )
}

export default Filter;


