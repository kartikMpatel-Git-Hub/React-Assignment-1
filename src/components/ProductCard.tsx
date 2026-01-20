import type { Product } from "../types/types"

// interface ProductCardProps {
//     product: Product
// }

const ProductCard = (product: {product : Product}) => {
    return (
        <div className="bg-slate-700 text-white font-semibold rounded-2xl p-3">
            <div>
                <div>
                    name : {product.product.product}
                </div>
                <div className="flex">
                    Price : {product.product.price.toString()}
                    {
                        Number(product.product.price) >= 5000 &&
                        <div className="text-sm bg-white text-blue-700 rounded-2xl p-1">
                            Expensive
                        </div>
                    }
                </div>
                <div className="flex">
                    Qty : {product.product.qty.toString()}
                    {
                        Number(product.product.qty) < 10 && 
                            <div className="bg-white text-red-500 text-sm rounded-2xl p-1">
                                Low Stock
                            </div>
                    }
                </div>
                <div>
                    Category : {product.product.category}
                </div>
                <div>
                    Brand : {product.product.brand}
                </div>
            </div>
        </div>
    )
}

export default ProductCard