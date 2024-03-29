"use client"
import { useState } from 'react'
import dynamic from 'next/dynamic'

const Navbar = dynamic(() => import('../components/Navbar'))
const AddProfile = dynamic(() => import('../components/SettingsPage/AddProfile'))
const ViewProfile = dynamic(() => import('../components/SettingsPage/ViewProfile'))
const ChangePassword = dynamic(() => import('../components/SettingsPage/ChangePassword'))
const AssignProjects = dynamic(() => import('../components/SettingsPage/AssignProjects'))
const CheckoutPayment = dynamic(() => import('../components/SettingsPage/CheckoutPayment'))

export default function SettingsPage() {
    const [selectedSetting, setSelectedSetting] = useState('Assign Counties to Profile')

    return (
        <div className="col-span-10">
            <Navbar />
            <div className='pt-5 px-10 py-5 text-lg font-medium'>
                <h2>Users Profiles Settings</h2>
            </div>
            <div className='grid grid-cols-8 px-10 py-5 gap-2 '>
                <div className='col-span-2 p-8 flex flex-col gap-3 bg-white rounded-xl shadow-lg'>
                    <div>
                        <p className='text-mute text-sm '>
                            Settings / <span className='text-secondary'>
                                {selectedSetting}
                            </span>
                        </p>
                    </div>
                    <div className='flex gap-4'>
                        <ul className='flex flex-col '>
                            <li
                                onClick={() => setSelectedSetting('View Profiles')}
                                className={`text-lg text-mute flex gap-4 ${selectedSetting === 'View Profiles' ? "text-secondary" : ''} hover:text-secondary duration-200 cursor-pointer`}>
                                View profiles
                            </li>
                            <li
                                onClick={() => setSelectedSetting('Add Profile')}
                                className={`text-lg text-mute flex gap-4 ${selectedSetting === 'Add Profile' ? "text-secondary" : ''} hover:text-secondary duration-200 cursor-pointer`}>
                                Add profile
                            </li>
                            <li
                                onClick={() => setSelectedSetting('Assign Counties to Profile')}
                                className={`text-lg text-mute flex gap-4 ${selectedSetting === 'Assign Counties to Profile' ? "text-secondary" : ''} hover:text-secondary duration-200 cursor-pointer`}>
                                Assign counties
                            </li>
                            <li
                                onClick={() => setSelectedSetting('Change Password')}
                                className={`text-lg text-mute flex gap-4 ${selectedSetting === 'Change Password' ? "text-secondary" : ''} hover:text-secondary duration-200 cursor-pointer`}>
                                Change password
                            </li>
                            <li
                                onClick={() => setSelectedSetting('Checkout for payment')}
                                className={`text-lg text-mute flex gap-4 ${selectedSetting === 'Checkout for payment' ? "text-secondary" : ''} hover:text-secondary duration-200 cursor-pointer`}>
                                Checkout for payment
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='col-span-6'>
                    {selectedSetting === 'View Profiles' && <ViewProfile />}
                    {selectedSetting === 'Add Profile' && <AddProfile />}
                    {selectedSetting === 'Assign Counties to Profile' && <AssignProjects />}
                    {selectedSetting === 'Change Password' && <ChangePassword />}
                    {selectedSetting === 'Checkout for payment' && <CheckoutPayment page="payments" />}
                </div>
            </div>
        </div >
    )
}