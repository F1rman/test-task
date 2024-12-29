import { Outlet } from "react-router-dom";

export default function AuthLayout() {
    return (<div className='flex w-full items-center mt-[170px]  bg-white'>
        <Outlet />
    </div>);
}