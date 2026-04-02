import React from 'react';

const Home = () => {
  return (
    <div className="container mt-5">
      <div className="row align-items-center py-5">
        <div className="col-md-7">
          <span className="badge bg-primary-soft text-primary mb-2 px-3 py-2 rounded-pill shadow-sm">New Portfolio 2026</span>
          <h1 className="display-3 fw-bold mb-3">
            Creative <span className="text-gradient">Solutions</span> for Your Business
          </h1>
          <p className="lead text-muted mb-4">
            Halo, saya <strong>Herdyawan Ismail Nurcahyo</strong>. Membangun pengalaman digital yang responsif, modern, dan berfokus pada kebutuhan pengguna dengan teknologi terbaru.
          </p>
          <div className="d-flex gap-3">
            <button className="btn btn-primary btn-lg rounded-pill px-4 shadow">Mulai Proyek</button>
            <button className="btn btn-outline-dark btn-lg rounded-pill px-4">Portfolio</button>
          </div>
        </div>
        <div className="col-md-5 text-center mt-5 mt-md-0">
          <div className="position-relative">
            <div className="position-absolute top-50 start-50 translate-middle bg-primary rounded-circle blur-30" style={{width: '300px', height: '300px', opacity: '0.1', filter: 'blur(50px)'}}></div>
            <img 
              src="https://www.radicalcompliance.com/wp-content/uploads/2020/07/mrpotatohead.jpg" 
              alt="Hero" 
              className="img-fluid rounded-4 shadow-lg position-relative"
              style={{ width: '350px', borderRadius: '30px' }}
            />
          </div>
        </div>
      </div>

      <div className="row g-4 mt-5">
        {[
          { title: "Web Design", icon: "🎨", desc: "Desain UI/UX modern dan minimalis." },
          { title: "Development", icon: "💻", desc: "Koding bersih dengan performa tinggi.", active: true },
          { title: "Consultancy", icon: "🚀", desc: "Strategi digital untuk pertumbuhan cepat." }
        ].map((item, i) => (
          <div className="col-md-4" key={i}>
            <div className={`card h-100 p-4 modern-card shadow-sm ${item.active ? 'bg-primary text-white' : 'bg-white'}`}>
              <div className="fs-1 mb-3">{item.icon}</div>
              <h4 className="fw-bold">{item.title}</h4>
              <p className={item.active ? 'text-white-50' : 'text-muted'}>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;