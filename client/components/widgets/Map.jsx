import React from "react";

export default function Map() {
  return (
    <div className="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2446.4556162806857!2d4.712970299999999!3d52.1805905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5dbf64b98b3c5%3A0x853acceb148ac7a6!2sAutoPlanner%20NL!5e0!3m2!1snl!2str!4v1685352544317!5m2!1snl!2str"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="eager"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
