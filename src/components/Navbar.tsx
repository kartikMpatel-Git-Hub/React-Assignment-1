import { Home, Package, PackageCheckIcon, Settings, UserCircle2Icon } from "lucide-react"

const Navbar = ()=>{
    return (<div className="bg-slate-800 md:flex gap-10 m-auto w-fit lg:w-full">
            <div className="text-white font-bold p-3">
                E-Commerce vendor Dashboard
            </div>
            <div className="flex">
                <div className="text-white/40 font-semibold p-3 flex">
                    <Home className="w-5 h-5 m-1"/> Home
                 </div>
                <div className="text-white/40 font-semibold p-3 flex">
                    <Package className="w-5 h-5 m-1"/> Products
                 </div>
                <div className="text-white/40 font-semibold p-3 flex">
                    <PackageCheckIcon className="w-5 h-5 m-1"/>Orders
                </div>
                <div className="text-white/40 font-semibold p-3 flex">
                    <Settings className="w-5 h-5 m-1"/> Settings
                </div>
            </div>
            <div className="hidden md:block md:flex text-white/40 p-3">
                <UserCircle2Icon /> Profile
            </div>
        </div>
        )
}
export default Navbar