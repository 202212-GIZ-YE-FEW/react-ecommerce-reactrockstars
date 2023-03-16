import Link from 'next/link'


function Category({ category }) {
    return (
        <Link key={category.id} href={`/category/${category.id}`}>
            <div className="overflow-hidden bg-white rounded-lg shadow-lg">
                <img className="object-cover w-full h-64" src={category.image} alt={category.name} />
                <div className="px-6 py-4">
                    <div className="mb-2 text-xl font-bold text-gray-900">{category.name}</div>
                </div>
            </div>
        </Link>
    )
}

export default Category
