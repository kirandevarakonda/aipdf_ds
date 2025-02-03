'use client';

import { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { FiFilter } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';

export default function DocumentsTable() {
  const [selectedRows, setSelectedRows] = useState([]);

  const documents = new Array(10).fill({
    title: 'Bold text column',
    size: 'Regular text column',
    created: 'Regular text column',
  });

  const toggleRow = (index) => {
    setSelectedRows((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const toggleAll = () => {
    if (selectedRows.length === documents.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(documents.map((_, index) => index));
    }
  };

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold">Documents <span className="text-blue-500 text-sm">Label text or value</span></h2>
        <div className="flex gap-4">
          <button className="text-gray-600 flex items-center gap-1">
            <MdDelete size={18} /> Delete
          </button>
          <button className="text-gray-600 flex items-center gap-1">
            <FiFilter size={18} /> Filters
          </button>
        </div>
      </div>
      <p className='font-normal text-gray-500'>A descriptive body text comes here</p>
      <table className="w-full border-collapse">
        <thead>
          <tr className="text-left border-b">
            <th className="py-2"><input type="checkbox" checked={selectedRows.length === documents.length} onChange={toggleAll} /></th>
            <th className="py-2">Title ↓</th>
            <th className="py-2">Size ↓</th>
            <th className="py-2">Created ↓</th>
            <th className="py-2"></th>
          </tr>
        </thead>
        <tbody>
          {documents.map((doc, index) => (
            <tr key={index} className="border-b">
              <td className="py-2"><input type="checkbox" checked={selectedRows.includes(index)} onChange={() => toggleRow(index)} /></td>
              <td className="py-2 font-bold">{doc.title}</td>
              <td className="py-2">{doc.size}</td>
              <td className="py-2">{doc.created}</td>
              <td className="py-2 text-red-500 cursor-pointer"><FaTrash /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
