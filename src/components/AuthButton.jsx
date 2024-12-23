import { useNavigate } from "react-router-dom";

export const AuthButton = ({ icon, text }) => {
    const navigate = useNavigate();
    return (
        <button className="w-full flex items-center justify-center px-4 py-2.5 border rounded-md text-[#171717] hover:bg-gray-50 font-semibold text-sm"
            onClick={() => navigate("/dashboard")}
        >
            <img src={icon} alt={`${text} Logo`} className="h-5 mr-2" />
            {text}
        </button>
    );
};