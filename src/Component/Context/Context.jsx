import { createContext , useState } from "react";
export const AuthContext = createContext();
export const AuthContextProvider = ({children})=>{
    const [currentUser , setCurrentUSer] = useState(false)
    const handler = ()=>{
        console.log("helo");
        setCurrentUSer(true)
    }
    const handlers = ()=>{
        console.log("helo");
        setCurrentUSer(false)
    }
    return <AuthContext.Provider value={{currentUser , handler  , handlers}}>{children}</AuthContext.Provider>
}