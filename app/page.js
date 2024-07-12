"use client"
import { Button } from "../components/ui/button";
import Image from "next/image";
import Hero from "./_components/Hero";
import CategoryList from "./_components/CategoryList";
import GlobalApi from "./_services/GlobalApi";
import { useEffect, useState } from "react";
import BusinessList from "./_components/BusinessList";

export default function Home() {
  const  [categoryList,setcategoryList] =useState([])
  const [BusinessLists,SetbusinessList] = useState([]);
  useEffect(()=>{
    getCategoryList();
    GetAllBusinesslist();
  },[])
  const getCategoryList = ()=>{
    GlobalApi.getCategory().then(resp=>{
      setcategoryList(resp.categories);
    })
  }

  const  GetAllBusinesslist =()=>{
    GlobalApi.getAllBusinessList().then(resp=>{
      SetbusinessList(resp.businessLists);  
    })

  }
  return (
    <div>
      <Hero/>
      <CategoryList categoryList={categoryList}/>
      <BusinessList BusinessLists={BusinessLists} title ={'popular Business'}/>
    </div>
  );
}
