
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
const Footer = () => {
    return (
        <footer className="bg-white text-gray-800 px-10 py-16 border-t">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
                {/* Help Section */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">Need any help?</h2>
                    <div className="border-l-4 border-purple-600 pl-4 mb-6">
                        <p className="text-sm">Call 24/7 for any help</p>
                        <p className="text-2xl font-bold text-purple-600">+88 1314 7612 77</p>
                    </div>
                    <div className="border-l-4 border-purple-600 pl-4 mb-6 ">
                        <p className="text-sm">Mail to our support team</p>
                        <p className=" font-semibold  text-purple-600">tajmilurrahman91@gmail.com</p>
                    </div>
                    <div className="border-l-4 border-purple-600 pl-4">
                        <p className="text-sm mb-2">Follow us on</p>
                        <div className="flex gap-3 text-purple-600 text-xl">
                            <FaFacebookF />
                            <FaTwitter />
                            <FaInstagram />
                            <FaLinkedinIn />
                        </div>
                    </div>
                </div>

                {/* Company */}
                <div>
                    <h3 className="text-xl font-semibold border-b-2 border-purple-600 mb-4 inline-block">Company</h3>
                    <ul className="space-y-2">
                        <li>About Us</li>
                        <li>Testimonials</li>
                        <li>Rewards</li>
                        <li>Work with Us</li>
                        <li>Meet the Team</li>
                        <li>Blog</li>
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h3 className="text-xl font-semibold border-b-2 border-purple-600 mb-4 inline-block">Support</h3>
                    <ul className="space-y-2">
                        <li>Account</li>
                        <li>Faq</li>
                        <li>Legal</li>
                        <li>Contact</li>
                        <li>Affiliate Program</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                {/* Other Services */}
                <div>
                    <h3 className="text-xl font-semibold border-b-2 border-purple-600 mb-4 inline-block">Other Services</h3>
                    <ul className="space-y-2">
                        <li>Community program</li>
                        <li>Investor Relations</li>
                        <li>Rewards Program</li>
                        <li>PointsPLUS</li>
                        <li>Partners</li>
                        <li>List My Hotel</li>
                    </ul>
                </div>

                {/* Top Cities */}
                <div>
                    <h3 className="text-xl font-semibold border-b-2 border-purple-600 mb-4 inline-block">Top cities</h3>
                    <ul className="space-y-2">
                        <li>Chicago</li>
                        <li>New York</li>
                        <li>San Francisco</li>
                        <li>California</li>
                        <li>Ohio</li>
                        <li>Alaska</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;