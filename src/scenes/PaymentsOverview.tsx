import React, {useState} from "react";
import {FaAngleDown, FaFileExport, FaPlus, FaSearch} from "react-icons/fa";
import {AiOutlineCheck, AiOutlineClose, AiOutlineClockCircle} from "react-icons/ai";

type Payment = {
    date: string;
    referee: string;
    amount: string;
    bankAccount: string;
    status: "Pending" | "Declined" | "Succeeded";
    selected?: boolean;
};

const payments: Payment[] = [
    {
        date: "Mar 23, 2022, 13:00 PM",
        referee: "Eric HABIMANA",
        amount: "$18,623.00 USD",
        bankAccount: "****4242",
        status: "Pending",
        selected: false
    },
    {
        date: "Mar 23, 2022, 13:00 PM",
        referee: "Eric HABIMANA",
        amount: "$6,623.00 USD",
        bankAccount: "****2332",
        status: "Declined",
        selected: false
    },
    {
        date: "Mar 23, 2022, 13:00 PM",
        referee: "Eric HABIMANA",
        amount: "$1,623.53 USD",
        bankAccount: "****2332",
        status: "Succeeded",
        selected: false
    },
    {
        date: "Mar 23, 2022, 13:00 PM",
        referee: "Eric HABIMANA",
        amount: "$56,623.00 USD",
        bankAccount: "****2332",
        status: "Succeeded",
        selected: false
    },
    {
        date: "Mar 23, 2022, 13:00 PM",
        referee: "Eric HABIMANA",
        amount: "$130.00 USD",
        bankAccount: "****2332",
        status: "Succeeded",
        selected: false
    },
    {
        date: "Mar 23, 2022, 13:00 PM",
        referee: "Eric HABIMANA",
        amount: "$1,623.00 USD",
        bankAccount: "****2332",
        status: "Succeeded",
        selected: false
    },
    {
        date: "Mar 23, 2022, 13:00 PM",
        referee: "Eric HABIMANA",
        amount: "$1,623.00 USD",
        bankAccount: "****2332",
        status: "Succeeded",
        selected: false
    },
    {
        date: "Mar 23, 2022, 13:00 PM",
        referee: "Eric HABIMANA",
        amount: "$1,623.00 USD",
        bankAccount: "****2332",
        status: "Succeeded",
        selected: false
    },
    {
        date: "Mar 23, 2022, 13:00 PM",
        referee: "Eric HABIMANA",
        amount: "$1,623.00 USD",
        bankAccount: "****2332",
        status: "Succeeded",
        selected: false
    },
    {
        date: "Mar 23, 2022, 13:00 PM",
        referee: "Fiston Munyaneza",
        amount: "$1,623.00 USD",
        bankAccount: "****2332",
        status: "Succeeded",
        selected: false
    },
    {
        date: "Mar 23, 2022, 13:00 PM",
        referee: "Eric HABIMANA",
        amount: "$1,623.00 USD",
        bankAccount: "****2332",
        status: "Succeeded",
        selected: false
    },
    {
        date: "May 23, 2022, 13:00 PM",
        referee: "Eric HABIMANA",
        amount: "$1,623.00 USD",
        bankAccount: "****2332",
        status: "Succeeded",
        selected: false
    },
    {
        date: "Mar 23, 2022, 13:00 PM",
        referee: "Eric HABIMANA",
        amount: "$1,623.00 USD",
        bankAccount: "****2332",
        status: "Succeeded",
        selected: false
    }
];

const PaymentsOverview: React.FC = () => {
    const [activeTab, setActiveTab] = useState<"All" | "Succeeded" | "Declined" | "Pending">("All");
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedPayments, setSelectedPayments] = useState<Payment[]>([]);
    const paymentsPerPage = 10;

    const filteredPayments = payments.filter(payment => {
        if (activeTab !== "All" && payment.status !== activeTab) return false;
        return !(searchTerm && !(
            payment.amount.toLowerCase().includes(searchTerm.toLowerCase()) ||
            payment.referee.toLowerCase().includes(searchTerm.toLowerCase()) ||
            payment.date.toLowerCase().includes(searchTerm.toLowerCase()) ||
            payment.bankAccount.toLowerCase().includes(searchTerm.toLowerCase())
        ));
    });

    const totalPages = Math.ceil(filteredPayments.length / paymentsPerPage);
    const startIndex = (currentPage - 1) * paymentsPerPage;
    const endIndex = startIndex + paymentsPerPage;
    const currentPayments = filteredPayments.slice(startIndex, endIndex);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = e.target.checked;
        const updatedPayments = currentPayments.map(payment => ({...payment, selected: isChecked}));
        setSelectedPayments(isChecked ? updatedPayments : []);
        payments.forEach(payment => {
            if (currentPayments.includes(payment)) {
                payment.selected = isChecked;
            }
        });
    };

    const handleSelectPayment = (index: number) => {
        const updatedPayments = [...currentPayments];
        updatedPayments[index].selected = !updatedPayments[index].selected;
        setSelectedPayments(updatedPayments.filter(payment => payment.selected));
    };

    return (
        <div className="w-full p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-semibold">Payments overview</h1>
                <div className="flex space-x-2">
                    <button className="bg-gray-50 border px-4 py-2 rounded-xl hover:bg-gray-300 flex items-center">
                        <FaFileExport className="mr-2"/>
                        Export
                    </button>
                    <button
                        className="bg-secondary-100 text-white px-4 py-2 rounded-xl hover:bg-opacity-70 flex items-center">
                        <FaPlus className="mr-2"/>
                        Initiate Payment
                    </button>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex border-b mb-4">
                {["All", "Succeeded", "Declined", "Pending"].map(tab => (
                    <button
                        key={tab}
                        className={`p-4 ${activeTab === tab ? "border-b-2 border-blue-500" : ""}`}
                        onClick={() => setActiveTab(tab as "All" | "Succeeded" | "Declined" | "Pending")}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Filters */}
            <div className="flex flex-col-reverse sm:flex-row text-sm justify-between items-start sm:items-center mb-4">
                <div className="flex space-x-2">
                    <select className="bg-gray-50 p-2 rounded-lg border focus:outline-none">
                        <option>Date range</option>
                        {/* More options */}
                    </select>
                    <select className="bg-gray-50 p-2 rounded-lg border focus:outline-none">
                        <option>Status</option>
                        {/* More options */}
                    </select>
                    <select className="bg-gray-50 p-2 rounded-lg border focus:outline-none">
                        <option>P. Method</option>
                        {/* More options */}
                    </select>
                </div>
                <div className="relative mb-2 sm:mb-0">
                    <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"/>
                    <input
                        type="text"
                        placeholder="Search by amount, payment method..."
                        className="bg-gray-50 px-2 py-2 pl-8 pr-4 rounded-lg w-full focus:outline-none"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            {/* Payments Table */}
            <table className="w-full text-sm table-auto bg-white shadow-md rounded-xl overflow-hidden">
                <thead>
                <tr className="bg-gray-50 text-left">
                    <th className="p-4">
                        <input type="checkbox" onChange={handleSelectAll}/>
                    </th>
                    <th className="p-4">Transaction Date</th>
                    <th className="p-4">Referee</th>
                    <th className="p-4">Amount</th>
                    <th className="p-4">Bank Account</th>
                    <th className="p-4">Status</th>
                    <th className="p-4"></th>
                </tr>
                </thead>
                <tbody>
                {currentPayments.map((payment, index) => (
                    <tr key={index} className={`border-b ${payment.selected ? 'bg-blue-100' : ''}`}>
                        <td className="p-4">
                            <input
                                type="checkbox"
                                checked={payment.selected || false}
                                onChange={() => handleSelectPayment(index)}
                            />
                        </td>
                        <td className="p-4">{payment.date}</td>
                        <td className="p-4">{payment.referee}</td>
                        <td className="p-4">{payment.amount}</td>
                        <td className="p-4">{payment.bankAccount}</td>
                        <td className="p-4">
                                <span
                                    className={`px-2 py-1 max-w-fit rounded-lg flex items-center ${
                                        payment.status === "Pending"
                                            ? "bg-yellow-500 text-yellow-600"
                                            : payment.status === "Declined"
                                                ? "bg-red-500 text-red-600"
                                                : "bg-green-500 text-green-600"
                                    } bg-opacity-30 space-x-2`}
                                >
                                    {payment.status === "Pending" && <AiOutlineClockCircle/>}
                                    {payment.status === "Declined" && <AiOutlineClose/>}
                                    {payment.status === "Succeeded" && <AiOutlineCheck/>}

                                    <span>{payment.status}</span>
                                </span>
                        </td>
                        <td>
                            <button className="text-gray-400 hover:text-gray-400">
                                <FaAngleDown/>
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            {/* Pagination */}
            <div className="flex justify-between text-xs bg-gray-50 p-4 items-center mt-4">
                <span>Total of {filteredPayments.length} results were found (showing 10 per page)</span>
                <div className="flex space-x-2">
                    <button
                        className={`border p-2 bg-white rounded-xl ${currentPage === 1 ? "text-gray-400" : ""}`}
                        onClick={handlePreviousPage}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                    <button
                        className={`border p-2 bg-white rounded-xl ${currentPage === totalPages ? "text-gray-400" : ""}`}
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PaymentsOverview;