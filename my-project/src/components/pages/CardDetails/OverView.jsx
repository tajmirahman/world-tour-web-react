import React from 'react';

const OverView = () => {
    return (
        <div className='space-y-2 '>
            <div className=" bg-white shadow-md rounded-xl p-6 space-y-2 mt-2">
                <h2 className="text-lg font-semibold text-gray-800">Over View</h2>

                <div className="border-t border-purple-600 w-16"></div>

                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore dolorum quo quam ipsa cupiditate iusto natus inventore nemo eligendi suscipit quisquam, tempora alias blanditiis perferendis porro rem laborum. Exercitationem, excepturi?</p>
                <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
                    <li>Buffet breakfast as per the itinerary</li>
                    <li>Visit eight villages showcasing Polynesian culture</li>
                    <li>Complimentary Camel safari, Bonfire</li>
                    <li>All toll tax, parking, fuel, and driver allowances</li>
                    <li>Comfortable and hygienic vehicle</li>
                </ul>
            </div>

            {/* // section Itinerary start */}

            <div className=" bg-white shadow-md rounded-xl p-6 space-y-2">

                <div>
                    <span>1.Stet clita kasd gubergren, no sea takimata sanctus est</span>

                    <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
                        <li>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</li>
                        <li>Contrary to popular belief, Lorem Ipsum is not simply random</li>
                        <li>Many desktop publishing packages and web page editors now use</li>

                    </ul>
                </div>
                <div>
                    <span>2.
                        Stet clita kasd gubergren, no sea takimata sanctus est</span>

                    <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
                        <li>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</li>
                        <li>Contrary to popular belief, Lorem Ipsum is not simply random</li>
                        <li>Many desktop publishing packages and web page editors now use</li>

                    </ul>
                </div>
                <div>
                    <span>3.
                        Stet clita kasd gubergren, no sea takimata sanctus est</span>

                    <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
                        <li>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</li>
                        <li>Contrary to popular belief, Lorem Ipsum is not simply random</li>
                        <li>Many desktop publishing packages and web page editors now use</li>

                    </ul>
                </div>
            </div>
            {/* // section Itinerary end */}
        </div>
    );
};

export default OverView;