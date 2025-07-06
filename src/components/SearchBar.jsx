import React from "react";
import { Search } from "lucide-react";

export default function SearchBar({searchItem , setSearchItem}) {
  return (
    <div className=" relative mb-6">
      <Search className="absolute pl-12 left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      <input
        onChange={(e) => setSearchItem(e.target.value)}
        type="text"
        value={searchItem}
        placeholder="Search Movies ..."
        className=" w-full px-4 py-2 border border-gray-300 rounded-md focus:border-pink-200 transition-all "
      />
    </div>
  );
}
