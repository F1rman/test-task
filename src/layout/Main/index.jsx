import Header from "layout/Header/Header";
import { Outlet } from "react-router-dom";
import leftEffect from "common/images/element-left.svg";
import rightEffect from "common/images/element-right.svg";

export default function MainLayout() {
    return (<div className='flex flex-col w-full relative'>
        <Header />
        <div className="relative">
            <img src={leftEffect} alt="leftEffect" className="absolute top-0 left-0 -z-10" />
            <img src={rightEffect} alt="leftEffect" className="absolute top-[-92px] right-0 -z-10" />
            <Outlet />
        </div>
    </div>);
}