import { useContext, useEffect, useState } from "react";
import AddPost from "../components/posts/AddPost";
import Post from "../components/posts/Post";
import Loader from "../components/shared/Loader";
import NoResults from "../components/shared/NoResults";
import { BlogContext } from "../context/BlogContext";

const Main = () => {

    const { posts, getPosts } = useContext(BlogContext);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        getPosts();
        setLoader(false);
    }, [])


    return (
        <div className="col px-3 py-3 me-md-5 me-sm-3">
            <div className="row mx-3">
                <AddPost />
            </div>
            <div className="row mx-3 my-3">
                {loader ? <Loader /> : posts && posts.length ? posts.map((post) => (<Post key={post.id} post={post} />)) : <NoResults />}
            </div>
        </div>

    );
}

export default Main;