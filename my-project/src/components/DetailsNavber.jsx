
import { Link, useLocation } from 'react-router-dom';

const DetailsNavber = () => {

    const location = useLocation();

    // Split and filter path segments
    const pathSegments = location.pathname.split('/').filter(Boolean);

    // Combine relevant segments for the title (e.g., "tour/details" => "Tour Details")
    
    let formattedTitle = '';
    if (pathSegments.length >= 2) {
        formattedTitle = `${pathSegments[0]} ${pathSegments[1]}`;
    } else if (pathSegments.length === 1) {
        formattedTitle = pathSegments[0];
    } else {
        formattedTitle = 'Home';
    }

    // Capitalize each word
    formattedTitle = formattedTitle
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    return (
        <div className='text-center space-y-4 mt-10'>
            <h1 className='text-white text-5xl font-bold'>{formattedTitle}</h1>
            <div className='flex justify-center items-center text-white font-semibold text-xl gap-4'>
                <Link to={'/'}><h2>Home</h2></Link>
                <li>{formattedTitle}</li>
            </div>
        </div>
    );
};

export default DetailsNavber;