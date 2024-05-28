import React from 'react'
import PopularItem from './PopularItem'
import { mostPopularItems } from '../../data/shopdata'


const MostPopular = () => {
    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 md:max-w-none sm:grid-cols-1 justify-center">
            {mostPopularItems.map(item => (
                <PopularItem item={item} key={item.id} />
            ))}
        </div>
    )
}

export default MostPopular