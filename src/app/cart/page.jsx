import { LinearProgress } from "@mui/material";
import { TiDelete } from "react-icons/ti";
import { IconButton } from "@mui/material";
import { BiMinus, BiPlus } from "react-icons/bi";

export default function Cart() {
    return (
        <main className='mt-12'>
            <div className="container mx-auto px-4 flex flex-col md:flex-row gap-4">
                <div className="w-full">
                    <div className="rounded-lg p-6 border border-gray-300 bg-gray-50 mb-4">
                        <p className="mb-4">Add <span className="text-red-500">$20.86</span> to cart and get free shipping!</p>
                        <LinearProgress className="rounded h-2" variant="determinate" value={50} />
                    </div>
                    <div className="rounded-lg border border-gray-300 bg-gray-50">
                        <div className="table-responsive overflow-auto">
                            <table className="table-type-1 w-full min-w-[720px]">
                                <tbody>
                                    <tr>
                                        <th colSpan={2}>Product</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                        <th>Remove</th>
                                    </tr>
                                    {[1,2,3].map(i => (
                                        <tr className="text-gray-700 font-semibold">
                                            <td className="" style={{paddingRight: 0}}>
                                                <img className="rounded h-24 w-24" src="/images/categories/3.jpg" alt="Product" />
                                            </td>
                                            <td className="font-medium text-gray-900">
                                                Blue Diamond Almonds Lightly Salted
                                            </td>
                                            <td className="text-gray-500">
                                                $10.58
                                            </td>
                                            <td>
                                                <div className="flex gap-[1.3rem]">
                                                    <div className="text-gray-900 flex items-center gap-[1.3rem]">
                                                        <IconButton className="bg-gray-100 text-[2rem]">
                                                            <BiPlus />
                                                        </IconButton>
                                                        <span>1</span>
                                                        <IconButton className="bg-gray-100 text-[2rem]">
                                                            <BiMinus />
                                                        </IconButton>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                $21.16
                                            </td>
                                            <td>
                                                <TiDelete className="text-red-600 text-4xl bg-white" style={{fontSize: '1.95rem'}} />
                                            </td>
                                        </tr>
                                        ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="rounded-lg p-6 border border-gray-300 w-full max-w-[35rem]">
                    <h2 className="text-xl font-semibold mb-4">Cart Totals</h2>
                </div>
            </div>
        </main>
    )   
}
