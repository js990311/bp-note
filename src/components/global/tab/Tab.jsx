import { useEffect, useRef, useState } from 'react';
import TabTitle from './TabTitle';
import TabContent from './TabContent';
import './Tab.css';

const Tab = () => {
    
    const [tabInfo, setTabInfo] = useState(
        {
            activeTab : 0,
            tabs : [
                {
                    title : 'tab1',
                    content : 'tab1-content' 
                },
                {
                    title : 'tab2',
                    content : 'tab2-content' 
                }
            ]    
        }
    );
    console.log(tabInfo);
    const onDeleteTab = (index) => {
        console.log('delete');
        setTabInfo((prev) => {
            let alterTabs = prev.tabs.filter((tab, idx) => idx !== index);
            let alterActiveTab = prev.activeTab === alterTabs.length ? prev.activeTab-1 : prev.activeTab; 
            let alter = {
                ...prev,
                activeTab : alterActiveTab,
                tabs : alterTabs,
            }
            return alter;
        });
    }

    const onActiveTab = (index) => {
        console.log('onClick');
        setTabInfo({
            ...tabInfo,
            activeTab: index
        });
    }

    const onCreateTab = (newTab) => {
        setTabInfo((prev) => {
            let alterTabs = [
                ...prev.tabs, 
                newTab
            ]
            let alterActiveTab = alterTabs.length-1;
            return {
                activeTab : alterActiveTab,
                tabs : alterTabs
            }
        });
    }

    return (
        <div className='tab'>
            <div className="tab-header">
                {
                    tabInfo.tabs.map((tab, idx)=>(
                        <TabTitle 
                            key={idx}
                            title={tab.title}
                            isActive={tabInfo.activeTab === idx ? true : false}
                            onActive={() => {onActiveTab(idx);}}
                            onDelete={()=>{onDeleteTab(idx)}}
                        />
                    ))
                }
                <button
                    onClick={
                        ()=>{
                            onCreateTab( {
                                title : 'newTabs',
                                content : 'newTabs-content' 
                            });
                        }
                    }
                >
                    +
                </button>
            </div>
            <div className="tab-body">
                {
                    tabInfo.tabs.map((tab, idx)=>(
                        <TabContent
                            key={idx}
                            isActive={tabInfo.activeTab === idx ? true : false}
                        >
                            {tab.content}
                        </TabContent>    
                    ))
                }
            </div>
        </div>
    );
}

export default Tab;