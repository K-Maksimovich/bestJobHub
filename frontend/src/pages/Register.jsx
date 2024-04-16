import {useState, useEffect} from "react";

export const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errMessage, setErrMessage] = useState('');

    const onSendData = () => {
        setErrMessage('')
        console.log(username);
        console.log(password);
        if (username === '' || password === '') {
            return setErrMessage('Please fill all the fields');
        }
    }

    return (
        <>
            <div className="container">
                <div className="auth-form">
                    <h1>Register</h1>
                    <input type="text" onChange={(e) => setUsername(e.target.value)} placeholder={"Enter your username"}/> <br/>
                    <input type="text" onChange={(e) => setPassword(e.target.value)} placeholder={"Enter your password"}/> <br/>
                    <button type={"submit"} onClick={onSendData}>Send</button>
                    {errMessage && <p className={"errMess"}>{errMessage}</p>}
                </div>
            </div>
        </>
    )
}