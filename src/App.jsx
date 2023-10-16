import React from 'react'
import { Hero ,Sales,FlexContentt,Stories,Footer,Navbar,Cart} from './component'
import {heroapi,toprateslaes,popularsales,highlight,sneaker,story,footerAPI} from './data/data.js'

const App = () => {
  return (
    <>
 <Navbar/>   
 <Cart/>
<main className='flex flex-col gap-16 relative'>
<Hero heroapi={heroapi}/>
<Sales sales={popularsales} ifExists />
<FlexContentt flexCont={highlight} ifExists/>
<Sales sales={toprateslaes}  />
<FlexContentt flexCont={sneaker}/>
<Stories story={story}/>
<Footer footerAPI={footerAPI}/>
</main>
    </>
  )
}

export default App
