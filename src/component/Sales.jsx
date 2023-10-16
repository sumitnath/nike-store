import React from 'react'
import Items from './utils/Items'
import Title from './utils/Title'

const Sales = ({ifExists, sales:{title,items}}) => {
    //console.log(sales)
  return (
 <>
 <div className='nike-container'>
 <Title title={title}/>
 <div className={`grid items-center justify-items-center gap-7 lg:gap-5 mt-7 ${ifExists ? 'grid-cols-3 xl:grid-cols-2 sm:grid-cols-1' : 'grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'}`}>
 {items?.map((val, i)=>  <Items key={i} {...val} 
ifExists={ifExists}
/>)}
 </div>
 </div>
 
 
 </>
  )
}

export default Sales