import logo from "common/images/logo.svg";
import Button from "components/common/buttons/button";
import Input from "components/common/inputs/input";
import AuthContext from "hooks/useAuth";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();
    const { setUserData, setLogined } = useContext(AuthContext);

    const [error, setError] = useState(false);
    const [state, setState] = useState({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setState((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        setError(false);
    };

    const saveData = () => {
        for (const [key, value] of Object.entries(state)) {
            if (!value) return setError(key);
        }
        localStorage.setItem('user', JSON.stringify(state));
       
        setUserData(state);
        setLogined(true);
        setState({
            email: "",
            password: "",
            firstName: "",
            lastName: "",
        });

        navigate("/");
    }

    return (<div className='flex flex-col w-full items-center'>
        <img src={logo} alt="logo"
            height={42}
            width={240}
        />
        <div className="flex border-[#000000] border-[1px] border-solid rounded-[25px] w-full max-w-[751px] mt-[40px]">
            <div className="p-8 flex flex-col w-full">
                <h2 className="text-primary_color font-semibold text-[24px] leading-[34px] mb-[23px]">
                    Sign up
                </h2>
                <div className="flex flex-col gap-6">
                    <Input
                        placeholder="Your email address"
                        label="Email address"
                        value={state.email}
                        name="email"
                        onChange={handleInputChange}

                    />
                    <div className="flex gap-6 items-center">
                        <Input
                            label="First name"
                            placeholder="Your first name"
                            value={state.firstName}
                            name="firstName"
                            onChange={handleInputChange}
                        />
                        <Input
                            label="Last name"
                            placeholder="Your last name"
                            value={state.lastName}
                            name="lastName"
                            onChange={handleInputChange}
                        />
                    </div>
                    <Input
                        placeholder="Password"
                        label="Enter password"
                        type="password"
                        value={state.password}
                        name="password"
                        onChange={handleInputChange}
                    />
                    <Link to="/forgot-password" className="text-[#04AA00] text-[14px] leading-[16.94px]">
                        Forgot password?
                    </Link>
                </div>
                <Button
                    variant="auth"
                    className="mt-8 mb-[48px]"
                    disabled={error}
                    onClick={saveData}
                >
                    Sign Up
                </Button>
                <p className="text-primary_color text-[14px]">Already have an account? <span className="text-[#04AA00] font-semibold cursor-pointer hover:opacity-90"
                    onClick={() => navigate("/login")}
                >Sign In</span></p>
            </div>
            <div className="bg-[#000000] flex flex-col w-full max-w-[293px] justify-center items-center rounded-r-[25px]">
                <div className="flex items-center mb-4">
                    <h3 className="pr-2 font-bold text-[24px] text-white"
                        style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 700 }}
                    >Kodix</h3>
                    <div className="border-[#1FFF1A] border-[1px] border-solid rounded-[4px] px-[8px] py-[6px]">
                        <span className="text-[#1FFF1A] font-medium text-[12px] leading-[14.52px]">PRO</span>
                    </div>
                </div>
                <span className="text-[#484848] text-center leading-6">
                    Unlimited traffic, strategic<br /> support, and AI-driven upsells
                </span>
                <a href="/" className="text-[#1FFF1A] text-[16px] font-medium leading-[19.36px] underline mt-6">
                    Learn More
                </a>
            </div>
        </div>
    </div>);
}