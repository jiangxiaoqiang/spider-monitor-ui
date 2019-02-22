/**
 * Created by dolphin on 12/7/2017.
 */
import React from 'react';
import {connect} from 'react-redux';

export const Main = (props) => {
    return (
        <div>
            <div>
                <div>
                    <h1>The Main Page</h1>
                </div>
            </div>
            <div>
                <div>
                    <button onClick={() => props.changeUsername('Anna')}>Change the Username</button>
                </div>
            </div>
        </div>
    );
}