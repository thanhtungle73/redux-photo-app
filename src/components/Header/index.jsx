import React from 'react';
import { NavLink } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import './Header.scss';

Header.propTypes = {

};

function Header() {
    return (
        <div>
            <header className="header">
                <Container>
                    <Row className="justify-content-between">
                        <Col xs="auto">
                            {/* When use target = blank --> should use rel="noopener noreferrer" */}
                            <a
                                className="header__link header__title"
                                href="https://youtube.com/easyfrontend"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Easy Frontend
                            </a>
                        </Col>

                        <Col xs="auto">
                            <NavLink
                                end
                                to="/photos"
                                className={({ isActive }) => "header__link" + (isActive ? " header__link--active" : "")}
                            >
                                Redux Project
                            </NavLink>
                        </Col>
                    </Row>
                </Container>
            </header>
        </div>
    );
}

export default Header;