import React, { useState, useReducer,useEffect } from "react";
import { useDispatch } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import { createPage } from "../redux/actions/pageAction";
import PageDetail from "./PageDetail";

export default function PageSection({ pages }) {
  const [show, setShow] = useReducer((show) => !show, false);
  const [name, setName] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [error, setError] = useState("");
  const [CurrentUser, setCurrentUser] = useState("")
  const dispatch = useDispatch();
  useEffect(() => {
    const userData= window.localStorage.getItem('user')
    setCurrentUser(JSON.parse(userData))
    }, [])
  const handleSubmit = async () => {
    if (!name) {
      setIsValid(false);
      return;
    } else {
      createPage(name,CurrentUser._id)(dispatch);
      closeModal();
    }
    console.log(name)
  };

  const closeModal = () => {
    setName("");
    setError("");
    setShow();
  };
  return (
    <div className="my-2 d-flex flex-column">
      <button
        type="button"
        className="btn btn-outline-secondary btn-sm mb-2 mx-2"
        onClick={() => setShow(!show)}
      >
        <i className="fa fa-plus"></i>
        Add Page
      </button>
      <form id="create-page">
        <Modal
          show={show}
          onHide={setShow}
          backdrop="static"
          keyboard={false}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Create Page</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="col-auto">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className={`form-control form-control-sm ${
                  isValid ? "" : "is-invalid"
                }`}
                id="name"
                name="name"
                placeholder="Name of Page"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {!isValid && (
                <div className="invalid-feedback">
                  Please provide a valid name.
                </div>
              )}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </form>
      <ul className="list-group pages">
        {pages.filter(curElem=>curElem.user === CurrentUser._id).map((page) => (
          <PageDetail page={page} key={page._id} />
        ))}
      </ul>
    </div>
  );
}
