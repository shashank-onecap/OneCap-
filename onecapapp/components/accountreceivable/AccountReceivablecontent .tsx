import React, { useState } from "react";
import {
  ArrowDown,
  ArrowUp,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";

const AccountsPayableTable = () => {
  // Previous code remains the same until the return statement
  // Generate 30 items of sample data
  const generateData = () => {
    const suppliers = ["Robert", "Stephen", "Murphy", "Antony"];
    const statuses = ["Active", "Pending"];

    return Array.from({ length: 30 }, (_, i) => ({
      invoiceNumber: "123459",
      invoiceDate: "07 Jul 2024",
      amount: 10000.0,
      invoiceDueDate: "07 Aug 2024",
      paymentTenure: "30 Days",
      supplierName: suppliers[i % suppliers.length],
      status: statuses[i % statuses.length],
      payments: "Fund with credit",
    }));
  };

  const [data] = useState(generateData());
  const [selectedRows, setSelectedRows] = useState(new Set());
  const [sortConfig, setSortConfig] = useState<{
    key: string | null;
    direction: "asc" | "desc";
  }>({ key: null, direction: "asc" });
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(14);

  // Pagination calculations
  const totalPages = Math.ceil(data.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setSelectedRows(new Set()); // Clear selections on page change
  };

  // Handle rows per page change
  const handleRowsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newRowsPerPage = parseInt(e.target.value);
    setRowsPerPage(newRowsPerPage);
    setCurrentPage(1); // Reset to first page
    setSelectedRows(new Set()); // Clear selections
  };

  // Handle select all checkbox
  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedRows(
        new Set(currentData.map((_, index) => startIndex + index))
      );
    } else {
      setSelectedRows(new Set());
    }
  };

  // Handle individual row selection
  const handleSelectRow = (index: number) => {
    const newSelected = new Set(selectedRows);
    if (newSelected.has(index)) {
      newSelected.delete(index);
    } else {
      newSelected.add(index);
    }
    setSelectedRows(newSelected);
  };

  // Handle sorting
  const handleSort = (key: string | null) => {
    let direction: "asc" | "desc" = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  // Function to get column key from header
  const getColumnKey = (header: string) => {
    return header.toLowerCase().replace(/\s+/g, "");
  };

  return (
    <div className="-ml-4 -mr-4">
      <div className="flex justify-between items-center border-solid border-b border-[#EAECF0] p-2">
        <h1 className="font-medium text-black text-lg  text-center font-inter ml-8">
          Account Payables
        </h1>
        <div className="flex flex-row items-center justify-end gap-10 mr-5">
          <div className="flex flex-row items-center mr-4 justify-between gap-2">
            <Image
              src="/filter-lines.png"
              alt="filter"
              width={20}
              height={20}
            />
            <span className="font-inter">Filters</span>
          </div>
        </div>
      </div>

      <div className="w-full">
        <table className="w-full border-b border-solid border-[#EAECF0] border-collapse">
          <thead className="border-b border-solid border-[#EAECF0]">
            <tr>
              {[
                "Invoice Number",
                "Invoice Date",
                "Amount",
                "Invoice Due Date",
                "Payment Tenure",
                "Supplier Name",
                "Status",
                "",
              ].map((header, index) => {
                const columnKey = header ? getColumnKey(header) : null;
                const isCurrentSort = sortConfig.key === columnKey;
                
                return (
                  <th
                    key={header}
                    className="px-2 py-3 text-center font-medium text-gray-600 font-inter cursor-pointer"
                    onClick={() =>
                      header && header !== "" && handleSort(columnKey)
                    }
                  >
                    <div className="flex items-center justify-center gap-2">
                      <span className="py-1">{header}</span>
                      {header && header !== "" && (
                        <div className="flex items-center justify-center">
                          {isCurrentSort ? (
                            sortConfig.direction === "desc" ? (
                              <ArrowDown className="w-4 h-4 text-[#667085] font-semibold" />
                            ) : (
                              <ArrowUp className="w-4 h-4 text-[#667085] font-semibold" />
                            )
                          ) : (
                            <ArrowDown className="w-4 h-4 text-[#667085] font-semibold" />
                          )}
                        </div>
                      )}
                    </div>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {currentData.map((row, index) => (
              <tr
                key={startIndex + index}
                className={`border-b border-solid border-[#EAECF0] ${
                  index % 2 === 0 ? "bg-black-0" : "bg-white"
                }`}
              >
                <td className="p-1.5 text-center  font-inter">
                  {row.invoiceNumber}
                </td>
                <td className="p-1.5 text-center text-[#667085] font-inter">
                  {row.invoiceDate}
                </td>
                <td className="p-1.5 text-center text-[#667085] font-inter">
                  ₹{row.amount.toLocaleString()}
                </td>
                <td className="p-1.5 text-center text-[#667085] font-inter">
                  {row.invoiceDueDate}
                </td>
                <td className="p-1.5 text-center text-[#667085] font-inter">
                  {row.paymentTenure}
                </td>
                <td className="p-1.5 text-center text-[#667085] font-inter">
                  {row.supplierName || "-"}
                </td>
                <td className="p-1.5 text-center text-[#667085] font-inter">
                  <div className="flex items-center justify-center">
                    <span
                      className={`px-4 py-2 rounded-full font-inter text-sm flex items-center gap-1 ${
                        row.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : "bg-black-10 text-gray-800"
                      }`}
                    >
                      <span
                        className={`w-2 h-2 rounded-full ${
                          row.status === "Active"
                            ? "bg-green-400"
                            : "bg-gray-500"
                        }`}
                      ></span>
                      {row.status}
                    </span>
                  </div>
                </td>
                <td className="p-1.5">
                  <div className="flex items-center justify-center">
                    <button className="p-1 hover:bg-black-5 bg-white rounded font-inter">
                      <MoreVertical className="w-4 h-4 text-[#667085]" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-4 ml-2 mr-2 text-sm text-gray-600">
        <div className="font-inter">
          Showing {startIndex + 1} - {Math.min(endIndex, data.length)} of{" "}
          {data.length} Records
        </div>
        <div className="flex items-center gap-4">
          <div className="font-inter">
            <span className="font-inter">Rows per page</span>
            <select
              className="ml-2 border rounded p-1 font-inter"
              value={rowsPerPage}
              onChange={handleRowsPerPageChange}
            >
              <option value={14}>14</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
            </select>
          </div>
          <div className="flex items-center gap-2 font-inter">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-1 rounded hover:bg-gray-100 disabled:opacity-50"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="font-inter">
              {startIndex + 1} - {Math.min(endIndex, data.length)} of{" "}
              {data.length}
            </span>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-1 rounded hover:bg-gray-100 disabled:opacity-50"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountsPayableTable;