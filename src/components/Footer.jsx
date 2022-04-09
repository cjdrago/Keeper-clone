import React from "react";
import Avatar from '@mui/material/Avatar';


function Footer(){
    const currentYear = new Date().getFullYear();
    
    return (<footer>
                <p>
                    Cristobal Drago  {currentYear}
                </p>
            </footer>
)};

export default Footer;
