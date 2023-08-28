import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

export const AdminLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="main">
        <Container fluid>
          <Row>
            <Col xs="3" className="side-bar bg-dark text-light">
              <div className="mt-5">
                <div className="text-center fw-bolder">Admin Menu</div>
              </div>
              <hr />

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
