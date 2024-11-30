'use client';
import { Button, FormControlLabel, Slide, Slider } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import { useEffect, useState } from 'react';
import { FaListUl } from "react-icons/fa";
import { BsFillGridFill, BsGrid3X3GapFill  } from "react-icons/bs";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { ProductCard } from '@/components/cards';
import { Star, StarBorder, StarHalf } from '@mui/icons-material';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { getFilteredProducts } from '@/api/api';
import { MyLoader } from '@/components/utils';
// import { useSelector } from 'react-redux';

export const FilterSection = ({ cat, filteredProducts }) => {  
    
    const [products, setProducts] = useState({ loading: false, data: filteredProducts, err: { status: false, msg: '' }});
    const categories = cat // useSelector((state) => state.categories);
    const [filters, setFilters] = useState({ catName: '', catId: '', rating: '', price: [100, 100000] });
    const router = useRouter();

    const params = useParams().slug;
    const catName = params[0]   
    const catId = params[1]   


    const searchParams = useSearchParams();
    let minPrice = searchParams.get('minPrice') || '';
    let maxPrice = searchParams.get('maxPrice') || '';
    let rating = searchParams.get('rating') || '';
    let location = searchParams.get('location') || 'All';

    const filterProducts = async (catName, catId, minPrice=100, maxPrice=100000, location='All') => {
        setProducts(pre => ({ ...pre, loading: true }));       
        const filterResult = await getFilteredProducts(catName, catId, minPrice, maxPrice, location);
        console.log(filterResult);  
        setTimeout(() => {
            setProducts(pre => ({ ...pre, loading: false, data: filterResult }));
        }, [2000])
    }

    useEffect(() => {
        if (!minPrice && !maxPrice && !rating) return;
        filterProducts(catName, catId, minPrice, maxPrice, location);   
        console.log(catName, catId, minPrice, maxPrice);   
    }, [catName, catId, minPrice, maxPrice])

    useEffect(() => {
        updateFilters(catName, catId, minPrice || 100, maxPrice || 100000);   
    }, [catName, catId, minPrice, maxPrice, rating])

    const updateFilters = (catName, catId, minPrice, maxPrice) => {
        setFilters({ catName: catName, catId: catId, rating: rating, price: [minPrice, maxPrice] });
    }

    console.log(filters);
    const handleFilters = () => {
        router.push(`/filter/${filters.catName}/${filters.catId}/?minPrice=${filters.price[0]}&maxPrice=${filters.price[1]}&location=${location}`);
    }

    const [checked, setChecked] = useState(true);

    const handleCheck = (e, item) => {
        console.log(item);        
        if (item.children.length) {
            setFilters(pre => ({ ...pre, catName: 'catId', catId: item.id }));       
        } else {
            setFilters(pre => ({ ...pre, catName: 'subCatId', catId: item.id }));       
        }
    };

    const [age, setAge] = useState('');

    const handleChange2 = (event) => {
      setAge(event.target.value);
    };

    const handleRange = (event, newValue) => {
        setFilters(pre => ({ ...pre, price: newValue }));
    };       

    return (
        <main className='mt-12 '>
            {products.loading ? <MyLoader /> : ''}
            <div className="container mx-auto px-4 flex flex-col md:flex-row gap-4">
                <div>
                    <div className="mb-6">
                        <h2 className="text-xl font-semibold mb-3">Product Categories</h2>
                        <div>
                            <ul>
                                {categories.map(i => (
                                    <li key={i.id}>
                                        <FormControlLabel control={<Checkbox className='py-[0.35rem]' checked={filters.catId === i.id ? true : false} onChange={(e) => handleCheck(e, i)} inputProps={{ 'aria-label': 'controlled' }} /> } label={i.name} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className='mb-6'>
                        <h2 className="text-xl font-semibold mb-3">Filter By Price</h2>
                        {/* <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" /> */}
                        <div>
                            <Slider getAriaLabel={() => 'Temperature range'} value={filters.price} onChange={handleRange} valueLabelDisplay="auto" getAriaValueText={() => 'Value Text'} min={100} max={100000} />
                            <div className='flex justify-between items-center'>
                                <p>₹ {filters.price[0]}</p>
                                <p>₹ {filters.price[1]}</p>
                            </div>
                        </div>
                    </div>
                    <div className='mb-4'>
                        <h2 className="text-xl font-semibold mb-3">Filter By Rating</h2>
                        <div>
                            {[5,4,3,2,1].map(i => (
                                <div key={i} className="text-yellow-600 flex gap-2 cursor-pointer">
                                    {[1,2,3,4,5].map(x => x <= i ? <Star key={x} /> : <StarBorder key={x} />)}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='mb-4'>
                        <h2 className="text-xl font-semibold mb-3">Product Status</h2>
                        <div>
                            <ul>
                                <li>
                                    <FormControlLabel control={<Checkbox className='py-[0.35rem]' checked={checked} onChange={() => {}} inputProps={{ 'aria-label': 'controlled' }} /> } label={'In Stock'} />
                                </li>
                                <li>
                                    <FormControlLabel control={<Checkbox className='py-[0.35rem]' checked={checked} onChange={() => {}} inputProps={{ 'aria-label': 'controlled' }} /> } label={'In Sale'} />
                                </li>
                            </ul>
                        </div>
                    </div><div className='mb-6'>
                        <Button onClick={handleFilters} className="bg-purple-600 text-white rounded-lg py-3 hover:bg-purple-500 w-full">Apply Filters</Button>
                    </div>
                    <div>
                        <img className='max-w-[22rem]' src='/images/sidebar-banner.gif' alt='sidebar' />
                    </div>
                </div>
                <div className="w-full">
                    <ul className='w-full flex flex-wrap gap-4 items-center bg-gray-200 text-gray-600 py-1 px-[1.6rem] mb-4 gap-y-0'>
                        <li className='text-[1.25rem]'><FaListUl /></li>
                        <li className='text-[1.25rem]'><BsFillGridFill /></li>
                        <li className='text-[1.25rem]'><BsGrid3X3GapFill  /></li>
                        <li className='m-0 md:ms-auto'>
                            <FormControl sx={{ m: 1, minWidth: 120 }} size="small" className='bg-white'>
                                <InputLabel id="demo-select-small-label">Sort By</InputLabel>
                                <Select labelId="demo-select-small-label" id="demo-select-small" value={age} label="Sort By" onChange={handleChange2} >
                                    <MenuItem value="">
                                    <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </li>
                        <li>
                            <FormControl sx={{ m: 1, minWidth: 120 }} size="small" className='bg-white'>
                                <InputLabel id="demo-select-small-label">Show 10</InputLabel>
                                <Select labelId="demo-select-small-label" id="demo-select-small" value={age} label="Show" onChange={handleChange2} >
                                    <MenuItem value="">
                                    <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>10</MenuItem>
                                    <MenuItem value={20}>20</MenuItem>
                                    <MenuItem value={30}>30</MenuItem>
                                </Select>
                            </FormControl>
                        </li>
                    </ul>
                    <div className="grid gap-3 mt-4 product-grid relative">
                        {products.data.products.map(i => (<ProductCard key={i.id} data={i} styles={{maxWidth: 'none'}} />))}
                    </div>
                </div>
            </div>
        </main>
    )
}