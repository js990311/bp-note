import { act, createContext, useState } from "react";

const mockData = [
    {
        id: 1, 
        date: '2024-11-02', 
        am : {
            time : '10:33',
            pressures : [
                {
                    systolic : 120.0,
                    diastolic: 12        
                },
                {
                    systolic : 120.0,
                    diastolic: 12        
                }
            ]
        },
        pm : { 
            time : '11:12',
            pressures : [
                {
                    systolic : 120.0,
                    diastolic: 12        
                },
                {
                    systolic : 120.0,
                    diastolic: 12        
                }
            ]
        }
    },
    {
        id: 2, 
        date: '2024-11-03', 
        am : {
            time : '11:13',
            pressures : [
                {
                    systolic : 120.0,
                    diastolic: 12        
                },
                {
                    systolic : 120.0,
                    diastolic: 12        
                }
            ]
        },
        pm : { 
            time : '23:12',
            pressures : [
                {
                    systolic : 120.0,
                    diastolic: 12        
                },
                {
                    systolic : 120.0,
                    diastolic: 12        
                }
            ]
        }
    }
];

export const RecordsContext = createContext();

export const RecordsProvider = ({children}) => {
    const [datas, setDatas] = useState(mockData);

    const addData = (newData, action) => {
        console.log('addData');
        let target = null;
        let alter = [];
        for(let data of datas){
            if(data.date === action.date){
                target = data;
            }else{
                alter.push(data);
            }
        }
        
        if(target !== null){
            // target이 있으면 새로 안넣기 
            if(action.am){
                target.am = newData;
            }else{
                target.pm = newData;
            }

            setDatas([
                ...alter,
                target
            ])
        }else{
            // target이 없으면 새로 넣기 
            let newRecord = {
                id: 123,
                date: action.date, 
                am : {time:''},
                pm : {time:''}
            };

            if(action.am){
                newRecord.am = newData;
            }else{
                newRecord.pm = newData;
            }

            setDatas([
                ...alter,
                newRecord
            ]);    
        }
    }

    return (
        <RecordsContext.Provider
            value={{
                datas: datas,
                addData: addData
            }}
        >
            {children}
        </RecordsContext.Provider>
    )
}

