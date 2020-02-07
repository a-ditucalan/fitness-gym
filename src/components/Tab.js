import React from 'react'


const Tab = ({ data, OnClickTab, activeTab }) => {
  return (
    <div className="tab-wrapper">
      {data.map((item, key) => (
        <div key={key} id={item.title} className={activeTab === item.title ? "tab-holder active-tab" : 'tab-holder'} onClick={OnClickTab}>
          {item.title}
        </div>
      ))}
    </div>
  )
}

export default Tab