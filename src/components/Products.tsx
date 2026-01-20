import { useEffect, useState } from "react"
import ProductCard from "./ProductCard"
import AddProduct from "./AddProduct"
import { FileWarning } from "lucide-react"

const Products = () => {

    const [openAddForm, setOpenAddForm] = useState(true)
    const key = "products"
    const [products, setProducts] = useState(JSON.parse(localStorage.getItem(key) || "[]"))

    const handleOpenAddForm = () => {
        setOpenAddForm(true)
    }

    const handleCloseAddForm = () => {
        setOpenAddForm(false)
    }

    return (
        <div>
            <p className="text-red-600 flex"><FileWarning /> reload aftre add product, that feature currently under process</p>
            <p className="text-red-600 flex"><FileWarning />  UI is also under process</p>
            <div className="flex">
                {openAddForm ?
                    <button
                        className="bg-slate-800 h-15 p-4 rounded-2xl text-white"
                        onClick={handleCloseAddForm}>Close</button>
                    :

                    <button
                        className="bg-slate-800 h-15 p-4 rounded-2xl text-white"
                        onClick={handleOpenAddForm}>Open</button>
                }
                <div
                    className={`${!openAddForm && "hidden"} `}
                >
                    <AddProduct />
                </div>
            </div>
            <div className="grid gap-5">
                {
                    products.map((p : any, idx : number) => (
                        <ProductCard product={p} key={idx} />
                    ))
                }
            </div>

        </div>
    )
}

export default Products