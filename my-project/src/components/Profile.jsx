import { useContext } from "react";
import { authContext } from "./AuthProvider/AuthProvider";
import Header from "./Mainlayout/Header/Header";


const Profile = () => {

    const {user}=useContext(authContext);

    return (
       <div>
        <div>
            <Header></Header>
        </div>
         <div className="p-3 border-2 border-gray-300 w-2/6 mx-auto mt-16 space-y-3 ">

                <h1>Name:- {user?.displayName}</h1>
                <p>Email:- {user?.email}</p>
                <figure className="w-20 min-h-20 border-2 border-gray-300">
                    <img src={user?.photoURL} className="w-20 min-h-20 object-cover" alt="" />
                </figure>


        </div>
       </div>
    );
};

export default Profile;