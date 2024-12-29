import { NavLink } from "react-router-dom";

export default function Link({
    link = "/",
    item = "",
    className = "",
}) {
    return (
        <NavLink
            to={link}
            className={({ isActive }) =>
                `${isActive ? "text-[#000000] font-semibold" : "text-[#7f7f7f] font-medium"} ${className} px-[17px] py-[9px] text-[14px]`
            }
        >
            {item}
        </NavLink>
    );
}
