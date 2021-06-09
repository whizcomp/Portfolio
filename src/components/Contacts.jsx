import React from "react";

export default function Contacts() {
  const contact = [
    { id: 1, link: "", icon: "" },
    { id: 1, link: "", icon: "" },
    { id: 1, link: "", icon: "" },
    { id: 1, link: "", icon: "" }
  ];
  return (
    <div style={{ bakgroundColor: "#b3d1ff" }}>
      <h2 id="contact" className="text-center">
        Contacts
      </h2>
      <i class="bi bi-telephone"></i>
    </div>
  );
}
