"use client"
import React from 'react'
import {signIn, useSession} from 'next-auth/react'
import { revalidatePath } from 'next/cache';
const BusinessData = () => {
    const {data,status} = useSession();
    if(status=='loading'){
        return <p>Loading ...</p>
    }
    if(status=='unauthenticated'){
        signIn('descope');
    }
  return status=='authenticated' (
    <div>

    </div>
  )
}

export default BusinessDat