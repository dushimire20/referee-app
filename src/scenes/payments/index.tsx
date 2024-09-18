import React, { useState } from 'react';

const Payments = () => {
    const initialPaymentsHistory = [
        {
            date: '1/1/2024',
            game: 'Team A VS Team B',
            location: 'BK Arena, Kigali',
            result: 'Team XXX - XXX Team B',
            amount: '232$',
            highlight: false
        },
        {
            date: '3/1/2024',
            game: 'Team A VS Team B',
            location: 'Lycee de Kigali',
            result: 'Team XXX - XXX Team B',
            amount: '235$',
            highlight: true
        },
        {
            date: '5/1/2024',
            game: 'Team A VS Team B',
            location: 'BK Arena, Kigali',
            result: 'Team XXX - XXX Team B',
            amount: '232$',
            highlight: false
        },
        {
            date: '7/1/2024',
            game: 'Team A VS Team B',
            location: 'BK Arena, Kigali',
            result: 'Team XXX - XXX Team B',
            amount: '232$',
            highlight: false
        },
    ];

    const initialPendingPayments = [
        {
            date: '1/1/2024',
            game: 'Team A VS Team B',
            expected: '234$',
            status: 'Pending',
            dueDate: '1/1/2024',
            highlight: false
        },
        {
            date: '3/1/2024',
            game: 'Team A VS Team B',
            expected: '323$',
            status: 'Processing',
            dueDate: '3/1/2024',
            highlight: true
        },
    ];

    const [paymentsHistory, setPaymentsHistory] = useState(initialPaymentsHistory);
    const [pendingPayments, setPendingPayments] = useState(initialPendingPayments);

    const handleSelectAllPayments = (e: React.ChangeEvent<HTMLInputElement>) => {
        const checked = e.target.checked;
        setPaymentsHistory(paymentsHistory.map(row => ({ ...row, highlight: checked })));
    };

    const handleSelectRowPayments = (index: number) => {
        setPaymentsHistory(paymentsHistory.map((row, i) => i === index ? { ...row, highlight: !row.highlight } : row));
    };

    const handleSelectAllPending = (e: React.ChangeEvent<HTMLInputElement>) => {
        const checked = e.target.checked;
        setPendingPayments(pendingPayments.map(row => ({ ...row, highlight: checked })));
    };

    const handleSelectRowPending = (index: number) => {
        setPendingPayments(pendingPayments.map((row, i) => i === index ? { ...row, highlight: !row.highlight } : row));
    };

    return (
        <div className="p-8 max-h-screen flex">
            <div className="flex flex-col md:flex-row w-full space-y-6 md:space-x-6 md:space-y-0 md:divide-x">
                <div className="w-full md:w-3/4 space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        <div className="p-8 rounded-xl bg-blue-100">
                            <p className="text-sm text-gray-500">Total Earnings</p>
                            <div className="flex justify-between">
                                <p>444$</p>
                                <p>+11.01% <span className="text-green-500">&#x2191;</span> </p>
                            </div>
                        </div>
                        <div className="p-8 rounded-xl bg-[#E5ECF6]">
                            <p className="text-sm text-gray-500">Pending Payments</p>
                            <div className="flex justify-between">
                                <p>222$</p>
                                <p>+6.08% <span className="text-red-500">&#x2193;</span></p>
                            </div>
                        </div>
                    </div>

                    <h3 className="text-lg font-semibold">Payment History</h3>
                    <div className="flex flex-col">
                        <div className="-m-1.5 overflow-x-auto">
                            <div className="p-1.5 w-full overflow-x-auto inline-block align-middle">
                                <table className="w-full bg-white shadow-md rounded-xl overflow-hidden text-xs">
                                    <thead className="text-gray-700 bg-[#E5ECF6] overflow-x-auto">
                                        <tr>
                                            <th className="py-3 px-4 text-left">
                                                <input type="checkbox" onChange={handleSelectAllPayments} />
                                            </th>
                                            <th className="py-3 px-4 text-left">Date</th>
                                            <th className="py-3 px-4 text-left">Game</th>
                                            <th className="py-3 px-4 text-left">Location</th>
                                            <th className="py-3 px-4 text-left">Results</th>
                                            <th className="py-3 px-4 text-left">Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-blue-gray-900 overflow-x-auto">
                                        {paymentsHistory.map((row, index) => (
                                            <tr key={index} className={`border-b border-blue-gray-200 ${row.highlight ? 'bg-blue-100' : ''}`}>
                                                <td className="py-3 px-4">
                                                    <input type="checkbox" checked={row.highlight} onChange={() => handleSelectRowPayments(index)} />
                                                </td>
                                                <td className="py-3 px-4">{row.date}</td>
                                                <td className="py-3 px-4">{row.game}</td>
                                                <td className="py-3 px-4">{row.location}</td>
                                                <td className="py-3 px-4">{row.result}</td>
                                                <td className="py-3 px-4">{row.amount}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <h3 className="text-lg font-semibold">Pending Payments</h3>
                    <div className="flex flex-col">
                        <div className="-m-1.5 overflow-x-auto">
                            <div className="p-1.5 w-full inline-block align-middle overflow-x-auto">
                                <table className="w-full shadow-md rounded-xl overflow-hidden text-xs z-10">
                                    <thead className="text-gray-700 bg-[#E5ECF6] overflow-x-auto">
                                        <tr>
                                            <th className="py-3 px-4 text-left">
                                                <input type="checkbox" onChange={handleSelectAllPending} />
                                            </th>
                                            <th className="py-3 px-4 text-left">Date</th>
                                            <th className="py-3 px-4 text-left">Game</th>
                                            <th className="py-3 px-4 text-left">Expected Amount</th>
                                            <th className="py-3 px-4 text-left">Status</th>
                                            <th className="py-3 px-4 text-left">Due date</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-blue-gray-900 overflow-x-auto">
                                        {pendingPayments.map((row, index) => (
                                            <tr key={index} className={`border-b border-blue-gray-200 ${row.highlight ? 'bg-blue-100' : ''}`}>
                                                <td className="py-3 px-4">
                                                    <input type="checkbox" checked={row.highlight} onChange={() => handleSelectRowPending(index)} />
                                                </td>
                                                <td className="py-3 px-4">{row.date}</td>
                                                <td className="py-3 px-4">{row.game}</td>
                                                <td className="py-3 px-4">{row.expected}</td>
                                                <td className="py-3 px-4">{row.status}</td>
                                                <td className="py-3 px-4">{row.dueDate}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-1/4 space-y-6">
                    <div className="bg-white md:p-6">
                        <h3 className="text-lg font-semibold">Payment method</h3>
                        <div className="flex justify-between items-center">
                            <div className="mt-4 inline-flex">
                                <input type="radio" id="radio1" name="paymentMethod" className="mr-2"/>
                                <label htmlFor="radio1">MoMo</label>
                            </div>
                            <button className="mt-4 text-blue-600 border rounded-full border-blue-600 px-3 py-1 hover:underline">Change</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payments;