import EditPost from "./EditPost";
import { BlogContext } from "../../context/BlogContext";
import { useContext } from "react";
import { useParams } from "react-router-dom";


const Post = ({ post }) => {

    const { title, text, id, categoryId, createdAt } = post;

    const { deleteSinglePost } = useContext(BlogContext);
    const { idCategory } = useParams();

    const convertISOStringToMonthDay = (date) => {
        const tempDate = new Date(date).toString().split(' ');
        const formattedDate = `${+tempDate[2]} ${tempDate[1]} ${tempDate[3]}, ${tempDate[4]}`;
        return formattedDate;
    };

    return (
        <div className="border shadow rounded flex flex-column mt-3">
            <div className="row px-2 py-2">
                <div className="col-md-9 col-sm-2">
                    <figure className="figure">
                        <img className="figure-img img-fluid rounded d-inline p-2" alt="..." src="https://via.placeholder.com/80" />
                        <h3 className="d-inline">{title}</h3>
                        <figcaption className="figure-caption">Created at: {convertISOStringToMonthDay(createdAt)}</figcaption>
                    </figure>
                </div>
                <div className="col-md-3 col-sm-10 d-flex justify-content-end">
                    <div className="row">
                        <div className="col">
                            <button className="btn btn-danger mx-1"
                                onClick={(e) => deleteSinglePost(e, idCategory, id)}>Delete</button>
                            <EditPost id={id} title={title} text={text} categoryId={categoryId} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row px-3 py-3">
                <div className="col">
                    <div className="card-body" style={{ wordWrap: 'break-word' }}>
                        <p className="card-text">{text}</p>
                    </div>
                </div>
            </div>
            <div className="row px-3 py-3">
                <div className="card-body col-sm-12 col-md-6">
                    <img src="https://via.placeholder.com/100" alt="..." className="mx-1 my-1" />
                    <img src="https://via.placeholder.com/100" alt="..." className="mx-1 my-1" />
                    <img src="https://via.placeholder.com/100" alt="..." className="mx-1 my-1" />
                </div>
            </div>
        </div>
    );
}

export default Post;