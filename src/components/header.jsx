import { Button, List, ListItemButton, ListItemText } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { FaChevronDown, FaChevronLeft } from "react-icons/fa";
import { IoSearch, IoBagHandleOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { getCategories } from "@/api/api";

const Header = async ({ categories }) => {

    // const categories = await getCategories();

    return (
        <>
            <p className="text-white bg-purple-700 w-full text-center text-xs py-2">Due to the COVID 19 epidemic, orders may be processed with a slight delay</p>
            <header className="container mx-auto">
                <nav className="text-nowrap py-3 md:py-6 px-4 flex items-center gap-4 justify-between md:mb-3">
                    <Link href={'/'}>
                        <Image src={'/images/logo.jpg'} width={150} height={50} alt="Logo" />
                    </Link>
                    <div className="header-search-box flex gap-4 w-full flex-1">
                        <div className="hidden md:block">
                            <Button className="gap-4 bg-slate-50 pt-[0.6rem] pb-1 ps-4 pe-5" style={{border: '1px solid #e0e0e0'}}>
                                <div className="text-left">
                                    <span className="name block text-gray-500 text-xs mb-1">Your Location</span>
                                    <span className="label text-slate-800 text-sm">All</span>
                                </div>
                                <FaChevronDown />
                            </Button>
                        </div>
                        <div className="hidden md:flex gap-3 items-center flex-1">
                            <FaChevronLeft className="close-search hidden" />
                            <div className="relative flex-1 h-full">
                                <input className="h-full px-3 py-3 border-2 border-slate-200 bg-slate-100 outline-none text-sm rounded w-full" />
                                <IoSearch className="absolute top-1/2 right-0 transform -translate-x-1/2 -translate-y-1/2 text-2xl text-gray-600"/>
                            </div>
                        </div>
                    </div>
                    <div className="header-cta flex gap-3">
                        <Button className="rounded-full bg-purple-50 min-w-0 p-3 hover:bg-purple-200 md:hidden" style={{border: '1px solid #cbcbcb'}}><IoSearch className="text-2xl text-purple-800"/></Button>
                        <Button className="rounded-full bg-purple-50 min-w-0 p-3 hover:bg-purple-200" style={{border: '1px solid #cbcbcb'}}><IoBagHandleOutline className="text-2xl text-purple-800"/></Button>
                        <Button className="bg-purple-600 text-white rounded-lg py-3 px-5 hover:bg-purple-400 hidden md:block">Sign in</Button>
                        <Button className="rounded-full bg-purple-50 min-w-0 p-3 hover:bg-purple-200 md:hidden" style={{border: '1px solid #cbcbcb'}}><GiHamburgerMenu className="text-2xl text-purple-800"/></Button>
                    </div>
                </nav>
                <div className="flex justify-between items-start gap-5 px-3">
                    <div className="relative group hidden md:flex text-nowrap">                        
                        <Button className="gap-2 bg-purple-800 hover:bg-purple-700 p-2 rounded-full text-white min-w-fit">
                            <GiHamburgerMenu />
                            <h4>ALL CATEGORIES</h4>
                            <FaChevronDown />
                        </Button>
                        <ul className="hidden group-hover:flex flex-col shadow-md border border-gray-200 absolute z-10 top-full left-0 w-full py-2 bg-white">
                            {categories.categoryList.map(i => (
                                <li className="relative group/subGroup" key={i.id}>
                                    <Button className="w-full rounded-none bg-slate-50 hover:bg-slate-200 text-gray-900 py-2"  href="#contained-buttons">{i.name}</Button>
                                    {i.children.length ? <ul className="hidden group-hover/subGroup:flex flex-col shadow-md border border-gray-200 absolute z-10 top-0 left-full min-w-full py-2 bg-white">
                                        {i.children.map(x => (
                                            <Button key={x.id} className="justify-start w-full rounded-none bg-slate-50 hover:bg-slate-200 text-gray-900 py-2 px-4"  href="#contained-buttons">{x.name}</Button>
                                        ))}
                                    </ul> : ''}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <ul className="flex gap-0 md:gap-3 items-center md:flex-wrap text-nowrap bg-white overflow-auto md:overflow-visible border-b-4 border-gray-200 md:border-0">
                        <li className="relative group">
                            <Button href="/" className="bg-white text-[1.05rem] font-medium text-gray-700 rounded-full py-2 md:px-4">Home</Button>
                        </li>
                        {categories.categoryList.map(i => (
                            <li key={i.id} className="relative group">
                                <Button href={`/filter/catId/${i.id}`} className="bg-white text-[1.05rem] font-medium text-gray-700 rounded-full py-2 md:px-4">{i.name}</Button>
                                {i.children.length ? <List className="min-w-40 absolute bg-white shadow-xl border border-gray-200 rounded-lg z-10 top-full left-0 hidden group-hover:block">
                                    {i.children.map(x => (
                                        <ListItemButton key={x.id} component="a" href={`/filter/subCatId/${x.id}`} className="hover:bg-purple-100">
                                            <ListItemText primary={x.name} />
                                        </ListItemButton>
                                    ))}
                                </List> : ''}
                            </li>
                        ))}
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Header;