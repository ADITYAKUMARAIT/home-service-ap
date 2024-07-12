'use client'
import React, { useEffect, useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BookingHistoryList from './_components/BookingHistoryList'
import GlobalApi from '../../_services/GlobalApi'
import { useSession } from 'next-auth/react'

const mybookings = () => {
  const {data} = useSession();
  const[bookingHistory,setBookingHistory]=useState([]);
  useEffect(()=>{
    data&&getSerBookingHistory();
  },[data])
  //used to get the use booking history 
  const getSerBookingHistory =()=>{
    GlobalApi.getBookingHistory(data.user?.email).then(resp=>{
      console.log(resp);
      setBookingHistory(resp.bookings);
    })
  }
  return (
    <div className='my-10 mx-5 md:mx-36' >
      <h2 className='font-bold text-[20px] my-2'>My bookings </h2>
      <Tabs defaultValue="account" className="w-full justify-start">
        <TabsList className='w-full'>
          <TabsTrigger value="booked">Booked</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>
        <TabsContent value="booked">
          <BookingHistoryList bookingHistory={bookingHistory}></BookingHistoryList>
          </TabsContent>
        <TabsContent value="completed">Change your password here.</TabsContent>
      </Tabs>


    </div>
  )
}

export default mybookings
