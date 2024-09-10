import { TbTruckDelivery } from "react-icons/tb";
import { RiDiscountPercentLine, RiMoneyRupeeCircleLine } from "react-icons/ri";
import { SiCodefresh } from "react-icons/si";
import Link from "next/link";
import { BiPhoneCall } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {

    const footerLinks = [
        { 
            title: 'FRUIT & VEGETABLES', 
            links: [
                { name: 'Fresh Vegetables', href: '/' },
                { name: 'Herbs & Seasonings', href: '/' },
                { name: 'Fresh Fruits', href: '/' },
                { name: 'Cuts & Sprouts', href: '/' },
                { name: 'Exotic Fruits & Veggies', href: '/' },
                { name: 'Packaged Produce', href: '/' },
                { name: 'Party Trays', href: '/' },
            ]
        },
        { 
            title: 'Breakfast & Dairy', 
            links: [
                { name: 'Milk & Flavoured Milk', href: '/' },
                { name: 'Butter and Margarine', href: '/' },
                { name: 'Cheese', href: '/' },
                { name: 'Eggs Substitutes', href: '/' },
                { name: 'Honey', href: '/' },
                { name: 'Marmalades', href: '/' },
                { name: 'Sour Cream and Dips', href: '/' },
                { name: 'Yogurt', href: '/' },
            ]
        },
        { 
            title: 'Meat & Seafood', 
            links: [
                { name: 'Breakfast Sausage', href: '/' },
                { name: 'Dinner Sausage', href: '/' },
                { name: 'Beef', href: '/' },
                { name: 'Chicken', href: '/' },
                { name: 'Sliced Deli Meat', href: '/' },
                { name: 'Shrimp', href: '/' },
                { name: 'Wild Caught Fillets', href: '/' },
                { name: 'Crab and Shellfish', href: '/' },
                { name: 'Farm Raised Fillets', href: '/' },
            ]
        },
        { 
            title: 'Beverages', 
            links: [
                { name: 'Water', href: '/' },
                { name: 'Sparkling Water', href: '/' },
                { name: 'Soda & Pop', href: '/' },
                { name: 'Coffee', href: '/' },
                { name: 'Milk & Plant-Based Milk', href: '/' },
                { name: 'Tea & Kombucha', href: '/' },
                { name: 'Drink Boxes & Pouches', href: '/' },
                { name: 'Craft Beer', href: '/' },
                { name: 'Wine', href: '/' },
            ]
        },
        { 
            title: 'Breads & Bakery', 
            links: [
                { name: 'Milk & Flavoured Milk', href: '/' },
                { name: 'Butter and Margarine', href: '/' },
                { name: 'Cheese', href: '/' },
                { name: 'Eggs Substitutes', href: '/' },
                { name: 'Honey', href: '/' },
                { name: 'Marmalades', href: '/' },
                { name: 'Sour Cream and Dips', href: '/' },
                { name: 'Yogurt', href: '/' },
            ]
        }
    ]

    
    return (
        <footer className="footer">
            <section className="mt-4 grid place-items-center border-y border-gray-300">
                <ul className="container mx-auto flex flex-col md:flex-row ps-10 md:ps-4">
                    <li className="flex-1 flex items-center justify-start md:justify-center gap-4 md:gap-2 py-5 md:py-10"><SiCodefresh className="text-4xl text-purple-800" /> Everyday fresh products</li>
                    <li className="flex-1 flex items-center justify-start md:justify-center gap-4 md:gap-2 py-6 md:py-10 md:border-x md:border-gray-300"><TbTruckDelivery className="text-4xl text-purple-800" /> Free delivery for order over $70</li>
                    <li className="flex-1 flex items-center justify-start md:justify-center gap-4 md:gap-2 py-6 md:py-10 md:border-x md:border-gray-300"><RiDiscountPercentLine className="text-4xl text-purple-800" /> Daily Mega Discounts</li>
                    <li className="flex-1 flex items-center justify-start md:justify-center gap-4 md:gap-2 py-6 md:py-10"><RiMoneyRupeeCircleLine className="text-4xl text-purple-800" /> Best price on the market</li>
                </ul>
            </section>
            <section class="container mx-auto grid grid-cols-2 md:grid-cols-5 gap-5 border-b border-gray-300 pt-11 pb-8" style={{fontSize: '0.94rem'}}>
                {footerLinks.map(item => (
                    <div className="pb-4 ps-8 md:ps-12" key={item.title}>
                        <h5 className="text-lg font-semibold mb-5">{item.title}</h5>
                        <ul className="flex flex-col gap-[0.6rem]">
                            {item.links.map(i => (<li key={i.name}><Link href={i.href}>{i.name}</Link></li>))}
                        </ul>
                    </div>
                ))}
            </section>
            <section className="container mx-auto px-4 py-9 md:py-11 flex gap-y-5 justify-between items-center border-b border-gray-300 flex-wrap">
                <div className="flex gap-3">
                    <BiPhoneCall className="text-[3.2rem] border border-gray-300 text-gray-500 p-2 rounded-full"/>
                    <div>
                        <h3 className="text-[1.4rem] font-semibold text-gray-900">8 800 555-55</h3>
                        <p className="text-[0.9rem]">Working 8:00 - 22:00</p>
                    </div>
                </div>
                <div className="flex gap-8 gap-y-6 items-center flex-wrap">
                    <div>
                        <h3 className="mb-1 md:mb-0 text-[1.1rem] font-semibold text-gray-900">Download App on Mobile :</h3>
                        <p className="text-sm">15% discount on your first purchase</p>
                    </div>
                    <div className="flex gap-2">
                        <img src="/images/google-play.webp" alt="Google" />
                        <img src="/images/app-store.webp" alt="Google" />
                    </div>
                    <div className="flex gap-3">
                        <FaFacebook className="text-3xl text-blue-500" />
                        <FaXTwitter className="text-3xl text-black" />
                        <FaInstagramSquare className="text-3xl text-red-600" />
                    </div>
                </div>
            </section>
            <section className="container mx-auto py-5 flex gap-3 justify-center lg:justify-between text-center items-center text-sm flex-wrap">
                <p>Copyright 2024 © Bacola WordPress Theme. All rights reserved. Powered by KlbTheme.</p>
                <ul className="flex gap-4 items-center flex-wrap justify-center">
                    <li><Link href='/'>Privacy Policy</Link></li>
                    <li><Link href='/'>Terms and Conditions</Link></li>
                    <li><Link href='/'>Cookie</Link></li>
                    <li><img src="/images/payments.webp" alt="payments" /></li>
                </ul>
            </section>
        </footer>
    )
}

export default Footer;