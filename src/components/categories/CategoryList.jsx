import React from 'react'
import CategoryItem from './CategoryItem'

const CategoryList = () => {
    return (
        <div>
            <div className='p-5 border-2 m-2 rounded-3xl flex flex-col gap-2'>
                <h2 className='font-medium py-4'>Categories</h2>
                <CategoryItem />
                <CategoryItem />
                <CategoryItem />
                <CategoryItem />
                <CategoryItem />
            </div>
        </div>
    )
}

export default CategoryList