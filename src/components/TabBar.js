import React from 'react'

const TabBar = ({ tabLabels, onTabClick, activeTab }) => {
  return (
    <div className="tab-wrapper">
      {tabLabels.map((label, index) => (
        <button key={index} className={activeTab === index ? "tab-holder active-tab" : 'tab-holder'} onClick={() => onTabClick(index)}>
          {label}
        </button>
      ))}
    </div>
  )
}

export default TabBar