import { useState } from "react"
import ProductCard from "./ProductCard"
import AddProduct from "./AddProduct"
import type { Product } from "../types/types"

const Products = () => {

    const [openAddForm, setOpenAddForm] = useState(true)
    const key = "products"
    const [products, setProducts] = useState<Product[]>(JSON.parse(localStorage.getItem(key) || "[]"))

    const [search, setSearch] = useState("")
    const [categoryFilter, setCategoryFilter] = useState("")
    const [brandFilter, setBrandFilter] = useState("")

    const getBrands = () => [...new Set(products.map((p) => p.brand.toString()))]
    const getCategories = () => [...new Set(products.map((p) => p.category.toString()))]
    const brands = getBrands()
    const categories = getCategories()

    console.log(brands);
    console.log(categories);

    const filterProducts = products.filter((product) => {
        const searchMatch =
            product.product.toString().toLocaleLowerCase().includes(search.toLocaleLowerCase())
        const categoryMatch = categoryFilter === "" || categoryFilter === product.category
        const brandMatch = brandFilter === "" || brandFilter === product.brand

        return searchMatch && categoryMatch && brandMatch
    })

    const clearFilter = () => {
        setSearch("")
        setBrandFilter("")
        setCategoryFilter("")
    }

    const handleOpenAddForm = () => {
        setOpenAddForm(true)
    }

    const handleCloseAddForm = () => {
        setOpenAddForm(false)
    }

    return (
        <div>
            <div>
                <div
                    className={`${!openAddForm && "hidden"} `}
                >
                    <AddProduct
                    />
                </div>
                {openAddForm ?
                    <button
                        className="bg-slate-800 h-15 p-4 rounded-2xl text-white"
                        onClick={handleCloseAddForm}>Close</button>
                    :

                    <button
                        className="bg-slate-800 h-15 p-4 rounded-2xl text-white"
                        onClick={handleOpenAddForm}>Open</button>
                }

            </div>
            <div>
                <div>
                    Serach By name
                    <input
                        type="text"
                        value={search}
                        className="border-1 border-black"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <div>
                    Category
                    <select
                        value={categoryFilter}
                        onChange={(e) => setCategoryFilter(e.target.value)}
                    >
                        <option value={""}>All Categories</option>
                        {categories.map((category) => (
                            <option value={category} key={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    Brand
                    <select
                        value={brandFilter}
                        onChange={(e) => setBrandFilter(e.target.value)}
                    >
                        <option value={""}>All Brands</option>
                        {brands.map((brand) => (
                            <option value={brand} key={brand}>
                                {brand}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    Clear Filter
                    <button
                        onClick={clearFilter}
                        className="bg-slate-600 p-2 rounded-2xl"
                    >
                        Clear Filter
                    </button>
                </div>
            </div>
            <div className="">
                <h3 className="text-2xl">Total Products : {products.length}</h3>
                <div className="flex gap-5">
                    {
                        filterProducts.map((p: any, idx: number) => (
                            <ProductCard product={p} key={idx} />
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default Products