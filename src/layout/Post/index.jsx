import Posts from "components/post/Posts";
import Container from "layout/container";
import { Outlet } from "react-router-dom";

export default function PostLayout() {
    return (
        <Container className="flex justify-center pt-[27px] gap-[130px]">
            <Outlet />
            <Posts />
        </Container>
    );
}