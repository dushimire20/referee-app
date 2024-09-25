import React, { useState } from "react";
import { FaXmark } from "react-icons/fa6";

const InitiatePaymentModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const [formData, setFormData] = useState({
        payTo: "",
        amount: "",
        reason: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
        onClose();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-20 bg-black bg-opacity-50 backdrop-blur-sm">
            <div className="relative bg-white text-xs p-8 rounded-3xl shadow-lg z-60 w-full max-w-lg max-h-[95vh] overflow-y-auto z-30">
                <button onClick={onClose}
                        className="h-8 w-8 absolute right-4 top-4 flex justify-center items-center bg-secondary-100 bg-opacity-50 text-white rounded-full">
                    <FaXmark/>
                </button>
                <div className="flex justify-center items-center mb-4">
                    <h2 className="text-xl font-bold">New Transaction</h2>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-bold">Pay To</label>
                        <input type="text" name="payTo" value={formData.payTo} onChange={handleChange}
                               placeholder="0213 - 1413 - 2242 - 5735 - 4634 - 3655"
                               className="w-full text-center mt-1 px-2 py-1 border rounded-2xl bg-gray-50 focus:outline-none"/>
                        <p className="text-xs text-center text-gray-500 mt-1">Please enter the Wallet ID or Destination email</p>
                    </div>
                    <div className="flex space-x-4">
                        <div className="w-1/2">
                            <label className="block text-sm font-bold">Amount</label>
                            <input type="number" name="amount" value={formData.amount} onChange={handleChange}
                                   className="w-full mt-1 px-2 py-1 border rounded-2xl bg-gray-50 focus:outline-none"/>
                            <p className="text-xs text-gray-500 mt-1 space-x-8">
                                <span>Bonus</span>
                                <span>$5</span>
                            </p>
                        </div>
                        <div className="w-1/2">
                            <label className="block text-sm font-bold">Reason</label>
                            <input type="text" name="reason" value={formData.reason} onChange={handleChange}
                                   className="w-full mt-1 px-2 py-1 border rounded-2xl bg-gray-50 focus:outline-none"/>
                            <p className="text-xs text-gray-500 mt-1 space-x-8">
                                <span>Total</span>
                                <span>$405</span>
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button type="submit"
                                className="w-full bg-secondary-100 text-white px-6 py-2 text-sm rounded-xl hover:bg-opacity-70">
                            Initiate Payment
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default InitiatePaymentModal;