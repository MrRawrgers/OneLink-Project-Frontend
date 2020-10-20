import React from 'react';
import '../App.css';

const LogOut = ({ handleLogOut }) => {
    return (
        <button className="button" onClick={() => handleLogOut()} >Log Out!</button >
    )
}

export default LogOut;