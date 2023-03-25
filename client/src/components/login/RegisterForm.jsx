import { useState } from "react";
import axios from "axios";

const RegisterForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleRegister = async (ev) => {
        ev.preventDefault();
        if (!username || !password) {
            setError("Please enter a username and password");
            return;
        }
        try {
            const response = await axios.post("http://localhost:4000/register", {
                username,
                password,
            });
            if (response.status === 200) {
                alert("Registration successful!");
            } else {
                setError("Registration failed");
            }
        } catch (error) {
            setError(error.response.data.message);
        }
    };

    return (
        <div className="main-container login-form d-flex flex-column justify-content-center">
            <div className="card p-4">
                <h1>Register</h1>
                <form className="register" onSubmit={handleRegister}>
                    {error && <div className="error">{error}</div>}
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        className="form-control"
                        onChange={(ev) => setUsername(ev.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        className="form-control"
                        onChange={(ev) => setPassword(ev.target.value)}
                    />
                    <button className="btn btn-secondary mt-4">Register</button>
                </form>
            </div>
        </div>
    );
};

export default RegisterForm;

