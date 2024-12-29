import React from "react";
import useRipple from "use-ripple-hook";
import shape from "common/images/shape.svg";

export default function Button({
    children,
    onClick,
    type = "button",
    className = "",
    variant = "",
    disabled = false,
    disabledRipple = false,
}) {
    const [ripple, event] = useRipple({
        disabled: disabledRipple,
        duration: 450,
        color: "#b9d7d430",
        cancelAutomatically: false,
        timingFunction: "cubic-bezier(.42,.36,.28,.88)",
    });
    const [ripple2, event2] = useRipple({
        disabled: disabledRipple,
        duration: 450,
        color: "#f3ecec24",
        cancelAutomatically: false,
        timingFunction: "cubic-bezier(.42,.36,.28,.88)",
    });



    if (variant === "auth") {
        return (
            <button
                type={type}
                ref={ripple}
                onMouseDown={event}
                className={`bg-[#04AA00] rounded-[4px] flex items-center justify-between w-full pl-6 pr-4 h-[48px] ${disabled && "disabled"} ${className}`}
                onClick={onClick}
                disabled={disabled}
            >
                <span className="text-white text-[14px] font-semibold">{children}</span>
                <img src={shape} alt="shape" />
            </button>
        );
    } else if (variant === "default") {
        return (<button
            type={type}
            ref={ripple2}
            onMouseDown={event2}
            className={`flex justify-center items-center bg-[#FFFFFF] rounded-[24px] border-[1px] border-solid border-[#0000001A] w-[114px] h-[42px] ${disabled && "disabled"} ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
           {children}
        </button>)
    } else if (variant === "signup") {
        return (<button
            type={type}
            ref={ripple}
            onMouseDown={event}
            className={`flex justify-center items-center bg-[#04AA00] border-[1px] border-solid border-[#0000001A] rounded-[24px] h-[42px] w-[114px] ${disabled && "disabled"} ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            <span className="text-white text-[14px] font-semibold">{children}</span>
        </button>)
    }
}