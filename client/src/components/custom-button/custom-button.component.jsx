import React from "react";

import { CustomButtonContainer } from "./custom-button.styles";

const CustomButon = ({children, ...props}) => (
    <CustomButtonContainer { ...props }>
        {children}
    </CustomButtonContainer>
)

export default CustomButon;