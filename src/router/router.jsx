import { createBrowserRouter } from "react-router-dom";
import { Components, HomePage, PostDetailsPage } from "../pages";
import MainLayout from "../layout/Main";
import LoginRoutes from "./LoginRoutes";
import PostLayout from "layout/Post";

const routes = [
    {
        path: '/', element: <MainLayout />, children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: 'feature', element: <div>sdcs</div>
            }, {
                path: 'blog', element: <div>sdcs</div>
            }, {
                path: 'testimonials', element: <div>sdcs</div>
            },
            {
                path: 'posts', element: <PostLayout />, children: [
                    {
                        path: ':id',
                        element: <PostDetailsPage />
                    }
                ]
            },
            { path: 'components', element: <Components /> },
        ]
    },
    LoginRoutes

];
const router = createBrowserRouter(routes);

export default router;