import React, { useState } from 'react';
import { RefreshCw, Plus, Search, Database } from 'lucide-react';
import Layout from '../components/Layout';
import { MOCK_REPOSITORIES } from '../../mockData';

const RepositoryItem = ({ item, isLast }) => (
  <div className={`flex flex-col p-4 gap-3 hover:bg-[#f5f5f5] ${!isLast ? 'border-b' : ''}`}>
    <div className="flex gap-2 items-center">
      <span>{item.title}</span>
      <span className="bg-[#EFF8FF] border border-[#B2DDFF] text-[#175cd3] text-primary text-xs px-2 font-normal rounded-full">
        {item.type}
      </span>
    </div>
    <div className="flex gap-4 md:gap-8 text-sm font-light">
      <span className="flex items-center gap-2">
        {item.language}
        <span className="bg-[#1570EF] p-1 rounded-full"></span>
      </span>
      <span className="flex items-center gap-2">
        <Database className="w-4" />
        {item.size}
      </span>
      <span>{item.updatedAt}</span>
    </div>
  </div>
);

const SearchInput = ({ onChange }) => (
  <label 
  htmlFor="inputSearch" 
  className="relative outline outline-1 outline-[#d5d7da] border-b border-[#f3f3f3] w-fit rounded-md flex gap-2 items-center px-2 py-2"
>
  <Search className="w-4 h-4 stroke-2 text-gray-700" />
  <input
    id="inputSearch"
    placeholder="Search Repositories"
    onChange={onChange}
    className="text-xs w-56 placeholder:text-gray-700 outline-none bg-transparent"
  />
</label>
);

const HeaderActions = () => (
  <div className="flex gap-2">
     <button 
      className="flex text-xs items-center p-2 px-4 gap-2 rounded-md text-gray-700 hover:bg-gray-50"
      style={{
        outline: '1px solid #d5d7da',
        border: 'none',
        borderBottom: '1px solid #f3f3f3'
      }}
    >
      <RefreshCw className="w-4 h-4" />
      Refresh All
    </button>
    <button className="flex text-xs items-center p-2 px-4 gap-2 bg-[#1570EF] text-white rounded-md border-2 border-[#2E7FF1] outline-2 outline-[#2A6ECC]">
      <Plus className="w-4 h-4" />
      Add Repository
    </button>
  </div>
);

const RepositoryHeader = ({ totalRepositories, onSearchChange }) => (
  <div className="flex flex-col gap-4 border-b p-4 bg-white rounded-t-xl">  
    <div className="flex justify-between items-center flex-wrap gap-4">
      <div className="flex flex-col">
        <span className="font-semibold text-2xl text-gray-900">Repositories</span>
        <span className="text-sm text-gray-700">{totalRepositories} total repositories</span>
      </div>
      <HeaderActions />
    </div>
    <SearchInput onChange={onSearchChange} />
  </div>
);

const RepositoryList = ({ repositories }) => (
  <div className="flex flex-col w-full overflow-y-auto scrollbar-hide max-h-[calc(100vh-10.8rem)]">
    {repositories.length > 0 ? (
      repositories.map((item, index) => (
        <RepositoryItem 
          key={item.title}
          item={item}
          isLast={index === repositories.length - 1}
        />
      ))
    ) : (
      <div className="flex flex-col border-b p-4 gap-3 text-gray-500 text-center">
        No Repository available.
      </div>
    )}
  </div>
);

const Dashboard = () => {
  const [filteredData, setFilteredData] = useState(MOCK_REPOSITORIES);

  const handleFilter = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = MOCK_REPOSITORIES.filter(item =>
      item.title.toLowerCase().includes(searchTerm) ||
      item.language.toLowerCase().includes(searchTerm)
    );
    setFilteredData(filtered);
  };

  return (
    <Layout>
      <div className="p-5">
        <div className="bg-white w-full rounded-xl border flex flex-col">
          <RepositoryHeader 
            totalRepositories={MOCK_REPOSITORIES.length} 
            onSearchChange={handleFilter} 
          />
          <style jsx global>{`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
            .scrollbar-hide {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `}</style>
          <RepositoryList repositories={filteredData} />
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;