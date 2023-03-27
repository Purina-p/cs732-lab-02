import { useLocation } from "react-router-dom";

export default function Error() {
    const { pathname } = useLocation();
    return (
        <h1>404! Not Found! The (<code>{pathname}</code>) can't be found.</h1>
    )
}