import Image from 'next/image'
import React from 'react'

const BookingHistoryList = ({ bookingHistory }) => {
    return (
        <div>
            {
                bookingHistory.map((booking, index) => {
                    <div key={index}>
                        <Image src={booking.businessList.images[0].url}
                        alt='Image'
                        width={80}
                        height={80}></Image> 
                        {
                            booking.businessList.names
                        }
                    </div>
                })
            }

        </div>
    )
}

export default BookingHistoryList
