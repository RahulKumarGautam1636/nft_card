"use client";
import { List, ListItemButton, ListItemText } from "@mui/material";
import { IoSearch } from "react-icons/io5";
import { useSelector } from "react-redux";

export default function Location() {

    const locations = useSelector(state => state.siteData.locations);

    return (
        <div className='max-w-[35rem] bg-white rounded-lg px-[1.5rem] py-[1.8rem]'>
            <div>
            <h2 className="text-2xl font-semibold">Please choose your Location.</h2>
            <p className="text-gray-500 ">Enter your address and we will specify the offer for your area.</p>
            </div>
            <div className="relative flex-1 h-full my-4">
            <input className="h-full px-3 py-4 border-2 border-slate-200 bg-slate-100 outline-none text-sm rounded w-full" />
            <IoSearch className="absolute top-1/2 right-0 transform -translate-x-1/2 -translate-y-1/2 text-2xl text-gray-600"/>
            </div>
            <div className='max-h-[60vh] overflow-auto border border-gray-200 rounded-lg'>
            <List className="w-full bg-white">
                {locations.all.map(i => (
                    <ListItemButton key={i.id} className="hover:bg-purple-100">
                        <ListItemText primary={i.name} />
                    </ListItemButton>
                ))}
            </List>
            </div>
        </div>
    )
}