import type { Product } from "../types/types"

interface ProductCardProps {
    product: Product
}

const ProductCard = (product: ProductCardProps) => {
    return (
        <div className="bg-slate-700 text-white font-semibold rounded-2xl p-3">
            <div>
                <div>
                    name : {product.product.product}
                </div>
                <div>
                    Price : {product.product.price.toString()}
                </div>
                <div>
                    Qty : {product.product.qty.toString()}
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