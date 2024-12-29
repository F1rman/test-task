import Container from "layout/container";
import Link from "./link";
import logo from "common/images/logo.svg";
import Button from "components/common/buttons/button";
import AuthContext from "hooks/useAuth";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const { userData, setUserData } = useContext(AuthContext);
    const navigate = useNavigate();

    console.log(userData)
    return (<header className="flex pt-[36px] pb-[26px] border-[1px] border-solid border-[#0000001A] relative">
        <Container className="flex items-center justify-between w-full relative">
            <div className="flex items-center justify-start pl-[14px]">
                <Link
                    link="/"
                    item="Home"
                    className=""
                />
                <Link
                    link="/feature"
                    item="Feature"
                    className=""
                /> <Link
                    link="/blog"
                    item="Blog"
                    className=""
                /> <Link
                    link="/testimonials"
                    item="Testimonials"
                    className=""
                />
            </div>
            <img src={logo} alt="logo" className="w-[154px] h-[27px] absolute left-1/2 transform -translate-x-1/2" />
            {!userData ? <div className="flex items-center gap-[9px]">
                <Button
                    variant="default"
                    onClick={() => navigate("/login")}
                >
                    <span className="text-secondary_color text-[14px] font-medium tracking-[-0.05em]">
                        Log In
                    </span>
                </Button>
                <Button
                    variant="signup"
                    onClick={() => navigate("/register")}
                >
                    Sign Up
                </Button>
            </div> :
                <Button
                    variant="default"
                    onClick={() => setUserData(null)}
                >
                    <span className="text-secondary_color text-[14px] font-medium tracking-[-0.05em]">
                        Log Out
                    </span>
                </Button>}
        </Container>
    </header>);
}