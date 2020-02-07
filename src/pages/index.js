import React, { useState } from "react"
import { Helmet } from 'react-helmet'
import Tab from "../components/Tab"
import { gymList } from '../lib/ImageListData'
import ImageGrid from '../components/ImageGrid'
import Banner from "../components/Banner"
const Index = () => {

  const [activeTab, setActiveTab] = useState('Studio Room')

  const OnClickTab = (e) => {
    const ItemID = e.target.id
    setActiveTab(ItemID)
  }

  return (
    <div className="home">
      <Helmet title="Fitness Gym" />
      <div className="container">
        <Banner />
        <Tab data={gymList} OnClickTab={OnClickTab} activeTab={activeTab} />
        {gymList.map((item, key) => {
          return <ImageGrid key={key} ImageData={item} activeTab={activeTab} />
        })}
      </div>
    </div>
  )
}



export default Index
