import React, { useState, useEffect } from "react";
import Modal from "react-modal";

const Consejos = ({ consejos }) => {
  const [show, setShow] = useState(false);
  const [selectedConsejo, setSelectedConsejo] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const handleShow = (consejo) => {
    setSelectedConsejo(consejo);
    setShow(true);
  };

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    // Initial check
    checkIsMobile();

    // Add a listener to update isMobile on window resize
    window.addEventListener("resize", checkIsMobile);

    // Clean up the listener when the component unmounts
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  return (
    <section className="services" id="services">
      <h1 className="heading">
        {" "}
        <span>Consejos</span> para tu Mascota
      </h1>
      <div className="products">
        {consejos.map((item) => (
          <div key={item.id} className="box">
            <div className="imgBox">
              <img
                width="60px"
                height="60px"
                src="image/logoVete.webp"
                alt="logo"
              />
            </div>

            <img
              src={item.image}
              width="250px"
              height="250px"
              alt={item.title}
            />
            <br />

            <button className="btn" onClick={() => handleShow(item)}>
              Leer más
            </button>
          </div>
        ))}
      </div>
      {selectedConsejo && (
        <Modal
          style={{
            content: {
              width: "80%",
              height: "70%",
              margin: "auto",
            },
          }}
          isOpen={show}
          onRequestClose={() => setShow(false)}
        >
          <div className="modal-content">
            <div className="buttonContainer">
              <button onClick={() => setShow(false)}>X</button>
            </div>
            <img
              src={
                isMobile
                  ? selectedConsejo.imageXLMobile
                  : selectedConsejo.imageXL
              }
              alt={selectedConsejo.title}
            />
          </div>
        </Modal>
      )}
    </section>
  );
};

export default Consejos;
