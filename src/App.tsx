import React, { useState } from "react";
import { MdInsertEmoticon } from "react-icons/md";
import { Link, Route, Switch } from "react-router-dom";
import SignInForm from "./components/SignIn/SignInForm";
import SignInOut from "./components/SignIn/SignInOut";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    return (
        <div className="app-container">
            <header className="app-header">
                <Link className="heading-link" to="/">
                    <h1>Soc Media</h1>
                </Link>
                <div className="sub-header">
                    <SignInOut isSignedIn={isLoggedIn} />
                    <MdInsertEmoticon className="icon header-icon smile-icon" />
                </div>
            </header>
            <div className="content">
                <Switch>
                    <Route exact path="/">
                        <p>Test</p>
                    </Route>
                    <Route path="/signIn">
                        <SignInForm />
                    </Route>
                </Switch>
            </div>
        </div>
    );
}

export default App;
