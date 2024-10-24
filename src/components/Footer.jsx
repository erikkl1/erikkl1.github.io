import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="mt-12 py-4 border-t">
            <div className="container mx-auto text-center">
                <Link to="/impressum" className="text-black hover:text-gray-600">Impressum / Datenschutzerklärung</Link>
            </div>
        </footer>
    );
};

export default Footer;