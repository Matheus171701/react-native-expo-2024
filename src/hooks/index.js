import { Children } from "react";
import { FontProvider } from "./Font";
import { AuthProvider } from "./Auth";

export function AppProvider({ children }) {
    return 
    <FontProvider>
        <DataProvider>
        <AuthProvider>{children}</AuthProvider>
        </DataProvider>
    </FontProvider>;
}