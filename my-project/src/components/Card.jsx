import { FaMapMarkerAlt } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Card = ({ hotel }) => {

    // console.log(hotel)

     const {id,cost,title,location,image,rating}=hotel || {};

    return (
        <div className=" rounded-2xl shadow-md overflow-hidden border border-base-200">
            <div className="relative">
                <img
                    src={image}
                    alt="Kantua hotel"
                    className="w-full h-48 object-cover"
                />
                <span className="absolute top-2 right-2 bg-white text-purple-600 text-sm font-bold px-2 py-1 rounded-full">
                    50%
                </span>
                <div className="absolute bottom-2 left-2 text-white flex items-center gap-1">
                    <FaMapMarkerAlt className="text-white" />
                 <span className="text-sm">{title}</span>
                </div>
            </div>

            <div className="p-4">
                <NavLink to={`/tour/details/${id}`}><h2 className="text-lg font-semibold text-gray-800">
                    {location}
                </h2></NavLink>
                <p className="text-sm text-gray-600">
                    <span className="text-purple-600 font-medium">{rating}</span>{" "}
                     <span className="text-gray-400">(1214 reviews)</span>
                    
                </p>
                <p className="text-xl font-bold text-purple-700 mt-2">
                    $99.00 <span className="text-sm font-normal text-gray-600">{cost}</span>
                </p>
            </div>
        </div>
    );
};

export default Card;

