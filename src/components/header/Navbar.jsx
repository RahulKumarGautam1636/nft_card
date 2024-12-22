import { Button, IconButton, List, ListItemButton, ListItemText } from "@mui/material";
import Link from "next/link";
import { getCategories } from "@/api/api";
import { NavLoader, ShopSidebar } from "./components";
import { FaChevronDown } from "react-icons/fa";
import { Suspense } from "react";


export async function Navbar() {

    const categories = await getCategories('layout'); 
    let active = true;

    return (
        <div className="flex justify-between items-center gap-5 px-3 ">
            <ShopSidebar categories={categories} />
            <Suspense fallback={<NavLoader />}>
                <NavMenu categories={categories} />
            </Suspense>
        </div>
    )
}


export async function NavMenu() {

    const categories = await getCategories('layout'); 

    return (
        <ul className="flex gap-0 md:gap-[1.15rem] items-center md:flex-wrap whitespace-nowrap bg-white overflow-auto md:overflow-visible border-b-4 border-gray-200 md:border-0">
            {categories.categoryList.map(i => (
                <li key={i.id} className="relative group">
                    <Link prefetch={false} href={`/filter/catId/${i.id}`}>
                        <Button className="bg-white hover:bg-slate-100 text-[1.05rem] font-medium text-gray-700 rounded-full py-2 px-4">
                            <img className="rounded max-w-[1.8rem] mr-3" src={'/images/categories/' + i.images[0]} alt="Product" /> {i.name}
                        </Button>
                    </Link>
                    {i.children.length ? <List className="min-w-40 absolute bg-white shadow-xl border border-gray-200 rounded-lg z-10 top-full left-0 hidden group-hover:block">
                        {i.children.map(x => (
                            <Link prefetch={false} href={`/filter/subCatId/${x.id}`} key={x.id}>
                                <ListItemButton className="hover:bg-purple-100">
                                    <ListItemText primary={x.name} />
                                </ListItemButton>
                            </Link>
                        ))}
                    </List> : ''}
                </li>
            ))}
        </ul>
    )
}


export async function SideBarCategories() {

    const categories = await getCategories('layout');

    return categories.categoryList.map(i => (
        <li className="relative group/subGroup" key={i.id}>
            <Link prefetch={false} href={`/filter/catId/${i.id}`}>
                <Button className="justify-between w-full rounded-none bg-slate-50 hover:bg-slate-200 text-gray-900 py-3 md:py-2 px-4">{i.name} {i.children.length ? <FaChevronDown /> : ''}</Button>
            </Link>
            {i.children.length ? <ul className="hidden group-hover/subGroup:flex flex-col shadow-md border border-gray-200 absolute z-10 top-full left-0 md:top-0 md:left-full min-w-full py-2 bg-white">
                {i.children.map(x => (
                    <Link prefetch={false} href={`/filter/subCatId/${x.id}`} key={x.id}>
                        <Button className="justify-start w-full rounded-none bg-slate-50 hover:bg-slate-200 text-gray-900 py-2 px-4">{x.name}</Button>
                    </Link>
                ))}
            </ul> : ''}
        </li>
    ))
}


