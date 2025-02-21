"use client";
import { createContext,useState,useContext } from "react";

type IAppContext={
    theme:boolean,
    metric:boolean,

    changeMetric:Function,
    changeTheme:Function
}
const themes = {"light":true,"dark":false};
const metrics = {"international":true,"imperial":false};


const AppContext = createContext<IAppContext>({
                                                theme:themes['light'], 
                                                metric:metrics['international'],
                                                changeTheme:()=>{},
                                                changeMetric:()=>{}});



export function AppWrapper({children}:{
    children:React.ReactNode;
}){
    const [theme,setTheme] = useState<boolean>(themes['light']);
    const [metric,setMetric] = useState<boolean>(metrics['international'])
    
    function changeTheme(){
        setTheme(!theme);
        console.log(theme);

    }

    function changeMetric(){
        setMetric(!metric);
        console.log(metric);
    }

    return(
        <AppContext.Provider value={{theme,metric,changeMetric,changeTheme}}>
            {children}
        </AppContext.Provider>
    )
}


export function useAppContext(){
    return useContext(AppContext);
}