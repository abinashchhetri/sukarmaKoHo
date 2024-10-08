import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreProduct from '../../components/ExploreProduct/ExploreProduct'
import ProductDisplay from '../../components/ProductDisplay/ProductDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'

const Home = () => {
    const [category,setCategory]=useState('All');
  return (
    <div>
      <Header/>
      <ExploreProduct category={category} setCategory={setCategory}/>
      <ProductDisplay category={category} />
      <AppDownload/>
    </div>
  )
}

export default Home
