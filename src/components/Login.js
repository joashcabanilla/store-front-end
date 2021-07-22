import React from 'react'
import '../style/login.css'

const login = () => {
    return (
        <div className="div-login">
            <input type="text" className="username" placeholder="Username" />
            <input type="password" className="password" placeholder="Password" />

            <button className="btnlogin">LOGIN</button>
        </div>
    )
}

export default login
