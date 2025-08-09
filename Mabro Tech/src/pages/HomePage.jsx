import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Footer from "../components/home/Footer";
import { Contact } from "../components/home/Contact";

const images = [
  "https://i.postimg.cc/sDNPCTfm/20250414-113401.jpg",
  "https://i.postimg.cc/2Sh921nC/20250414-112315.jpg",
  "https://i.postimg.cc/jq3150sY/20250414-112815.jpg",
  "https://i.postimg.cc/vBq0cfwt/20250414-114926.jpg",
  "https://i.postimg.cc/1RdWSGH9/20250414-133916.jpg",
  "https://i.postimg.cc/wTswj1fD/20250414-134337.jpg",
  "https://i.postimg.cc/FRbVL6kv/DSC-0121.jpg",
  "https://i.postimg.cc/rm29zTmg/DSC-0122.jpg",
  "https://i.postimg.cc/wxcwy1DN/DSC-0125.jpg",
  "https://i.postimg.cc/TwnCcwSZ/DSC-0128.jpg",
  "https://i.postimg.cc/qq0QDrHg/DSC-0127.jpg",
  "https://i.postimg.cc/8PZw4xKP/DSC-0126.jpg",
  "https://i.postimg.cc/0Nwf8j8b/DSC-0701.jpg",
  "https://i.postimg.cc/NjVDqmv3/DSC-0698.jpg",
  "https://i.postimg.cc/qM4ZjspQ/P-20170602-111408.jpg",
  "https://i.postimg.cc/TY0NSKwx/P-20170602-111418.jpg",
  "https://i.postimg.cc/6p1jWFn1/P-20170602-111435.jpg",
  "https://i.postimg.cc/y8Npz7gZ/P-20170602-111447.jpg",
];

function HomePage() {
  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (src) => {
    setCurrentIndex(images.indexOf(src));
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div>
      <div className="profile-div">
        <br />
        <h1>Üle 15. aasta erialast kogemust.</h1>
        <br />
        <div className="profile-img-container">
          <img
            alt="pilt suurest toast, kus on suur tuba, suur diivan, suur laud ja suur teler"
            className="profile-image"
            src="./Elutuba.jpg"
          />
        </div>
      </div>
      <div className="projects">
        <h2 className="project-header" id="projects">
          Tehtud tööd
        </h2>
        <div className="tehtud-tööd">
          {images.map((src, i) => (
            <div className="tehtud-töö-container" key={i}>
              <img src={src} alt="" onClick={() => handleImageClick(src)} />
            </div>
          ))}
        </div>
      </div>
      <br />
      <br /> <br />
      <div className="contact-container">
        <div className="contact-me">
          <h2 id="contacts">Kirjuta oma plaanist!</h2> <br />
          <Contact />
        </div>
      </div>
      <br />
      <Modal
        show={showModal}
        onHide={handleClose}
        centered
        dialogClassName="custom-modal-width"
        contentClassName="custom-modal-content"
      >
        <Modal.Body
          style={{
            padding: 0,
            background: "black",
            borderRadius: "5px",
            position: "relative",
          }}
        >
          <button
            onClick={handleClose}
            style={{
              position: "absolute",
              right: "10px",
              top: "10px",
              background: "rgba(255, 255, 255, 0.7)",
              border: "none",
              borderRadius: "50%",
              width: "30px",
              height: "30px",
              cursor: "pointer",
              zIndex: 1000,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ✕
          </button>
          {/* Vasak nool */}
          <button
            onClick={handlePrev}
            style={{
              position: "absolute",
              left: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(255,255,255,0.7)",
              border: "none",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              cursor: "pointer",
              zIndex: 1000,
              fontSize: "1.5em",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            aria-label="Eelmine pilt"
          >
            &#8592;
          </button>
          {/* Pilt */}
          <img
            src={images[currentIndex]}
            alt=""
            style={{
              width: "1000px",
              height: "auto",
              display: "block",
              maxHeight: "90vh",
              objectFit: "contain",
              margin: "0 auto",
            }}
          />
          {/* Parem nool */}
          <button
            onClick={handleNext}
            style={{
              position: "absolute",
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(255,255,255,0.7)",
              border: "none",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              cursor: "pointer",
              zIndex: 1000,
              fontSize: "1.5em",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            aria-label="Järgmine pilt"
          >
            &#8594;
          </button>
        </Modal.Body>
      </Modal>
      <Footer />
    </div>
  );
}

export default HomePage;
