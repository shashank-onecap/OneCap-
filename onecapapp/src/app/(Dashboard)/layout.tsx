"use client"
import React from 'react'
import Sidebar from '../components/sidebar'
import Navbar from '../components/navbar'
import Notifiactions from '../components/notifiactions';
import Bargraph from '../components/bargraph';
import Stackedareachart from '../components/stackedareachart';
import Singleareachart from '../components/singleareachart';
import Piechart from '../components/piechart';



const DashboardLayout = ({
  children,
}: Readonly<{

  children: React.ReactNode;
}>) => {
  return (
    <div>
        <div className='h-screen flex'>

       {/* left-side */}
        <div className='flex flex-col h-screen border-r border-grey-300'>
        <Sidebar/>
        </div>
        {/* MIDDLE-PART */}
        <div className=' flex flex-col gap-4 w-[60%] h-screen border-r  border-grey-300 overflow-y-auto scrollbar-hide'>
                    <Navbar />
                    <Bargraph/>
                    <Stackedareachart/>
                    <Singleareachart/>
                    <Piechart/>
            

        </div>

        {/* RIGHT-SIDE */}
        <div className='h-screen border-grey-300'>
            <Notifiactions />   

            {children}

        </div>
        

    </div>
        
    </div>
  )
}

export default DashboardLayout