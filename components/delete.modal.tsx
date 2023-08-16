import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import { mutate } from 'swr';

interface IProps {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
  idBlogs: number;
}

function ModalDelete(props: IProps) {
  const { showModal, setShowModal, idBlogs } = props;
  const [id, setId] = useState<number>(0);

  const handleClose = () => {
    setShowModal(false);
  };

  const handleDelete = () => {
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res) {
          toast.success("success");
          handleClose()
          mutate('http://localhost:8000/blogs')
        } else {
          toast.error("error");
        }
      });
  };

  useEffect(() => {
    if(idBlogs){
      setId(idBlogs)
    }
  }, [idBlogs])

  return (
    <>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Blogs</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure delete this blogs id: {id}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalDelete;