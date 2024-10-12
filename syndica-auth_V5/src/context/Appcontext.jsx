import { createContext, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token') || sessionStorage.getItem('token'))
    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem('user_info') || sessionStorage.getItem('user_info');
        return storedUser ? JSON.parse(storedUser) : null;
    });
    
    return (
        <>
            <AppContext.Provider 
                value={{
                    token,
                    setToken,
                    user, 
                    setUser
                }}
            >
                { children }
            </AppContext.Provider >
        </>
    )
}

export default AppProvider