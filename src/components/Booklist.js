import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import BookDataService from "../services/book.services";

const BooksList = ({ getBookId }) => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        getBooks();
    }, []);

    const getBooks = async () => {
        const data = await BookDataService.getAllBooks();
        console.log(data.docs);
        setBooks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    const deleteHandler = async (id) => {
        await BookDataService.deleteBook(id);
        getBooks();
    };
    return (
        <>
            <div className="mb-2 mt-9">
                <Button className="bg-black text-white text-xl rounded-md"
                    variant="dark edit"
                    onClick={getBooks} >
                    Refresh List
                </Button>
            </div>


            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th className="  border-2 box-border border-black text-xl p-2">#</th>
                        <th className="  border-2 box-border border-black text-xl p-2 ">Book Title</th>
                        <th className="  border-2 box-border border-black text-xl p-2 ">Book Author</th>
                        <th className="  border-2 box-border border-black text-xl p-2 ">Status</th>
                        <th className="  border-2 box-border border-black text-xl p-2 ">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((doc, index) => {
                        return (
                            <tr key={doc.id}>
                                <td>{index + 1}</td>
                                <td>{doc.title}</td>
                                <td>{doc.author}</td>
                                <td>{doc.status}</td>
                                <td>
                                    <Button
                                        variant="secondary"
                                        className="bg-gray-500 text-white rounded-lg box-border p-2 shadow-lg"
                                        onClick={(e) => getBookId(doc.id)}
                                    >
                                        Edit
                                    </Button>
                                    <Button
                                        variant="danger"
                                        className="bg-red-500 text-white rounded-lg box-border p-2 shadow-lg ml-2"
                                        onClick={(e) => deleteHandler(doc.id)}
                                    >
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </>
    );
};

export default BooksList;