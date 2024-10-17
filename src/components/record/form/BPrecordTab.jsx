import { useState } from 'react';
import TabTitle from '../../global/tab/TabTitle';
import TabContent from '../../global/tab/TabContent';
import '../../global/tab/Tab.css';
import BPrecordForm from './BPrecordForm';

const BPrecordTab = () => {
    const [pressures, setPressures] = useState([
        {
            systolic : '',
            diastolic : ''
        },
        {
            systolic : '',
            diastolic : ''
        }
    ]);

    const updatePressure = (pressure, index) => {
        console.log(pressure, index);
        let newPressures = pressures.map((p, i) => i === index ? pressure : p);
        setPressures(newPressures);
    }

    const [tabInfo, setTabInfo] = useState(
        {
            activeTab : 0,
            tabs : [
                ...pressures.map(
                    (pressure, index) => (
                        <BPrecordForm
                            key={index}
                            id={index}
                            pressure={pressure}
                            onUpdate={(newPressure)=>{
                                updatePressure(newPressure, index)
                            }}
                        />
                    )
                )
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
                            title={`${idx+1}차 측정`}
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
                            {tab}
                        </TabContent>    
                    ))
                }
            </div>
        </div>
    );
}

export default BPrecordTab;