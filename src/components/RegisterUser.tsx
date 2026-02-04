// src/components/RegisterUser.tsx
import React, { useState } from "react";
import { addUser } from "../data/userService";


interface RegisterUserProps {
    backToLogin: () => void;
    onMissions: () => void;
}

const RegisterUser: React.FC<RegisterUserProps> = ({ backToLogin, onMissions }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [location, setLocation] = useState("");


    const handleRegister = async () => {
        try {
            const newUser: {
                name: string;
                email: string;
                password: string;
                location: string;
                rating: number;
                completedJobs: number
            } = {
                name,
                email,
                password,
                location,
                rating: 0,
                completedJobs: 0,
            };

            const id = await addUser(newUser);
            alert(`Bruker registrert: ${name}`);
            console.log("User registered:", id);

        } catch (error) {
            console.error("Error registering user:", error);
            alert("Failed to register user. Please try again.");
        }
    };

    return (
        <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded shadow">
            <h2 className="text-xl w-max font-bold mb-4">Register</h2>
            <input
                className="w-full p-2 border rounded mb-2"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                className="w-full p-2 border rounded mb-2"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                className="w-full p-2 border rounded mb-2"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <input
                className="w-full p-2 border rounded mb-4"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
            />
            <button
                onClick={async () => { await handleRegister(); onMissions(); }}
                disabled={!name || !email}
                className="w-full bg-blue-600 text-white py-2 rounded disabled:opacity-50"
            >
                Register
            </button>
            <button
                onClick={(backToLogin)}
                className="w-full text-gray-600 py-2 mt-4 rounded underline"
            >
                Back to Login
            </button>
        </div>
    );
};

export default RegisterUser;


