import React from "react"
import ReactDom from "react-dom"
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./store"
import App from "./App"
import './styles/base.scss'

const appp = 
<Provider store={store}>
<BrowserRouter >
<App />
</BrowserRouter>
</Provider>

ReactDom.render (
appp,document.getElementById('reactroot')
)