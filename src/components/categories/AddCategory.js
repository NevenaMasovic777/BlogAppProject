import { Modal } from "bootstrap"
import { useRef, useState } from "react"

const AddCategory = ({ addCategory }) => {

    const [name, setName] = useState('');

    const submitForm = (e) => {
        const modalEle = modalRef.current
        const bsModal = Modal.getInstance(modalEle)
        e.preventDefault();

        addCategory({ name })

        bsModal.hide();
        setName('');
    }

    // modal
    const modalRef = useRef()

    const showModal = () => {
        const modalEle = modalRef.current
        const bsModal = new Modal(modalEle, {
            backdrop: 'static',
            keyboard: false
        })
        bsModal.show()
    }

    const hideModal = () => {
        const modalEle = modalRef.current
        const bsModal = Modal.getInstance(modalEle)
        bsModal.hide()
    }

    return (
        <div className="mb-3 pb-3">
            <button type="button" className="btn btn-primary btn-lg" onClick={showModal}>Add category</button>

            <div className="modal fade" ref={modalRef} tabIndex="-1" id="modal">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Add category</h5>
                            <button type="button" className="btn-close" onClick={hideModal} aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={submitForm}>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Category</label>
                                    <input type="text" className="form-control" id="category" aria-describedby="category" placeholder="Add category" value={name} onChange={(e) => setName(e.target.value)} required />
                                </div>
                                <div className="modal-footer">
                                    <button type="submit" className="btn btn-primary">Add</button>
                                    <button type="button" className="btn btn-secondary" onClick={hideModal}>Close</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddCategory;