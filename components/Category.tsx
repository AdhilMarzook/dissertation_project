import React from 'react'

const Category = ({ category}: CategoryProps) => {
  return (
    <div>
        <div className='flex w-full flex-1 flex-col gap-2'>
            <div className='text-15 flex justify-between'>
                <h2>{category.name}</h2>
                <h3>{category.count}</h3>
            </div>
        </div>
    </div>
  )
}

export default Category