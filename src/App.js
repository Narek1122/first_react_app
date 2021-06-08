import './App.css';
import Login from "./Componets/Login";
import {useDispatch, useSelector} from "react-redux";
import {selectName, editName} from "./features/currentUser/currentUserSlice"
import {selectPost, editPost} from "./features/posts/postSlice"
import {selectTest, editTest} from "./features/test/testSlice"
import axios from "axios";
import React, {useState, useEffect} from 'react';
import {BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import Home from "./Pages/Home";
import LoginPage from "./Pages/Login";
import SignUpPage from "./Pages/Sugnup";
import Profile from "./Pages/Profile"
import { GuardProvider, GuardedRoute } from 'react-router-guards';
import Test from './Componets/Login'

function App() {

    const token = localStorage.getItem('token')







    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos/1')
            .then((res) => {
                //dispatch(editTest(res.data))
                console.log(res.data)
            })


    }, []);

    const data = useSelector(selectTest)

    function edit() {
        let math = Math.floor(Math.random() * 20)
        math = math != 0 ? math : 1
        axios.get(`https://jsonplaceholder.typicode.com/todos/${math}`)
            .then((res) => {
                dispatch(editTest(res.data))

            })

    }

    const dispatch = useDispatch()


    return (
        <BrowserRouter>
            <GuardProvider  >
                <Switch>
                    <GuardedRoute path="/" exact component={Home} meta={{ auth: false }}/>
                    <GuardedRoute path="/login" exact component={LoginPage} meta={{ auth: false }}/>
                    <GuardedRoute path="/signup" exact component={SignUpPage}  meta={{ auth: false }}/>
                    <GuardedRoute path="/profile" exact component={Profile} meta={{ auth: false }} />


                </Switch>
            </GuardProvider>
        </BrowserRouter>
    );
}

export default App;
