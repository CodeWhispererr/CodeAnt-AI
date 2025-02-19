import React, { useEffect, useRef, useState } from 'react';
import { 
  LogOut,
  Home,
  Code2,
  Cloud,
  BookOpen,
  Settings,
  Phone,
  Menu,
  ChevronDown,
  X,
} from 'lucide-react';
import anticon from '../assets/svgs/logo.svg';

const navItems = [
  { icon: Home, label: 'Repositories', isActive: true },
  { icon: Code2, label: 'AI Code Review' },
  { icon: Cloud, label: 'Cloud Security' },
  { icon: BookOpen, label: 'How to Use' },
  { icon: Settings, label: 'Settings' },
];

const footerItems = [
  { icon: Phone, label: 'Support' },
  { icon: LogOut, label: 'Logout' },
];

/**
 * Renders a stylized button with an icon and label.
 * @example
 * renderButton({ icon: SomeIcon, label: 'Click Me', isActive: true, onClick: handleClick })
 * // Returns a button element
 * @param {object} icon - React component for the icon.
 * @param {string} label - Text to display on the button.
 * @param {boolean} isActive - Determines the styling of the button.
 * @param {function} onClick - Function to call when button is clicked.
 * @returns {JSX.Element} Styled button with an icon and label.
 * @description
 *   - Button appearance changes based on the isActive state.
 *   - Includes a hover effect for inactive state.
 *   - Encompasses a flexible container for icon and label.
 */
const NavItem = ({ icon: Icon, label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center px-4 py-2 text-sm rounded-lg w-full ${
      isActive 
        ? 'bg-[#1570EF] text-white border-2 border-[#3081F1]' 
        : 'text-[#414651] hover:bg-gray-100 border-2 border-white'
    }`}
  >
    <span className="flex-shrink-0">
      <Icon className="w-5 h-5" />
    </span>
    <span className="ml-3 font-semibold">{label}</span>
  </button>
);

/**
 * Renders a sidebar component that adapts to screen size and user interactions.
 * @example
 * <SideBar />
 * // Renders the sidebar element with responsive behavior
 * @param {Array} navItems - An array of navigation items containing label and icon properties used to populate the sidebar.
 * @param {Array} footerItems - An array of footer items containing label and icon properties to be displayed at the bottom of the sidebar.
 * @returns {JSX.Element} A sidebar component with responsive design features and click handling to toggle visibility.
 * @description
 *   - Uses hooks like useState to manage the state of sidebar visibility, mobile view, and active item.
 *   - Utilizes useEffect to add event listeners for window resize and outside clicks, ensuring responsive behavior.
 *   - Ref hooks are used to keep track of sidebar and mobile status references.
 *   - Implements conditional rendering to manage the sidebar's appearance based on screen size and user interaction.
 */
const SideBar = () => {
  const [isSideBarVisible, setIsSideBarVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeItem, setActiveItem] = useState('Repositories');
  const isMobileRef = useRef(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const isMobileLocal = width < 768;
      setIsMobile(isMobileLocal);
      isMobileRef.current = isMobileLocal;
    };

    const handleClickOutside = (event) => {
      if (isMobile && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSideBarVisible(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobile]);

  const handleNavItemClick = (label) => {
    setActiveItem(label);
    if (isMobile) {
      setIsSideBarVisible(false);
    }
  };

  return (
    <>
      {isMobile && isSideBarVisible && (
        <div className="fixed inset-0 bg-black/10 z-10" />
      )}
      <div className="flex flex-col w-full md:w-64 bg-white md:h-screen border-r relative z-20" ref={sidebarRef}>
        <div className="flex justify-between md:justify-around w-full px-4 items-center">
          <div className="flex items-center justify-center gap-4 h-16">
            <img src={anticon} alt="logo" className="w-6" />
            <h1 className="text-lg font-semibold">CodeAnt AI</h1>
          </div>

          <div className="flex md:hidden">
            <button onClick={() => setIsSideBarVisible(prev => !prev)}>
              {isSideBarVisible ? (
                <X className="size-5" />
              ) : (
                <Menu className="size-5" />
              )}
            </button>
          </div>
        </div>
        <div
          className="absolute md:static bottom-0 w-full h-screen md:h-full translate-y-full md:translate-y-0 flex overflow-hidden transition-all"
          style={{
            height: isMobile ? (isSideBarVisible ? '60vh' : '0px') : '100%',
          }}
        >
          <div className="bg-white w-full h-fit md:h-full flex flex-col">
            <div className="flex flex-col items-center py-4 w-full px-4">
              <span className="mt-2 text-sm border p-1.5 rounded-lg border-[#d5d7da] flex gap-2 items-center w-full justify-between md:justify-start md:w-auto">
                <span>UtkarshDhairyaPanwar</span>
                <ChevronDown className="w-5" />
              </span>
            </div>
            <nav className="flex-1 px-4">
              {navItems.map((item) => (
                <NavItem
                  key={item.label}
                  icon={item.icon}
                  label={item.label}
                  isActive={activeItem === item.label}
                  onClick={() => handleNavItemClick(item.label)}
                />
              ))}
            </nav>
            <div className="px-4 pb-4">
              {footerItems.map((item) => (
                <NavItem
                  key={item.label}
                  icon={item.icon}
                  label={item.label}
                  onClick={() => handleNavItemClick(item.label)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;