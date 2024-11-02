import { Children, createContext } from "react";

const mockData = [
    {
        id: 1, 
        date: '2024-11-02', 
        am : {
            time : '10:33',
            systolic : 120.0,
            diastolic: 12
        },
        pm : { 
            time : '11:12',
            systolic : 120.0,
            diastolic: 12
        }
    },
    {
        id: 2, 
        date: '2024-11-03', 
        am : {
            time : '11:13',
            systolic : 120.0,
            diastolic: 12
        },
        pm : { 
            time : '23:12',
            systolic : 120.0,
            diastolic: 12
        }
    }
];

export const RecordsContext = createContext();

export const RecordsProvider = ({children}) => {
    return (
        <RecordsContext.Provider
            value={{
                datas: mockData
            }}
        >
            {children}
        </RecordsContext.Provider>
    )
}

