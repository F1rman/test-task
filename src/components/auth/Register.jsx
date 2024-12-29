import logo from "common/images/logo.svg";
import Button from "components/common/buttons/button";
import Input from "components/common/inputs/input";
import Item from "components/register/TrialItem";
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
            <div className="bg-[#000000] p-8 flex flex-col justify-between w-full max-w-[293px] items-start rounded-r-[25px]">
                <div className="flex flex-col">
                    <h3 className="text-white text-[24px] font-semibold leading-[34px] mb-6">Get Your FREE <br />30-Days Trial Now!</h3>
                    <div className="flex flex-col gap-5">
                        <Item
                            img="dolar.svg"
                            title="Absolutely FREE"
                            description="No hidden charges, No credit card required"
                        />
                        <Item
                            img="fast_easy.svg"
                            title="Fast & Easy"
                            description="Get access instantly, no downloads required"
                        />
                        <Item
                            img="data.svg"
                            title="Your Own Data"
                            description="Enjoy the Free Trial with your company data"
                        />
                        <Item
                            img="ic_stars.svg"
                            title="Unlimited Features"
                            description="Access all features of the world's #1 business software!"
                        />
                    </div>
                </div>
                <p className="font-semibold text-[14px] leading-[16.94px] text-white">Call us at <span className="text-[#1FFF1A]">800 1301 448</span></p>
            </div>
        </div>
    </div>);
}