import Input from "components/common/inputs/input";
import Button from "../components/common/buttons/button";

export function Components() {
    return (<div className='flex flex-col gap-5 max-w-[600px] mt-[100px] ml-[100px]'>
        <Button
            variant="auth"
        >
            Sign In
        </Button>
        <Input
            placeholder="Your first name"
            label="First name"
         />
          <Input
            placeholder="Password"
            label="Enter password"
            type="password"
         />
         <Button
            variant="login"
         >
            Log in
         </Button>
         <Button
            variant="signup"
         >
            Sign up
         </Button>
    </div>);
}