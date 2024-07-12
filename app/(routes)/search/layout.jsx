import React from 'react'
import CategorySideBar from './_components/CategorySideBar'
function layout({children}) {
  return (
    <div>
      <div className='grid grid-cols-4 bg-red-900' >
        <div>
          <CategorySideBar/>
        </div>
        <div className='col-span-3 bg-purple-400'>
        {children}
        </div>
      </div>
      
    </div>
  )
}

export default layout
