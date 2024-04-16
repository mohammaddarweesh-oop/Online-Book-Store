import React from "react";

function Heading({ title }) {
  return (
    <div className="heading" style={divStyles}>
      <h2 style={h2Styles}>{title}</h2>
    </div>
  );
}
const divStyles = {
  padding: "10px 30px",
  backgroundColor: "#fff",
};
const h2Styles = {
  color: "#1926d2",
  fontSize: "20px",
  fontWeight: "500",
  paddingBottom: "5px",
  width: "max-content",
  borderBottom: "1px solid #1926d2",
};
export default Heading;
