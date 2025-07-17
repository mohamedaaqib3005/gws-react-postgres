import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchSession } from "../api/request";



export default function useSession() {
    const [userName, setUserName] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const checkSession = async () => {
            const result = await fetchSession();
            if (result.success) {
                setUserName(result.user.userName);
            } else {
                navigate("/");
            }
        };

        checkSession();
    }, [navigate]);

    return { userName };
}
