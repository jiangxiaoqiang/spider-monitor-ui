/**
 * Created by dolphin on 12/7/2017.
 */
import React from 'react';

export const User = (props) => {
    console.log("user name:",props.username);
    return (
        <div>
            <div className="row">
                <div className="col-xs-12">
                    <h1>The User Page</h1>
                </div>
            </div>
            <div className="row">
                <div>
                    <p>User Name:{props.username}</p>
                    <p>User Name:sss</p>
                </div>
            </div>
        </div>
    );
}