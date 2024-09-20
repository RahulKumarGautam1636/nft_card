import { getBanners, getCategories, getFilteredProducts } from '@/api/api';
import { FilterSection } from '../filterSection';

async function Filter({ params }) {

    const slug = params.slug;
    
    const catType = slug[0];
    const catId = slug[1];

    const categories = await getCategories('filter');
    const filteredProducts = await getFilteredProducts(catType, catId, 100, 100000, 'All');
    // const homeSideBanners = await getBanners('homeSideBanners');

    return (
        <FilterSection cat={categories} filteredProducts={filteredProducts}  />
    )
}

export default Filter;


