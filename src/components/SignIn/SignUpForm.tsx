import axios from "axios";
import { nanoid } from "nanoid";
import React, { useState } from "react";

function SignUpForm() {
    const [formUsername, setFormUsername] = useState<string>("");
    const [formPassword, setFormPassword] = useState<string>("");

    const updateUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormUsername(event.currentTarget.value);
    }

    const updatePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormPassword(event.currentTarget.value);
    }

    const submit = (event: React.MouseEvent<HTMLInputElement>) => {
        const newUser = {
            nanoid: nanoid(),
            name: formUsername,
            username: formUsername,
            password: formPassword
        }
        axios.post(process.env.REACT_APP_BACKEND_URL + "/api/add-user", JSON.stringify(newUser))
            .then((res) => {
                console.log(res.data);
            });
    }

    return(
        <div className="form-container">
            <form className="sign-up-form">
                <input type="text" placeholder="Username..." onChange={updateUsername} />
                <input type="password" placeholder="Password..." onChange={updatePassword} />
                <input type="submit" className="btn btn-primary" onClick={submit} />
            </form>
        </div>
    );
}

export default SignUpForm;