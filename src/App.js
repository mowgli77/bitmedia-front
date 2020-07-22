import React from 'react';
import './App.css';
import UsersList from "./components/UsersList";
import MainPage from "./components/MainPage";
import NotFound from "./components/NotFound";
import UsersPage from "./components/UsersPage";
import {Route, Switch} from "react-router-dom";

const App = () => {

    return (
        <div>
            <Switch>
                <Route exact path={'/'}
                       render={() => <MainPage/>}/>
                <Route exact path={'/users'}
                       render={() => <UsersList />}/>
                <Route path={'/users/statistics/:userId'}
                       render={() => <UsersPage />}/>
                <Route path={'*'}
                       render={() => <NotFound/>}/>
            </Switch>
        </div>
    );
}

export default App
