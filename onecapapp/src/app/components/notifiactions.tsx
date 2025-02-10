"use client"
import React from 'react'
import Notifications from '../data/notifications'
import Image from 'next/image'


const Notifiactions = () => {
  return (
    <div className='flex flex-col  justify-start gap-2 p-2'>
        <div className='flex  justify-start p-4'>
            <h4 className='text-md font-bold'>Notifications</h4>
        </div>
        <div>
            {Notifications.map((notification) => (
            <div key={notification.id} className='flex items-center gap-2 flex-row p-2'>
                    <Image src={notification.icon} alt={notification.discription} width={10} height={10}  className='w-5 h-5 object-fill bg-blue-300'/>
                    <div className='flex flex-col'>
                    <h4>{notification.discription}</h4>
                    <p>{notification.date}</p>
                    </div>
            </div>
        ))}
        </div>
        
    </div>
  )
}

export default Notifiactions;