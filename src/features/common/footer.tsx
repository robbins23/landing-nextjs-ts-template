import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
    return (
        <div>
            <div className="bg-base-300 flex justify-center">
                <footer className="footer pt-10 pb-24 px-4 max-w-5xl text-base-content">
                    <div>
                        <p className="font-bold text-2xl">Space AI<br /></p>
                    </div>
                    <div>
                        <span className="footer-title">Information</span>
                        <Link href="/about-us" className="link link-hover">About Us</Link>
                        <Link href="/faqs" className="link link-hover">FAQs</Link>
                    </div>
                    <div>
                        <span className="footer-title">Legal</span>
                        <Link href="/privacy-policy" className="link link-hover">Privacy Policy</Link>
                        <Link href="/terms-and-conditions" className="link link-hover">Terms and Conditions</Link>
                    </div>
                    <div>
                        <span className="footer-title">Social</span>
                        <div className="grid grid-flow-col gap-4">
                            {/* Social media icons can be added here */}
                        </div>
                    </div>
                </footer>
            </div>
            <div className="p-4 flex justify-center bg-primary text-neutral-content">
                <div className="max-w-5xl">
                    <p>Copyright © 2023 - All right reserved</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
