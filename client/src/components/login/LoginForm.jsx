import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import axios from "axios";

const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [redirect, setRedirect] = useState(false);
    const { setUserInfo } = useContext(UserContext);

    async function handleSubmit(ev) {
        ev.preventDefault();
        try {
            const { data } = await axios.post(
                "http://localhost:4000/login",
                { username, password },
                { withCredentials: true }
            );
            setUserInfo(data);
            setRedirect(true);
        } catch (error) {
            console.log(error);
            setError(error.response?.data?.message || "Error desconocido");
        }
    }

    function handleUsernameChange(ev) {
        setUsername(ev.target.value);
        setError(null);
    }

    function handlePasswordChange(ev) {
        setPassword(ev.target.value);
        setError(null);
    }

    if (redirect) {
        return <Navigate to={"/"} />;
    }

    return (
        <div className='main-container login-form d-flex flex-column justify-content-center' >
            <div className="card p-5">
                <form className="mt-5" onSubmit={handleSubmit}>
                    <h3>Inicio de Sesión</h3>

                    <label htmlFor="username" className="form-label">Usuario</label>
                    <input type="text" className="form-control" id="username" name="username" value={username} onChange={handleUsernameChange} required />

                    <label htmlFor="password" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="password" name="password" value={password} onChange={handlePasswordChange} required />
                    {error && <p className="text-danger">{error}</p>}

                    <button type="submit" className="btn btn-secondary mt-4">Iniciar Sesión</button>

                </form>
            </div>
        </div>
    );
};

export default LoginForm;
