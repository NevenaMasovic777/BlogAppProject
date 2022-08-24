import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BlogContext } from "../../context/BlogContext";
import AddPost from "../posts/AddPost";
import Post from "../posts/Post";
import Loader from "../shared/Loader";
import NoResults from "../shared/NoResults";


const Category = () => {
    const { idCategory } = useParams();
    const { posts, requestPostsByCategory } = useContext(BlogContext);
    const [loader, setLoader] = useState(true);


    useEffect(() => {
        requestPostsByCategory(idCategory);
        setLoader(false);
    }, [idCategory])

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

export default Category;