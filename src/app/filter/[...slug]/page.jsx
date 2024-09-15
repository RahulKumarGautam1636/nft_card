import { getCategories, getFilteredProducts } from '@/api/api';
import { FilterSection } from '../filterSection';

async function Filter({ params }) {

    const slug = params.slug;
    
    const catType = slug[0];
    const catId = slug[1];

    const categories = await getCategories('filter');
    // const filteredProducts = await getFilteredProducts('66c0dfab3490222862ae78c7', 100, 100000, 'All');
    const filteredProducts = await getFilteredProducts(catType, catId, 100, 100000, 'All');
    // const filteredProducts = { categoryList: [] };

    return (
        <FilterSection cat={categories} filteredProducts={filteredProducts} />
    )
}

export default Filter;


