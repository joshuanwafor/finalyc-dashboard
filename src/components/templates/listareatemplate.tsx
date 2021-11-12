
import React, { ReducerWithoutAction } from "react";
import { Container } from "react-bootstrap";

export const ListAreaTemplate: React.FC<{ title: string, actions?: React.ReactNode }> = ({ children, title, actions }) => {

    return <Container className="border rounded p-0">
        <div>
            <div className="bg-light p-3 py-3 border-bottom d-flex align-items-center justify-content-between">
                <div className="fs-5">{title}</div>
                {actions && actions}
            </div>
            <div>
                {children}
            </div>
        </div>
    </Container>
}