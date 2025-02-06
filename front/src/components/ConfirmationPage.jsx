import React, { useState } from 'react';
import '../assets/css/style.css';
import '../assets/css/style-confirmation.css';

const ConfirmationPage = () => {
  const [isModalYapeOpen, setIsModalYapeOpen] = useState(false);
  const [isModalPlinOpen, setIsModalPlinOpen] = useState(false);

  // Funciones para abrir y cerrar los modales
  const openModalYape = () => {
    console.log("Opening Yape Modal"); // Verifica que se haga clic en el botón Yape
    setIsModalYapeOpen(true);
  };

  const closeModalYape = () => {
    console.log("Closing Yape Modal");
    setIsModalYapeOpen(false);
  };

  const openModalPlin = () => {
    console.log("Opening Plin Modal"); // Verifica que se haga clic en el botón Plin
    setIsModalPlinOpen(true);
  };

  const closeModalPlin = () => {
    console.log("Closing Plin Modal");
    setIsModalPlinOpen(false);
  };

  return (
    <div>
      {/* Confirmation Section */}
      <section className="confirmation" id="confirmation">
        <div className="container-card">
          <h1 className="heading">Pago con Yape o Plin</h1>
          <div className="btn-group">
            <button id="btn-yape" onClick={openModalYape}>Yape</button>
            <button id="btn-plin" onClick={openModalPlin}>Plin</button>
          </div>
          <div className="content">
            <p>Número a yapear: 966123567</p>
            <a href="https://wa.me/51966123567?text=Envío%20mi%20voucher%20de%20pago%20por%20Yape/Plin" className="btn" target="_blank">Enviar voucher</a>
          </div>
        </div>
      </section>

        {/* Yape Modal */}
        {isModalYapeOpen && (
        <div id="modalYape" className={`modal ${isModalYapeOpen ? 'open' : ''}`} onClick={closeModalYape}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModalYape}>&times;</span>
            <img src="images/qr_code.png" alt="Código QR Yape" />
            </div>
        </div>
        )}

        {/* Plin Modal */}
        {isModalPlinOpen && (
        <div id="modalPlin" className={`modal ${isModalPlinOpen ? 'open' : ''}`} onClick={closeModalPlin}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModalPlin}>&times;</span>
            <img src="images/plin.jpg" alt="Código QR Plin" />
            </div>
        </div>
        )}
    </div>
  );
};

export default ConfirmationPage;
