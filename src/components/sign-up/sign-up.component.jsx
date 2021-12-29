import React, { useState } from "react";
import { connect } from "react-redux";

import FormInput from "../form-input/form-input.component";
import CustomButon from "../custom-button/custom-button.component";

import { singUpStart } from "../../redux/user/user.actions";

import { SignUpContainer, SignUpTitle } from './sign-up.styles';

const SignUp = ({ singUpStart }) => {
    const [userCredentials, setCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const { displayName, email, password, confirmPassword } = userCredentials;

    const handleSubmit = async e => {
        e.preventDefault();

        if(password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }

        singUpStart({ displayName, email, password })
    }

    const handleChange = e => {
        const { name, value } = e.target;

        setCredentials({ ...userCredentials, [name] : value })
    }

    return (
        <SignUpContainer>
            <SignUpTitle>I do no have an account</SignUpTitle>
            <span>Sign up with your email and password</span>

            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange = {handleChange}
                    label='Display Name'
                    required
                />
                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange = {handleChange}
                    label='Email'
                    required
                />
                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange = {handleChange}
                    label='Password'
                    required
                />
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange = {handleChange}
                    label='Confirm Password'
                    required
                />
                <CustomButon type='submit'>SIGN UP</CustomButon>
            </form>
        </SignUpContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    singUpStart: userCredentials => dispatch(singUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp);