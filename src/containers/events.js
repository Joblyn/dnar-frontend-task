import React from "react";
import { Card } from "../components";

export default function Events() {
  const arr = Array.from(new Array(3));

  return (
    <Card className="bd-radius-lg" style={{height: '100%'}}>
      <Card.Header>Events</Card.Header>
      <Card.Body className="px-1" style={{height: '100%'}}>
        {arr.map((val, id) => (
          <div className="small-card p-3 bd-radius-lg my-2" key={id}>
            <p className="text-sm cl-white">
              <span style={{ textTransform: "uppercase" }}>Token2049</span>
              London
            </p>
            <p className="text cl-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem. Veritatis obcaecati tenetur iure
              eius earum ut molestias architecto 
            </p>
          </div>
        ))}
      </Card.Body>
    </Card>
  );
}
