import React from 'react';

const Contact = () => {
  return (
    <div className="container mt-5 py-5">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center mb-5">
          <h2 className="fw-bold display-6">Let's Work Together</h2>
          <p className="text-muted">Punya ide gila? Mari kita diskusikan bersama.</p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card border-0 shadow-lg p-4 p-md-5 rounded-5 bg-white">
            <form className="row g-4">
              <div className="col-md-6">
                <label className="form-label fw-bold small">NAMA LENGKAP</label>
                <input type="text" className="form-control form-control-lg bg-light border-0 fs-6" placeholder="Herdyawan Ismail" />
              </div>
              <div className="col-md-6">
                <label className="form-label fw-bold small">EMAIL ADDRESS</label>
                <input type="email" className="form-control form-control-lg bg-light border-0 fs-6" placeholder="herdy@example.com" />
              </div>
              <div className="col-12">
                <label className="form-label fw-bold small">PESAN ANDA</label>
                <textarea className="form-control form-control-lg bg-light border-0 fs-6" rows="4" placeholder="Ceritakan tentang proyek Anda..."></textarea>
              </div>
              <div className="col-12 text-center">
                <button type="submit" className="btn btn-primary btn-lg rounded-pill px-5 shadow-sm fw-bold">Kirim Pesan Sekarang</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;