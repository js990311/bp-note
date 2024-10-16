import { useRef, useState } from 'react';
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
                        />
                    ))
                }
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