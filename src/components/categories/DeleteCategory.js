import { Modal } from "bootstrap";
import { useContext, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BlogContext } from "../../context/BlogContext";
import { deleteCategory } from "../../service/service";

const DeleteCategory = ({ category }) => {
    const { idCategory } = useParams();
    const { getCategories, posts, deleteSinglePost } = useContext(BlogContext);
    const navigate = useNavigate();

    const deleteCat = async (e, category) => {
        e.preventDefault();
        if (!category) return;
        await deleteCategory(category.id);
        getCategories();
        navigate("/");
    }

    const confirmDelete = (e) => {
        posts.forEach(post => {
            if (post.categoryId === category.id) deleteSinglePost(e, idCategory, post.id);
        });
        deleteCat(e, category);
        hideModal();
    }

    const modalRef = useRef();

    const showModal = () => {
        const modalEle = modalRef.current
        const bsModal = new Modal(modalEle, {
            backdrop: 'static',
            keyboard: false
        });
        bsModal.show();
    }

    const hideModal = () => {
        const modalEle = modalRef.current;
        const bsModal = Modal.getInstance(modalEle);
        bsModal.hide();
    }

    const handleAction = (e) => {
        e.preventDefault();
        if (posts.find((p) => { return p.categoryId === category.id })) {
            return showModal();
        } else {
            posts.forEach(post => {
                if (post.categoryId === category.id) deleteSinglePost(e, idCategory, post.id);
            });
            deleteCat(e, category);
        };
    }

    return (
        <>
            <button type="button" className="col btn-close " aria-label="Close" onClick={(e) => { handleAction(e) }}></button>

            <div className="modal fade" ref={modalRef} tabIndex="-1" id="modal">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Are you sure? All of your posts will be deleted</h5>
                        </div>
                        <div className="modal-body text-center">
                            <button type="submit" className="btn btn-primary me-3" onClick={(e) => confirmDelete(e)}>Yes</button>
                            <button type="button" className="btn btn-secondary" onClick={hideModal}>No</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DeleteCategory;