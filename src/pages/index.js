import React, { useState } from "react"
import { Helmet } from 'react-helmet'
import TabBar from "../components/TabBar"
import { gymList } from '../lib/ImageListData'
import ImageGrid from '../components/ImageGrid'
import Banner from "../components/Banner"

const tabLabels = gymList.map(tab => (tab.title));

const Index = () => {

  const [activeTab, setActiveTab] = useState(0)
  const [imageItems, setImageItems] = useState(gymList[0].item)

  const onTabClick = (index) => {
    setActiveTab(index)
    setImageItems(gymList[index].item)
  }

  return (
    <div className="home">
      <Helmet title="Fitness Gym" />
      <div className="container">
        <Banner />
        <TabBar tabLabels={tabLabels} onTabClick={onTabClick} activeTab={activeTab} />
        <ImageGrid items={imageItems} />
      </div>
    </div>
  )
}



export default Index
