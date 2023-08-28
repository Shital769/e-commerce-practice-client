import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Footer } from "./Footer";
import { Header } from "./Header";
import Sidebar from "./Sidebar";

const AdminLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="main">
        <Container fluid>
          <Row>
            <Col xs="3" className="side-bar bg-dark text-light">
              <Sidebar />
            </Col>
            <Col>{children}</Col>
          </Row>
        </Container>
      </main>

      <Footer />
    </div>
  );
};

export default AdminLayout;
