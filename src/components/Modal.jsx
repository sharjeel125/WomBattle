import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import React, { useState } from "react";
import { Form } from "react-bootstrap";

export default function Example() {
  return (
    <>
    
      <div>
        <Modal show={true}>
          <Modal.Header> modal head part </Modal.Header>

          <Modal.Body> hi modal is here </Modal.Body>
          <Modal.Footer>button</Modal.Footer>
        </Modal>
      </div>
    </>
  );
}
