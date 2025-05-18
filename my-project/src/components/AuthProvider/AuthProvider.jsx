import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../../Firebase/firebase.init";

// eslint-disable-next-line react-refresh/only-export-components
export const authContext = createContext();

const AuthProvider = ({ children }) => {

    const auth=getAuth(app);
    const [user,setUser]=useState(null);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const createSignUp=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser=(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile=(updateData)=>{
        return updateProfile(auth.currentUser,updateData)
    }

    const userGoogleLogin=()=>{
        return signInWithPopup(auth, googleProvider)
    }

    const userGithubLogin=()=>{
        return signInWithPopup(auth, githubProvider)
    }

    const userLogout=()=>{
        signOut(auth)
    }

    console.log(user);

    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
        })

        return ()=>{
            unsubscribe();
        }
    },[auth])

    const authInfo = {
        createSignUp,
        signInUser,
        userLogout,
        user,
        setUser,
        updateUserProfile,
        userGoogleLogin,
        userGithubLogin
    }


    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;