import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

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
              <div className="sidebar-menu">
                <ul>
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/catalogue">Catalogue</Link>
                  </li>
                  <li>
                    <Link to="/products">Products</Link>
                  </li>
                  <li>
                    <Link to="/payment">Payment Mathods</Link>
                  </li>
                  <li>
                    <Link to="/orders">Orders</Link>
                  </li>
                  <li>
                    <Link to="/customers">Customers</Link>
                  </li>
                  <li>
                    <Link to="/setting">Setting</Link>
                  </li>
                </ul>
              </div>
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
