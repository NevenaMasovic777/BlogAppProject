import { Modal } from "bootstrap"
import { useRef, useState, useContext } from "react"
import { useParams } from "react-router-dom";
import { BlogContext } from "../../context/BlogContext"

const EditPost = ({ title, text, id, categoryId }) => {
    const { idCategory } = useParams();
    const [editTitle, setTitle] = useState(title)
    const [editText, setText] = useState(text);
    const { edit } = useContext(BlogContext);

    const submitForm = (e) => {
        const modalEle = modalRef.current;
        const bsModal = Modal.getInstance(modalEle);
        e.preventDefault();

        edit(idCategory, id, { id, title: editTitle, text: editText, categoryId });

        bsModal.hide();
        setTitle(editTitle);
        setText(editText);
    }

    // modal
    const modalRef = useRef()

    const showModal = () => {
        const modalEle = modalRef.current;
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

    return (
        <>
            <button type="button" className="btn btn-primary" onClick={showModal}>Edit post</button>

            <div className="modal fade" ref={modalRef} tabIndex="-1" id="modal">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Edit post</h5>
                            <button type="button" className="btn-close" onClick={hideModal} aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={submitForm}>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="title" aria-describedby="title" placeholder="Add title" value={editTitle} onChange={(e) => setTitle(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="text" className="form-label">Text</label>
                                    <input type="text" className="form-control" id="text" aria-describedby="text" placeholder="Add text" value={editText} onChange={(e) => setText(e.target.value)} />
                                </div>
                                <div className="modal-footer">
                                    <button type="submit" className="btn btn-primary">Edit</button>
                                    <button type="button" className="btn btn-secondary" onClick={hideModal}>Close</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default EditPost;