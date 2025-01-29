"use client";
import { modalAction, toggleLocation } from "@/lib/slices";
import { List, ListItemButton, ListItemText } from "@mui/material";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";

export default function Location() {

    const locations = useSelector(state => state.siteData.locations);

    const [location, setLocation] = useState(locations.all);
    const [searchKey, setSearchKey] = useState('');
    const dispatch = useDispatch();

    const handleSearch = (e) => {
        let value = e.target.value;
        setSearchKey(value);
        const filtered = locations.all.filter(i => ((i.name).toLowerCase()).includes(value.toLowerCase()));
        setLocation(filtered);
    }

    const handleLocation = (item) => {
        dispatch(toggleLocation({ current: item }));
        dispatch(modalAction({name: 'LOCATION_MODAL', status: false}));
    }

    return (
        // <div className='p-4'>
            <div className="bg-white max-w-[35rem] rounded-lg px-[1.5rem] py-[1.8rem]">
                <div>
                    <h2 className="text-2xl font-semibold pt-2">Please choose your Location.</h2>
                    <p className="text-gray-500 ">Enter your address and we will specify the offer for your area.</p>
                </div>
                <div className="relative flex-1 h-full my-4">
                    <input value={searchKey} onChange={handleSearch} className="h-full px-3 py-4 border-2 border-slate-200 bg-slate-100 outline-none text-sm rounded w-full" />
                    <IoSearch className="absolute top-1/2 right-0 transform -translate-x-1/2 -translate-y-1/2 text-2xl text-gray-600"/>
                </div>
                <div className='h-[60vh] overflow-auto border border-gray-200 rounded-lg'>
                    <List className="w-full bg-white">
                        {location.map(i => (
                            <ListItemButton onClick={() => handleLocation(i)} key={i.id} className={`${locations.current.id === i.id ? 'bg-purple-600 text-white hover:bg-purple-400': 'hover:bg-purple-100'}`}>
                                <ListItemText primary={i.name} />
                            </ListItemButton>
                        ))}
                    </List>
                </div>
            </div>
        // </div>
    )
}