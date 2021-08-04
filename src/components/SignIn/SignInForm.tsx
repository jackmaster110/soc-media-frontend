import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function SignInForm() {
    const [formUsername, setFormUsername] = useState<string>();
    const [formPassword, setFormPassword] = useState<string>();

    const onUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormUsername(event.currentTarget.value);
    };

    const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormPassword(event.currentTarget.value);
    };

    const submitForm = (event: React.MouseEvent<HTMLInputElement>) => {
        axios.get(process.env.BACKEND_URL + "/api/get-")
    };

    return (
        <div className="form-container">
            <form className="sign-in-form">
                <input
                    className="form-username"
                    type="text"
                    placeholder="Username"
                    onChange={onUsernameChange}
                />
                <input
                    className="form-password"
                    type="password"
                    placeholder="Password"
                    onChange={onPasswordChange}
                />
                <input className="form-submit" type="submit" onClick={submitForm} />
                <footer>
                    <span>
                        <Link to="/signUp">Click here to sign up</Link>
                    </span>
                </footer>
            </form>
        </div>
    );
}

export default SignInForm;
