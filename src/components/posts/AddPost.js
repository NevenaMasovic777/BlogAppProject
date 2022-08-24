import { Modal } from "bootstrap"
import { useRef, useState, useContext } from "react"
import { useParams } from "react-router-dom";
import { BlogContext } from "../../context/BlogContext";


const AddPost = () => {

    const { categories } = useContext(BlogContext);

    const { idCategory } = useParams();

    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [categoryId, setCategoryId] = useState(0);
    const { add } = useContext(BlogContext);

    const submitForm = (e) => {
        const modalEle = modalRef.current;
        const bsModal = Modal.getInstance(modalEle);
        e.preventDefault();

        let body;
        idCategory ? body = { title, text, categoryId: idCategory } : body = { title, text, categoryId }
        add(idCategory, body);

        bsModal.hide();
        setTitle('');
        setText('');
        setCategoryId(0);

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

            <div className="row">
                <div className="col-md-8 col-sm-2" />
                <button type="button" className="btn btn-primary btn-lg col-md-4 col-sm-8 " onClick={showModal}>Add post</button>
            </div>

            <div className="modal fade" ref={modalRef} tabIndex="-1" id="modal">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
                            <button type="button" className="btn-close" onClick={hideModal} aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={submitForm}>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="title" aria-describedby="title" placeholder="Add title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="text" className="form-label">Text</label>
                                    <input type="text" className="form-control" id="text" aria-describedby="text" placeholder="Add text" value={text} onChange={(e) => setText(e.target.value)} required />
                                </div>
                                {!idCategory ? <div className="mb-3">
                                    <select className="form-select" aria-label="Default select example" onChange={(e) => { setCategoryId(e.target.value); console.log(idCategory) }}>
                                        <option>Choose category</option>
                                        <option value={categoryId}>All</option>
                                        {categories ? categories.map(c => (
                                            <option value={c.id}>{c.name}</option>
                                        )) : null}

                                    </select>
                                </div> : null}
                                <div className="modal-footer">
                                    <button type="submit" className="btn btn-primary">Post</button>
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

export default AddPost;