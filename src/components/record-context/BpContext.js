import { createContext } from "react";

const mockData = [
    {
        id: 1, 
        date: 123, 
        am : {
            time : '',
            systolic : 120.0,
            diastolic: 12
        },
        pm : { 
            time : '',
            systolic : 120.0,
            diastolic: 12
        }
    },
    {
        id: 2, 
        date: 123, 
        am : {
            time : '',
            systolic : 120.0,
            diastolic: 12
        },
        pm : { 
            time : '',
            systolic : 120.0,
            diastolic: 12
        }
    }
];

const bpRecord = createContext();

