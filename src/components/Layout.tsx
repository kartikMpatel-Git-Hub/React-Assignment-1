import Navbar from "./Navbar"
import Products from "./Products"
import Sidebar from "./Sidebar"

const Layout = () =>{
    return (
        <>
            <Navbar />
            <div className="flex gap-1">
                <Sidebar />   
                <Products />
            </div>
        </>
    )
}

export default Layout