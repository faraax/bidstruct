import React, { cache, useState } from 'react'
import { TiTick } from 'react-icons/ti';
import { BsArrowRightCircle } from '../../Utils/icons'
import axios from 'axios';
import CheckoutPrice from './CheckoutPrice';
import Image from 'next/image';
import payment from '../../../public/payment.jpg'

export default async function CheckoutPayment() {
    const [isPending, setIsPending] = useState(false)
    const [link, setLink] = useState(null)

    const handleCheckout = async (price) => {
        const formData = new FormData();
        formData.append("price", price)
        setIsPending(true)
        try {
            let reqOptions = {
                url: `/api/checkout-update`,
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                data: formData,
            }

            let { data } = await axios.request(reqOptions);
            setLink(data.url)
            // console.log(data);
        }
        catch (err) {
            console.log("Login Err =>", err);
        } finally {
            setIsPending(false)
        }
    }

    return (
        <div>
            <div className='bg-white rounded-xl gap-5 px-10 py-3 flex flex-col justify-center shadow-lg h-full'>
                <div>
                    <h2 className="text-2xl">Select you package</h2>
                </div>
                <div className="grid 3xl:grid-cols-3 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 grid-cols-1 xs:px-0 3xl:px-4 md:px-6 gap-5">
                    {
                        !isPending && !link && <CheckoutPrice
                            handleCheckout={handleCheckout} />
                    }
                    {
                        isPending &&
                        <div className='flex gap-5 items-center'>
                            <svg className="h-10 w-10 animate-spin" viewBox="3 3 18 18">
                                <path
                                    className="fill-mute"
                                    d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"></path>
                                <path
                                    className="fill-primary"
                                    d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"></path>
                            </svg>
                            <span className='text-2xl text-gray-900'>Proceeding...</span>
                        </div>
                    }
                    {link && <div className="flex justify-center items-center flex-col gap-2">
                        <div className="w-60 h-60 rounded-full overflow-hidden border-mute border-2">
                            <Image
                                src={payment}
                                alt='Profile'
                                width={'auto'}
                            />
                        </div>
                        <a href={link}
                            className="relative text-white group w-full bg-primary flex justify-center items-center hover:bg-opacity-80 duration-150 hover:outline-none hover:ring-1 hover:ring-primary border-[#BCE0FD] px-5 py-2 border rounded-xl">
                            Process to checkout
                        </a>
                    </div>}
                </div>
            </div>
        </div >
    )
}
