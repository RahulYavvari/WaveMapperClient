import React from "react";

function Footer() {
    const currentYear = new Date().getFullYear().toString();
    return (
        <footer>
            <p className="footer">&copy; Copyright {currentYear} Rahul Yavvari</p>
        </footer>
    );
}

export default Footer;