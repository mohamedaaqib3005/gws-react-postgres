import { baseUrl } from "../constants/constants"; 

export async function registerPatient(data) {
    try {
        const response = await fetch(`${baseUrl}/patients`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        const result = await response.json();
        if (!response.ok) throw new Error(result.error || "Registration failed");
        return result;
    } catch (err) {
        console.error("Registration error", err.message);
        throw err;
    }
}

export async function loginPatient(data) {

    try {
        const response = await fetch(`http://localhost:5000/api/sessions`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify(data),
        });

        const result = await response.json();
        if (!response.ok) throw new Error(result.error || "Login failed");
        return result;
    } catch (err) {
        console.error("Login error", err.message);
        throw err;
    }
}

