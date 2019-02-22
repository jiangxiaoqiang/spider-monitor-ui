import React from 'react';
import ReactDOM from "react-dom";
import store from "./store";
import routes from "./routes/routes";
import {Provider} from "react-redux";

ReactDOM.render(
    <Provider store={store}>{routes}</Provider>
    , document.getElementById('root')
);