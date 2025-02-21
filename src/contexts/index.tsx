"use client";
import { createContext,useState,useContext } from "react";

type IAppContext={
    darkTheme:boolean,
    metric:boolean,

    changeMetric:Function,
    changeTheme:Function
}
// const themes = {"light":false,"dark":true};
// const metrics = {"international":false,"imperial":true};


const AppContext = createContext<IAppContext>({
                                                darkTheme:false,
                                                metric:true,
                                                changeTheme:()=>{},
                                                changeMetric:()=>{}});



export function AppWrapper({children}:{
    children:React.ReactNode;
}){
    const [darkTheme,setDarkTheme] = useState<boolean>(false);
    const [metric,setMetric] = useState<boolean>(true);
    
    function changeTheme(){
        setDarkTheme(!darkTheme);
        // console.log(theme);

    }

    function changeMetric(){
        setMetric(!metric);
        console.log(metric);
    }

    return(
        <AppContext.Provider value={{darkTheme,metric,changeMetric,changeTheme}}>
            {children}
        </AppContext.Provider>
    )
}


export function useAppContext(){
    return useContext(AppContext);
}