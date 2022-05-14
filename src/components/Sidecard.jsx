import { Modal } from "react-bootstrap";
import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import Example from "./Modal";

export default function Sidecard() {
  const [data, setData] = useState([
    {
      Id: 1,
      creater: "Hamad",
      status: 0,
      amount: 300,
    },
    {
      Id: 2,
      creater: "Sharjeel",
      status: 0,
      amount: 400,
    },
    {
      Id: 3,
      creater: "Ali",
      status: 1,
      amount: 500,
    },
    {
      Id: 4,
      creater: "akram",
      status: 0,
      amount: 300,
    },
  ]);

  const [show, setShow] = useState(false);

  const [approved, setApproved] = useState(false);

  const handleClose = () => setShow(false);
  const handleApproved = () => setApproved(true);
  const handleBuy = () => setApproved(false);
  const handleShow = () => setShow(true);

  const handleClick = () => {
    <Modal show={true}>
      <Modal.Header> modal head part </Modal.Header>

      <Modal.Body> hi modal is here </Modal.Body>
      <Modal.Footer>button</Modal.Footer>
    </Modal>;
  };
  return (
    <>
      <Card
        className="mt-5"
        style={{ width: "39rem", backgroundColor: "rgba(119, 17, 0,0.5)" }}
      >
        <Card.Body>
          {data ? (
            data?.map((item) => {
              return (
                <Card
                  className="mt-5"
                  key={item.Id}
                  style={{ backgroundColor: "rgba(0, 230, 254,0.5)" }}
                >
                  <Card.Body className="d-flex flex-column  align-items-center ">
                    <Card.Title className="text-white">
                      {" "}
                      {item.creater}
                    </Card.Title>
                    <Card.Subtitle
                      className="mb-2 text-white"
                      style={{ color: "white" }}
                    >
                      {item.status}
                    </Card.Subtitle>
                    <Card.Text className="text-white">{item.amount}</Card.Text>
                    <Button variant="primary" onClick={handleShow}>
                      Join Battle
                    </Button>
                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        Woohoo, you're reading this text in a modal!
                      </Modal.Body>
                      <Modal.Footer>
                        { !approved ? (
                          <Button variant="primary" onClick={handleApproved}>
                            Approve
                          </Button>
                        ) : (
                          <Button variant="primary" onClick={handleBuy}>
                            Buy
                          </Button>
                        )}

                        <Button variant="secondary" onClick={handleClose}>
                          Close
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </Card.Body>
                </Card>
              );
            })
          ) : (
            <div>
              No Active Battles
              <Button variant="primary" onClick={handleClick}>
                Create a Battle
              </Button>
            </div>
          )}
        </Card.Body>
      </Card>
    </>
  );
}
