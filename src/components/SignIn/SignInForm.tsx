import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

type SignInFormProps = {
    signIn: (signedIn: boolean, user: string) => void;
};

function SignInForm(props: SignInFormProps) {
    const [formUsername, setFormUsername] = useState<string>("");
    const [formPassword, setFormPassword] = useState<string>("");

    const onUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormUsername(event.currentTarget.value);
    };

    const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormPassword(event.currentTarget.value);
    };

    const submitForm = (event: React.MouseEvent<HTMLInputElement>) => {
        axios
            .get(process.env.REACT_APP_BACKEND_URL + "/api/get-users")
            .then((res) => {
                const data = res.data;
                console.log(data);
                data.forEach((item: any) => {
                    const password = item.password;
                    const username = item.username;
                    console.log(username + " " + formUsername);
                    console.log(formPassword === password && formUsername === username);
                    props.signIn(
                        formPassword === password && formUsername === username,
                        username
                    );
                });
            });
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
                <input
                    className="form-submit"
                    type="submit"
                    onClick={submitForm}
                />
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
