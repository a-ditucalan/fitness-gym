import React from 'react'


const Tab = ({ data, OnClickTab, activeTab }) => {
  return (
    <div className="tab-wrapper">
      {data.map((item, key) => (
        <button key={key} id={item.title} className={activeTab === item.title ? "tab-holder active-tab" : 'tab-holder'} onClick={OnClickTab}>
          {item.title}
        </button>
      ))}
    </div>
  )
}

export default Tab