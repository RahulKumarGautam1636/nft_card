import { TbTruckDelivery } from "react-icons/tb";
import { RiDiscountPercentLine, RiMoneyRupeeCircleLine } from "react-icons/ri";
import { SiCodefresh } from "react-icons/si";
import Link from "next/link";
import { BiPhoneCall } from "react-icons/bi";

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
                    <div className="pb-4 ps-4 md:ps-12">
                        <h5 className="text-lg font-semibold mb-5">{item.title}</h5>
                        <ul className="flex flex-col gap-[0.6rem]">
                            {item.links.map(i => (<li key={i.name}><Link href={i.href}>{i.name}</Link></li>))}
                        </ul>
                    </div>
                ))}
            </section>
            <section className="container mx-auto py-11">
                <div className="flex gap-3">
                    <BiPhoneCall className="text-[3.6rem] border border-gray-300 text-gray-500 p-2 rounded-full"/>
                    <div>
                        <h3 className="mb-1 text-2xl font-semibold text-gray-900">8 800 555-55</h3>
                        <p className="text-[0.9rem]">Working 8:00 - 22:00</p>
                    </div>
                </div>
            </section>
        </footer>
    )
}

export default Footer;