import AuthLayout from "layout/Auth";
import { AuthLoginPage, AuthRegisterPage } from "pages";

const LoginRoutes = {
  path: '/',
  children: [
    {
      path: '/',
      element: <AuthLayout />,
      children: [
        {
          path: 'login',
          element: <AuthLoginPage />
        },
        {
          path: 'register',
          element: <AuthRegisterPage />
        }
      ]
    }
  ]
};

export default LoginRoutes;
