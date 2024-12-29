import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { postService } from "services/api.service";
import Post from "./HomePost";
import AuthContext from "hooks/useAuth";

export default function Posts() {
    const navigate = useNavigate();
    const { userData } = useContext(AuthContext);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getAll().then(setPosts);
    }, []);
    return (<div className="posts">
        {posts.map((post) => (
            <Post key={post.id} post={post} onClick={() => navigate(userData ? `posts/${post.id}` : '/login', { state: { posts } })} />
        ))}
    </div>);
}