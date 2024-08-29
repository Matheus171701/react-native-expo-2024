import { createContext, useContext, useEffect } from "react";

const AuthContext = createContext({})

export function AuthProvider({ children }) {
    const [user, setUser] = useState({});

    const signIn = ({ email, password }) => {
        if (email === "super@email.com" && password === "super123!") {
        setUser({ id: 1, name: 'Super', email, role: "SUPER" });
    }
    
    const signIn = ({ email, password }) => {
        if (email === "adm@email.com" && password === "Adm123!") {
        setUser({ id: 2, name: 'Adm', email, role: "ADM" });
    }

    const signIn = ({ email, password }) => {
        if (email === "user@email.com" && password === "user123!") {
        setUser({ id: 3, name: 'User', email, role: "USER" });
    }
    //setUser({ id: 1, name: 'usuário 1', email });
    };
    const signOut = () => {
        setUser({});
    };


    useEffect(()=>{
        console.log ('AuthProvider: ', user);
    }, [user]);
    return (
        <AuthContext.Provider value={{user, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}