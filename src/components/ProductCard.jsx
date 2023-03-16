function ProductCard({ product }) {
    return (
        <div key={product.id} className="w-full px-4 mb-4 sm:w-1/2 md:w-1/3 lg:w-1/4">
            <div className="overflow-hidden bg-white rounded shadow-lg">
                <img className="object-cover w-full h-64" src={product.images[0]} alt={product.title} />
                <div className="px-6 py-4">
                    <div className="mb-2 text-xl font-bold text-gray-900">{product.title}</div>
                    <p className="text-base text-gray-700">{product.description}</p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block px-3 py-1 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">{product.category.name}</span>
                    <span className="inline-block px-3 py-1 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">{product.price} </span>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
