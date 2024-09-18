import { FaUser } from 'react-icons/fa';
import { BsCardImage } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";

const Profile = () => {
    return (
        <div className="p-4 md:px-8 bg-secondary min-h-screen flex flex-col">
            {/* Header */}
            <div className="flex justify-between border-b py-3 items-center mb-6">
                <button className="text-xl">{'<'}</button>
                <div className="flex items-center space-x-2">
                    <FaUser className="w-10 h-10 rounded-full bg-secondary-100 bg-opacity-5 p-2" />
                    <span className="font-semibold">Eric ISHIMWE</span>
                </div>
            </div>

            {/* Main container */}
            <div className="flex flex-col md:flex-row w-full md:space-x-8">
                <div className="w-full md:w-3/5">
                    {/* Profile Picture & Role */}
                    <div className="flex flex-col md:flex-row space-x-0 md:space-x-8 p-2 rounded-lg">
                        <div className="flex flex-col mb-6 space-y-2">
                            <h3 className="text-lg uppercase text-gray-600">Profile picture</h3>
                            <FaUser className="w-44 h-44 rounded-xl bg-secondary-100 bg-opacity-5 p-2 mb-4" />
                            <button className="self-start flex items-center space-x-2 text-blue-600 hover:underline text-sm">
                                <BsCardImage />
                                <span>Change profile picture</span>
                            </button>
                        </div>

                        {/* Role Section */}
                        <div className="space-y-5 w-full md:w-56">
                            <div className="space-y-3">
                                <label className="text-sm text-gray-600">Role</label>
                                <div className="relative">
                                    <select disabled className="peer p-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none">
                                        <option>Referee</option>
                                        <option>Coach</option>
                                        <option>Player</option>
                                    </select>
                                    <label className="absolute top-1 start-0 px-4 text-xs h-full truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-gray-500">Role</label>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <label className="text-sm text-gray-600 mb-4">Onboarding</label>
                                <div className="relative">
                                    <select disabled className="peer p-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none">
                                        <option>1/1/23</option>
                                    </select>
                                    <label className="absolute top-1 start-0 px-4 text-xs h-full truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-gray-500">Joined</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Employee Details & Shipping Address */}
                    <div className="flex flex-col md:flex-row items-end space-x-0 md:space-x-8 p-2 space-y-6 md:space-y-0">
                        {/* Employee Details */}
                        <div className="w-full">
                            <h3 className="text-lg uppercase text-gray-600 mb-4">Employee Details</h3>
                            <div className="space-y-4">
                                <div className="relative">
                                    <input type="text" id="first-name" className="bg-gray-50 peer p-4 block w-full border rounded-lg text-sm placeholder:text-transparent focus:outline-none focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="First name" value="Eric" />
                                    <label htmlFor="first-name" className="absolute top-1 start-0 px-4 text-xs text-gray-500 h-full truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0] peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:scale-90 peer-focus:translate-x-0.5 peer-focus:-translate-y-1.5 peer-focus:text-gray-500">First Name</label>
                                </div>
                                <div className="relative">
                                    <input type="text" id="last-name" className="bg-gray-50 peer p-4 block w-full border rounded-lg text-sm placeholder:text-transparent focus:outline-none focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Last name" value="ISHIMWE" />
                                    <label htmlFor="last-name" className="absolute top-1 start-0 px-4 text-xs text-gray-500 h-full truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0] peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:scale-90 peer-focus:translate-x-0.5 peer-focus:-translate-y-1.5 peer-focus:text-gray-500">Last Name</label>
                                </div>
                                <div className="relative">
                                    <input type="email" id="email" className="bg-gray-50 peer p-4 block w-full border rounded-lg text-sm placeholder:text-transparent focus:outline-none focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Email address" value="Eric@gmail.com" />
                                    <label htmlFor="email" className="absolute top-1 start-0 px-4 text-xs text-gray-500 h-full truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0] peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:scale-90 peer-focus:translate-x-0.5 peer-focus:-translate-y-1.5 peer-focus:text-gray-500">Email address</label>
                                </div>
                                <div className="relative">
                                    <input type="tel" id="phone" className="bg-gray-50 peer p-4 block w-full border rounded-lg text-sm placeholder:text-transparent focus:outline-none focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Phone number" value="+250475747474" />
                                    <label htmlFor="phone" className="absolute top-1 start-0 px-4 text-xs text-gray-500 h-full truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0] peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:scale-90 peer-focus:translate-x-0.5 peer-focus:-translate-y-1.5 peer-focus:text-gray-500">Phone number</label>
                                </div>
                                <div className="relative">
                                    <select disabled className="peer p-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none">
                                        <option>Referee</option>
                                        <option>Coach</option>
                                        <option>Player</option>
                                    </select>
                                    <label className="absolute top-1 start-0 px-4 text-xs h-full truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-gray-500">Type</label>
                                </div>
                            </div>
                        </div>

                        {/* Shipping Address */}
                        <div className="bg-gray-50 w-full border p-6 rounded-lg shadow-md">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-lg uppercase text-gray-600">Shipping Address</h3>
                                <button className="text-gray-600 hover:text-black">
                                    <FiEdit />
                                </button>
                            </div>
                            <div className="text-xs space-y-6">
                                <div className="flex justify-between">
                                    <span>Country</span>
                                    <span className="font-semibold">Rwanda</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Address</span>
                                    <span className="font-semibold">KG 223 St</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>City</span>
                                    <span className="font-semibold">Kigali</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Zip Code</span>
                                    <span className="font-semibold">0000</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Payment Method */}
                <div className="bg-gray-50 w-full md:w-2/5 border p-6 rounded-lg shadow-md mt-6 md:mt-0">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-lg uppercase text-gray-600">Payment Method</h3>
                        <button className="text-gray-600 hover:text-black">
                            <FiEdit />
                        </button>
                    </div>
                    <div className="text-xs space-y-6">
                        <div className="flex justify-between">
                            <span>Method</span>
                            <span className="font-semibold">Bank Account</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Account Owner</span>
                            <span className="font-semibold">Eric ISHIMWE</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Expire</span>
                            <span className="font-semibold">12/2025</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Card Number</span>
                            <span className="font-semibold">4000 1234 5678 9012</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Balance</span>
                            <span className="font-semibold">34,343,434</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Save and Cancel buttons */}
            <div className="flex justify-end space-x-4 mt-6 text-sm">
                <button className="px-16 py-2 bg-gray-50 border rounded-lg text-secondary-100 hover:bg-gray-300">
                    Cancel
                </button>
                <button className="px-16 py-2 bg-secondary-100 text-white rounded-lg hover:bg-primary-dark">
                    Save changes
                </button>
            </div>
        </div>
    )
}

export default Profile;