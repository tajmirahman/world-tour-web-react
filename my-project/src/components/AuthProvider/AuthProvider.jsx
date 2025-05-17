import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../../Firebase/firebase.init";

// eslint-disable-next-line react-refresh/only-export-components
export const authContext = createContext();

const AuthProvider = ({ children }) => {

    const auth=getAuth(app);

    const createSignUp=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

  ;

    const authInfo = {
        createSignUp
    }


    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;