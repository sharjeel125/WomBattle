import React, { useState } from "react";
import { Card } from "react-bootstrap";

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
  ]);
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          {data.map((item) => {
            return (
              <Card className="my-3 shadow p-3 mb-4 bg-white rounded" key={item.Id}>
                <Card.Body className="d-flex flex-column  align-items-center "  >
                  <Card.Title>{item.creater}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {item.status}
                  </Card.Subtitle>
                  <Card.Text>
                   {item.amount}
                  </Card.Text>
                  <Card.Link href="#"> Link</Card.Link>
                 
                </Card.Body>
              </Card>
            );
          })}
        </Card.Body>
      </Card>
    </>
  );
}
