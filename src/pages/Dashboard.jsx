import React, { useState } from 'react';
import { RefreshCw, Plus, Search, Database } from 'lucide-react';
import Layout from '../components/Layout';
import { MOCK_REPOSITORIES } from '../../mockData';

/**
* Renders a styled item component with details such as title, type, language, size, and update date.
* @example
* (itemExample, isLastExample)
* Renders a div with styled content based on the item properties.
* @param {Object} item - The item object containing properties to display.
* @param {boolean} isLast - Boolean indicating if this is the last item in the list.
* @returns {JSX.Element} A JSX element representing the styled item component.
* @description
*   - Applies different styles if the item is not the last in the list (`border-b` class).
*   - Uses conditional rendering to apply styles based on `isLast`.
*   - Includes icons and badges to visually represent item attributes.
*/
const RepositoryItem = ({ item, isLast }) => (
  <div className={`flex flex-col p-4 gap-3 hover:bg-[#f5f5f5] ${!isLast ? 'border-b' : ''}`}>
    <div className="flex gap-2 items-center font-medium text-[181d27]">
      <span>{item.title}</span>
      <span className="bg-[#EFF8FF] border border-[#B2DDFF] text-[#175cd3] text-primary text-xs px-2 font-normal rounded-full">
        {item.type}
      </span>
    </div>
    <div className="flex gap-4 md:gap-8 text-sm font-light items-center text-[#181d27]">
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

/**
 * Renders a styled search input with an accompanying icon.
 * @example
 * <SearchInput onChange={handleSearchChange} />
 * A JSX input field encapsulated within a label.
 * @param {function} onChange - Event handler for the input's change event.
 * @returns {JSX.Element} A JSX label component with an input field and a search icon.
 * @description
 *   - The label and input are styled with Tailwind CSS classes.
 *   - Supports full-width and fixed-width layout depending on viewport size.
 *   - The search icon uses the 'Search' component.
 */
const SearchInput = ({ onChange }) => (
  <label 
    htmlFor="inputSearch" 
    className="relative outline outline-1 outline-[#d5d7da] border-b border-[#f3f3f3] w-full md:w-fit rounded-md flex gap-2 items-center px-2 py-2"
  >
    <Search className="w-4 h-4 stroke-2 text-gray-700" />
    <input
      id="inputSearch"
      placeholder="Search Repositories"
      onChange={onChange}
      className="text-xs w-full md:w-56 placeholder:text-gray-700 outline-none bg-transparent"
    />
  </label>
);

/**
 * Renders a set of interactive buttons within a responsive flex container.
 * @example
 * renderButtons()
 * // Returns a JSX element containing two buttons: "Refresh All" and "Add Repository".
 * @param {none} None - This function does not take any arguments.
 * @returns {JSX.Element} A JSX element with two styled buttons.
 * @description
 *   - The "Refresh All" button has a hover effect with a background color change.
 *   - The "Add Repository" button has a distinct color scheme and outline.
 *   - The buttons are responsive and adjust their layout based on the screen size.
 */
const HeaderActions = () => (
  <div className="flex gap-2 w-full md:w-auto">
     <button 
      className="flex text-xs items-center p-2 px-4 gap-2 rounded-md text-gray-700 hover:bg-gray-50 flex-1 md:flex-none justify-center md:justify-start"
      style={{
        outline: '1px solid #d5d7da',
        border: 'none',
        borderBottom: '1px solid #f3f3f3'
      }}
    >
      <RefreshCw className="w-4 h-4" />
      Refresh All
    </button>
    <button className="flex text-xs items-center p-2 px-4 gap-2 bg-[#1570EF] text-white rounded-md border-2 border-[#2E7FF1] outline-2 outline-[#2A6ECC] flex-1 md:flex-none justify-center md:justify-start">
      <Plus className="w-4 h-4" />
      Add Repository
    </button>
  </div>
);

/**
* Displays a header section for a list of repositories with search functionality.
* @example
* renderHeaderSection(150, handleSearchInputChange)
* <div>...</div>
* @param {Object} props - The component properties.
* @param {number} props.totalRepositories - Number of total repositories to display.
* @param {function} props.onSearchChange - Callback function to handle search input changes.
* @returns {JSX.Element} A JSX element rendering the header with a repository count and a search input.
* @description
*   - The header is responsive, adjusting layout for different screen sizes using Flexbox classes.
*   - Includes a 'HeaderActions' component for additional header-related actions.
*   - Displays the total number of repositories provided via component properties.
*/
const RepositoryHeader = ({ totalRepositories, onSearchChange }) => (
  <div className="flex flex-col gap-4 border-b p-4 bg-white md:rounded-t-xl">  
    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
      <div className="flex flex-col">
        <span className="font-semibold text-2xl text-gray-900">Repositories</span>
        <span className="text-sm text-gray-700">{totalRepositories} total repositories</span>
      </div>
      <HeaderActions />
    </div>
    <SearchInput onChange={onSearchChange} />
  </div>
);

/**
* Renders a list of repositories or a message if none are available
* @example
* renderRepositories({ repositories: [] })
* <div className="...">No Repository available.</div>
* @param {Object} param0 - Object containing the properties for component rendering.
* @param {Array} param0.repositories - List of repository objects to render.
* @returns {JSX.Element} A rendered component displaying either repository items or a 'No Repository available' message.
* @description
*   - Utilizes conditional rendering to handle empty repository lists.
*   - Applies specific CSS classes to ensure layout consistency and styling.
*   - The scrolling behavior is customized by hiding the scrollbar.
*/
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

/**
* Renders a repository dashboard with search functionality.
* @example
* // In a React component
* <Dashboard />
* // Allows search and filtering of mock repositories
* @param {SyntheticEvent} e - The event triggered by changing the search input, used for filtering repositories.
* @returns {JSX.Element} The layout component containing filtered repository data.
* @description
*   - Utilizes mock repository data for demonstration purposes.
*   - Filters repositories by title or language based on user input.
*   - Applies custom scrollbar styles globally.
*/
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
      <div className="p-0 md:p-5 h-screen md:h-auto">
        <div className="bg-white w-full h-full md:h-auto md:rounded-xl md:border flex flex-col">
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