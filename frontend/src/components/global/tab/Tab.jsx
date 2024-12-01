import { useEffect, useRef, useState } from 'react';
import TabTitle from './TabTitle';
import TabContent from './TabContent';
import './Tab.css';

const Tab = ({titles, children, onDelete, onCreate}) => {
    const [activeTab, setActiveTab] = useState(0);
    const lastAction = useRef('INIT');

    useEffect(
        () => {
            if(lastAction.current === 'DELETE'){
                if(activeTab === children.length){
                    setActiveTab(prev=>(prev-1));
                }
            }else if(lastAction.current === 'ADD'){
                setActiveTab(children.length-1);
            }
        }
        , [children]
    )

    const onDeleteTab = (index) => {
        lastAction.current = 'DELETE';
        onDelete(index);
    }

    const onActiveTab = (index) => {
        setActiveTab(index);
    }

    const onCreateTab = () => {
        lastAction.current = 'ADD';
        onCreate();
    }

    return (
        <div className='tab'>
            <div className="tab-header">
                {
                    titles.map((title, idx)=>(
                        <TabTitle 
                            key={idx}
                            title={title}
                            isActive={activeTab === idx ? true : false}
                            onActive={() => {onActiveTab(idx);}}
                            onDelete={()=>{onDeleteTab(idx)}}
                        />
                    ))
                }
                <button
                    onClick={
                        ()=>{
                            onCreateTab( 

                            );
                        }
                    }
                >
                    +
                </button>
            </div>
            <div className="tab-body">
                {
                    children.map((child, idx)=>(
                        <TabContent
                            key={idx}
                            isActive={activeTab === idx ? true : false}
                        >
                            {child}
                        </TabContent>    
                    ))
                }
            </div>
        </div>
    );
}

export default Tab;