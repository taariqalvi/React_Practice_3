import React from 'react'
import Products from './Products'

const Home = () => {
    return (
        <React.Fragment>
            <div className="homeItems">
                <h1 className="heading">Welcome to Redux Store</h1>
                <section>
                    <h2 className='heading_2'>Products</h2>
                    <Products />
                </section>
            </div>
        </React.Fragment>
    )
}

export default Home