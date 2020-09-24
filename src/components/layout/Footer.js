import React from "react";
import {Link} from "react-router-dom";

function Footer() {
    return (
        <footer style={footerStyle}>
            <h4>Created with love by<Link style={linkStyle} to="/About"> Bui Nam</Link></h4>
        </footer>
    )
}


const footerStyle = {
    background: "#333",
    color: "#fff",
    textAlign: "center",
    padding: "10px"
}

const linkStyle = {
    color: "red"
}

export default Footer;