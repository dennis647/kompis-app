import React, { useState } from "react";
import { loginUser } from "../data/userService";

interface LoginProps {
    onLogin: (email: string, password: string) => void | Promise<void>;
    onRegister: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin, onRegister }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState(false); // new state

    const handleLogin = async () => {
        const user = await loginUser(email, password);
        if (user) {
            setLoginError(false);  // hide error if login successful
            onLogin(email, password);
        } else {
            setLoginError(true);  // show error message
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleLogin();
    };

    return (
        <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded shadow">
            <h2 className="text-xl font-bold mb-4">Logg inn</h2>
            <form onSubmit={handleSubmit}>
                <input
                    className="w-full p-2 border rounded mb-2"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    className="w-full p-2 border rounded mb-4"
                    placeholder="Passord"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {/* Conditionally show error message */}
                <h2
                    className="text-red-500 text-sm mb-4 text-center"
                    style={{ display: loginError ? 'block' : 'none' }}
                >
                    Feil passord eller e-post. Prøv igjen.
                </h2>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded"
                >
                    Logg inn
                </button>
            </form>
            <button
                onClick={onRegister}
                className="w-full text-blue-600 mt-2"
            >
                Registrer ny bruker
            </button>
        </div>
    );
};

export default Login;
