import React, { useEffect, useState } from 'react'
import GlobalApi from '../../../_services/GlobalApi';
import BusinessList from '../../../_components/BusinessList';

function BusinessByCategory({params}) {
  const [businessList,setbusinessList]=useState([]);
  useEffect(()=>{
    params &&getbusinessList(); 
  },[params]);

  const getbusinessList =()=>{
    GlobalApi.getBusinessbyCAtegory(params.category).then(resp=>{
      setbusinessList(resp?.businessLists);   
    })
  }
  return (
    <div> 
      <BusinessList title={params.category} BusinessLists={businessList}></BusinessList>

    </div>
  )
}

export default BusinessByCategory
