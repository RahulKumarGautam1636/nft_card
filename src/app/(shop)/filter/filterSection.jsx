'use client';
import { Button, FormControlLabel, IconButton, Slide, Slider } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import { useEffect, useState } from 'react';
import { FaListUl } from "react-icons/fa";
import { BsFillGridFill, BsGrid3X3GapFill  } from "react-icons/bs";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Star, StarBorder } from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import { BiX } from 'react-icons/bi';
import { RiFilter2Fill } from 'react-icons/ri';


export const FilterSection = ({ children, allCategories, catName, catId, minPrice, maxPrice, location, rating }) => {  
     
    const [filters, setFilters] = useState({ catName: '', catId: '', rating: '', price: [100, 100000] });
    const router = useRouter();  
    const [active, setActive] = useState(false);

    useEffect(() => {
        updateFilters(catName, catId, minPrice || 100, maxPrice || 100000);   
    }, [catName, catId, minPrice, maxPrice, rating])

    const updateFilters = (catName, catId, minPrice, maxPrice) => {
        setFilters({ catName: catName, catId: catId, rating: rating, price: [minPrice, maxPrice] });
    }

    const handleFilters = () => {
        router.push(`/filter/${filters.catName}/${filters.catId}/?minPrice=${filters.price[0]}&maxPrice=${filters.price[1]}&location=${location}`);
        setActive(false);
    }

    const [checked, setChecked] = useState(true);

    const handleCheck = (e, item) => {       
        if (item.children.length) {
            setFilters(pre => ({ ...pre, catName: 'catId', catId: item.id }));       
        } else {
            setFilters(pre => ({ ...pre, catName: 'subCatId', catId: item.id }));       
        }
    };

    const handleRange = (event, newValue) => {
        setFilters(pre => ({ ...pre, price: newValue }));
    };       

    return (
        <div className="container mx-auto px-4 flex flex-col md:flex-row gap-4">
            <div className={`p-5 md:p-0 hide-on-mobile ${active ? 'show' : ''}`}>
                <IconButton className="bg-gray-200 hover:bg-gray-300 text-[2rem] absolute top-4 right-4 md:hidden" onClick={() => setActive(!active)}>
                    <BiX />
                </IconButton>
                <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-3">Product Categories</h2>
                    <div>
                        <ul>
                            {allCategories.map(i => (
                                <li key={i.id}>
                                    <FormControlLabel control={<Checkbox className='py-[0.35rem]' checked={filters.catId === i.id ? true : false} onChange={(e) => handleCheck(e, i)} inputProps={{ 'aria-label': 'controlled' }} /> } label={i.name} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='mb-6'>
                    <h2 className="text-xl font-semibold mb-3">Filter By Price</h2>
                    <div className='px-3'>
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
                    <img className='w-full md:max-w-[22rem]' src='/images/homeSideBanners/banner-3.gif' alt='sidebar' />
                </div>
            </div>

            <div className="w-full">
                <ul className='w-full flex flex-wrap gap-4 items-center bg-gray-200 text-gray-600 py-3 px-4 md:px-[1.6rem] mb-4 gap-y-0'>
                    <li className='text-[1.25rem] cursor-pointer'><FaListUl /></li>
                    <li className='text-[1.25rem] cursor-pointer text-blue-600'><BsFillGridFill /></li>
                    <li className='text-[1.25rem] cursor-pointer'><BsGrid3X3GapFill /></li>
                    <li className='m-0 md:ms-auto'><SortByDropdown /></li>
                    <li><ShowDropdown /></li>
                    <li className='text-[1.25rem] p-[0.7rem] border border-gray-400 rounded cursor-pointer bg-white md:hidden' onClick={() => setActive(!active)}><RiFilter2Fill /></li>
                </ul>
                {children}
            </div>
        </div>
    )
}


export const SortByDropdown = () => {

    const [age, setAge] = useState('');

    const handleChange2 = (event) => {
        setAge(event.target.value);
    };

    return (
        <FormControl sx={{ minWidth: '7.5rem' }} size="small" className='bg-white'>
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
    )
}

export const ShowDropdown = () => {

    const [age, setAge] = useState('');

    const handleChange2 = (event) => {
        setAge(event.target.value);
    };

    return (
        <FormControl sx={{ minWidth: '7.5rem' }} size="small" className='bg-white'>
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
    )
}