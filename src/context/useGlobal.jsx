import { useContext } from "react";
import { Globalcontext } from "./GlobalContext";

export const useGlobalContext = () => {
    const context = useContext(Globalcontext);
    if (!context) {
        throw new Error("useGlobalContext must be used within a GlobalContextProvider");
    }
    return context;
};
