import SideBar from "./SideBar.jsx";

const Layout = ({children}) => {
    return (
        <div className={`flex w-full h-full flex-col md:flex-row`}>
            <SideBar />
           <div className={`h-screen w-full box-border overflow-y-hidden`}>
               {children}
           </div>
        </div>
    );
};

export default Layout;