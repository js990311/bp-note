import { useEffect, useRef, useState } from 'react';
import TabTitle from './TabTitle';
import TabContent from './TabContent';

const Tab = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [tabs, setTabs] = useState(
        [
            {
                title : 'tab1',
                content : 'tab1-content' 
            },
            {
                title : 'tab2',
                content : 'tab2-content' 
            }
        ]
    );

    useEffect(
        ()=>{
            if(tabs.length !== 0 && activeTab === tabs.length){
                setActiveTab((prev)=>(prev-1));
            }
        }
        ,[tabs]    
    )

    const onDeleteTab = (index) => {
        setTabs((prev) => {
            return prev.filter((tab, idx) => idx !== index);
        });
    }

    return (
        <div>
            <div className="tab-header">
                {
                    tabs.map((tab, idx)=>(
                        <TabTitle 
                            key={idx}
                            title={tab.title}
                            isActive={activeTab === idx ? true : false}
                            onClick={
                                () => {
                                    setActiveTab(idx);
                                }
                            }
                            onDelete={()=>{onDeleteTab(idx)}}
                        />
                    ))
                }
                <button
                    onClick={
                        ()=>{
                            setTabs([
                                ...tabs,
                                {
                                    title : 'newTabs',
                                    content : 'newTabs-content' 
                                }                    
                            ])
                        }
                    }
                >
                    +
                </button>
            </div>
            <div className="tab-body">
                {
                    tabs.map((tab, idx)=>(
                        <TabContent
                            key={idx}
                            isActive={activeTab === idx ? true : false}
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