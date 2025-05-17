import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../../Firebase/firebase.init";

// eslint-disable-next-line react-refresh/only-export-components
export const authContext = createContext();

const AuthProvider = ({ children }) => {

    const auth=getAuth(app);

    const handleRegisterFrom=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }

  ;

    const authInfo = {
        handleRegisterFrom
    }


    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;