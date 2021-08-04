import React, { useState } from "react";
import { MdInsertEmoticon } from "react-icons/md";
import { Link, Route, Switch } from "react-router-dom";
import Feed from "./components/Feed";
import SignInForm from "./components/SignIn/SignInForm";
import SignInOut from "./components/SignIn/SignInOut";
import SignUpForm from "./components/SignIn/SignUpForm";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [currentUser, setCurrentUser] = useState<string>("");

    const signOut = (event: React.MouseEvent<HTMLButtonElement>) => {
        setIsLoggedIn(false);
    }

    const signIn = (creds: boolean, username: string) => {
        setIsLoggedIn(creds);
        if (isLoggedIn) setCurrentUser(username);
    }

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
                        <Feed currentUser={currentUser} />
                    </Route>
                    <Route path="/signIn">
                        <SignInForm signIn={signIn} />
                    </Route>
                    <Route path="/signOut">
                        <div className="form-container">
                            <button className="btn" onClick={signOut}>
                                Sign Out
                            </button>
                        </div>
                    </Route>
                    <Route path="/signUp">
                        <SignUpForm />
                    </Route>
                </Switch>
            </div>
        </div>
    );
}

export default App;
