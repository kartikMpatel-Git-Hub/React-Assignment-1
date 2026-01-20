const Sidebar = ()=>{
    return (
        <div className="hidden md:block bg-slate-800 px-15 h-screen text-white font-semibold">
            <div className="p-3 ">Dashboard</div>
            <div className="p-3">Products</div>
            <div className="p-3">Orders</div>
            <div className="p-3">Settings</div>
        </div>
    )
}

export default Sidebar