import { useState } from "react";
import { Container, Navbar, Row, Col } from "react-bootstrap";
import AddBook from "./components/AddBook";
import BooksList from "./components/Booklist";
import "./App.css";

function App() {
  const [bookId, setBookId] = useState("");

  const getBookIdHandler = (id) => {
    console.log("The ID of document to be edited: ", id);
    setBookId(id);
  };
  return (
    <div >
      <Navbar bg="dark" variant="dark" className="header  ">
        <Container className="bg-black text-white w-full flex justify-center items-center p-4 text-2xl">
          <Navbar.Brand href="#home">Library - Firebase CRUD</Navbar.Brand>
        </Container>
      </Navbar>

      <Container className="flex justify-center items-center ml-auto mr-auto " style={{ width: "400px" }}>
        <Row >
          <Col >
            <AddBook id={bookId} setBookId={setBookId} />
          </Col>
        </Row>
      </Container>
      <Container className="flex justify-center items-center">
        <Row>
          <Col>
            <BooksList getBookId={getBookIdHandler} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;