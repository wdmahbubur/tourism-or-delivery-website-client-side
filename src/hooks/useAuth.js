import { useContext } from "react";
import { AuthContext } from "../components/ContextApi/ContextProvider";

const useAuth = () => {
    return useContext(AuthContext);
};

export default useAuth;