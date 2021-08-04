import React from "react";
import { Link } from "react-router-dom";

type SignInOutProps = {
    isSignedIn: boolean;
};

function SignInOut({ isSignedIn }: SignInOutProps) {
    var button;
    if (isSignedIn) {
        button = <button className="btn sign-btn sign-in-btn">Sign Out</button>;
    } else {
        button = <button className="btn sign-btn sign-out-btn">Sign In</button>;
    }

    return <Link to={isSignedIn ? "/signOut" : "/signIn"}>{button}</Link>;
}

export default SignInOut;
