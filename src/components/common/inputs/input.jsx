import { useState } from "react";
import eye from "common/images/ic_eye.svg";

export default function Input({
    name,
    value,
    onChange,
    placeholder,
    className = "",
    children,
    onKeyUp,
    type = "text",
    wrapperClassName = "",
    src,
    onBlur,
    onClick,
    label,
    counter = false,
    length = 1,
    disabled,
    onKeyDown,
    maxLength = 10000,
}) {
    const [inputValue, setInputValue] = useState(value || "");
    const [show, setShow] = useState(true);

    return (
        <div className={`input_wrapper ${wrapperClassName}`}>
            {label && (
                <div className="label flex justify-between w-full ">
                    {label}{" "}
                </div>
            )}
            <div className="flex w-full relative">
                <input
                    value={value !== undefined ? value : inputValue}
                    maxLength={maxLength && maxLength}
                    onKeyDown={onKeyDown}
                    onKeyUp={onKeyUp}
                    disabled={disabled}
                    onBlur={onBlur}
                    onClick={onClick}
                    onWheel={(e) => {
                        if (e.target.type === "number") e.target.blur();
                    }}
                    name={name}
                    type={!show ? "password" : "text"}
                    onChange={(e) => {
                        setInputValue(e.target.value);
                        onChange && onChange(e);
                    }}
                    placeholder={placeholder}
                    className={`outline_input ${className} ${src && "!pl-[50px]"}`}
                />
                {type === "password" && (<img
                    src={eye}
                    alt="eye"
                    className="absolute right-[12px] top-[12px] cursor-pointer"
                    onClick={() => setShow(!show)}
                />)}
            </div>
            {children}
        </div>
    );
}
