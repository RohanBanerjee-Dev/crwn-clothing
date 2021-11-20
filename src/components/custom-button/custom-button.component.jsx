import React from "react";

import './custom-button.styles.scss';

const CustomButon = ({ children, isGoogleSignIn, ...otherprops }) => (
    <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherprops}>
        {children}
    </button>
)

export default CustomButon;