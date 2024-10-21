import React from 'react'
import Navbar from '../components/Navbar'
import ProductList from '../components/products/ProductList'
import CategoryList from '../components/Categories/CategoryList'


const Home = () => {
    return (
        <div>
            <section>
                <div className='flex justify-around'>
                    <h1 className="text-xl underline ">
                        Hello world!
                    </h1>
                    <h1 className="text-xl underline fontType1">
                        Hello world!
                    </h1>
                    <h1 className="text-xl underline fontType2">
                        Hello world!
                    </h1>
                    <h1 className="text-xl underline fontType3">
                        Hello world!
                    </h1>
                </div>
            </section>
            <Navbar />
            <section className='flex justify-between'>
                <ProductList />
                <CategoryList />
            </section>
        </div>
    )
}

export default Home