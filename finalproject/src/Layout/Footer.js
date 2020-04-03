import React from "react";

const Footer = () => {
  return (
    <div>
      <button
        className="footer-button"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        ↑ ↑ ↑ SCROLL TO TOP ↑ ↑ ↑
      </button>
    </div>
  );
};
export default Footer;
