"use client";

import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import CreateModal from "./create.modal";
import { useState } from "react";
import UpdateModal from "./update.modal";
import Link from "next/link";
import ModalDelete from "./delete.modal";

interface IProps {
  blogs: IBlog[];
}

function AppTable(props: IProps) {
  const [showModalCreate, setShowModalCreate] = useState<boolean>(false);
  const [showModalUpdate, setShowModalUpdate] = useState<boolean>(false);
  const [showModalDelete, setShowModalDelete] = useState<boolean>(false);
  const [idBlogs, setIdBlogs] = useState<number>(0);
  const [value, setValue] = useState<IBlog>();
  const handleUpdate = (item: IBlog) => {
    setShowModalUpdate(true);
    setValue(item);
  };
  const handleDelete = (id: number) => {
    setShowModalDelete(true)
    setIdBlogs(id);
  }
  return (
    <>
      <div
        className="mb-3"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <h3>Blogs Table</h3>
        <Button variant="secondary" onClick={() => setShowModalCreate(true)}>
          Add new blogs
        </Button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {props.blogs?.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.author}</td>
              <td>
                <Button>
                  <Link
                    className="btn-danger text-white"
                    href={`/blogs/${item?.id}`}
                  >
                    View
                  </Link>
                </Button>
                <Button
                  variant="success"
                  className="mx-3"
                  onClick={() => handleUpdate(item)}
                >
                  Update
                </Button>
                <Button variant="danger" onClick={() => handleDelete(item.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <CreateModal
        showModal={showModalCreate}
        setShowModal={setShowModalCreate}
      />
      <UpdateModal
        value={value}
        showModal={showModalUpdate}
        setShowModal={setShowModalUpdate}
      />
      <ModalDelete
        idBlogs={idBlogs}
        showModal={showModalDelete}
        setShowModal={setShowModalDelete}
      />
    </>
  );
}

export default AppTable;
