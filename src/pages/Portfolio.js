import React, { useState } from 'react';

const Portfolio = () => {
  // Data Proyek Lengkap dengan Spesifikasi OSMDroid
  const projects = [
    { 
      id: 1, 
      title: "Android Absensi (OSMDroid)", 
      category: "Mobile", 
      img: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=500&q=80",
      desc: "Aplikasi absensi karyawan berbasis Android menggunakan library OSMDroid (OpenStreetMap). Fitur utama meliputi Geolocation tracking, penentuan radius titik absen (Geo-fencing), dan pencatatan waktu kehadiran secara real-time.",
      tech: ["Java", "OSMDroid", "Android Studio", "Firebase Realtime DB"],
      link: "https://github.com/HRD2305"
    },
    { 
      id: 2, 
      title: "Web E-Commerce", 
      category: "Web", 
      img: "https://images.unsplash.com/photo-1557821552-17105176677c?w=500&q=80",
      desc: "Platform toko online yang mendukung manajemen produk, sistem keranjang belanja, dan dashboard transaksi untuk pengguna.",
      tech: ["React.js", "Node.js", "Bootstrap", "MySQL"],
      link: "https://github.com/HRD2305"
    },
    { 
      id: 3, 
      title: "Web Absensi Karyawan", 
      category: "Web", 
      img: "https://images.unsplash.com/photo-1554224155-1696413565d3?w=500&q=80",
      desc: "Sistem informasi manajemen kehadiran karyawan berbasis web untuk admin perusahaan dalam memantau data kehadiran harian.",
      tech: ["PHP", "CodeIgniter", "Bootstrap", "MySQL"],
      link: "https://github.com/HRD2305"
    },
    { 
      id: 4, 
      title: "Weather Forecasting ML", 
      category: "Machine Learning", 
      img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&q=80",
      desc: "Implementasi Machine Learning untuk memprediksi pola cuaca berdasarkan dataset historis menggunakan library analisis data.",
      tech: ["Python", "Scikit-Learn", "Pandas"],
      link: "https://github.com/HRD2305"
    },
    { 
      id: 5, 
      title: "Tic-Tac-Toe & Connect Four", 
      category: "Python", 
      img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500&q=80",
      desc: "Game strategi klasik yang dikembangkan dengan logika pemrograman Python dan algoritma AI sederhana.",
      tech: ["Python", "Pygame", "AI Logic"],
      link: "https://github.com/HRD2305"
    }
  ];

  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="container mt-5 py-4">
      <div className="text-center mb-5">
        <h2 className="display-5 fw-bold text-gradient">My Creative Works</h2>
        <p className="text-muted">Eksplorasi pengembangan aplikasi Mobile, Web, dan Machine Learning.</p>
      </div>

      {/* Filter Buttons */}
      <div className="d-flex justify-content-center flex-wrap gap-2 mb-5">
        {['All', 'Web', 'Mobile', 'Python', 'Machine Learning'].map((cat) => (
          <button 
            key={cat}
            onClick={() => setFilter(cat)}
            className={`btn rounded-pill px-4 fw-600 transition-all ${filter === cat ? 'btn-primary shadow' : 'btn-outline-secondary border-0'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="row g-4">
        {filteredProjects.map((project) => (
          <div className="col-md-4 col-sm-6" key={project.id}>
            <div className="card h-100 border-0 shadow-sm modern-card rounded-4 overflow-hidden">
              <div className="position-relative">
                <img src={project.img} className="card-img-top" alt={project.title} style={{ height: '200px', objectFit: 'cover' }} />
                <div className="position-absolute top-0 end-0 m-3">
                    <span className="badge bg-primary shadow-sm">{project.category}</span>
                </div>
              </div>
              <div className="card-body p-4 d-flex flex-column text-start">
                <h5 className="fw-bold">{project.title}</h5>
                <p className="text-muted small mb-4">{project.desc.substring(0, 90)}...</p>
                <div className="mt-auto">
                    <button 
                        className="btn btn-primary btn-sm rounded-pill px-4"
                        onClick={() => setSelectedProject(project)}
                        data-bs-toggle="modal" 
                        data-bs-target="#projectModal"
                    >
                        View Details
                    </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL VIEW DETAILS */}
      <div className="modal fade" id="projectModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content border-0 shadow-lg rounded-4 overflow-hidden">
            {selectedProject && (
              <>
                <div className="modal-header border-0 pb-0">
                  <h5 className="fw-bold fs-4">{selectedProject.title}</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body p-4 pt-2">
                  <div className="row">
                    <div className="col-md-6 mb-3 mb-md-0">
                      <img src={selectedProject.img} className="img-fluid rounded-4 shadow-sm border" alt="Detail" />
                    </div>
                    <div className="col-md-6">
                      <h6 className="fw-bold text-primary mb-2">Category: {selectedProject.category}</h6>
                      <p className="text-muted mb-4 small" style={{textAlign: 'justify'}}>{selectedProject.desc}</p>
                      
                      <h6 className="fw-bold mb-3 small text-uppercase ls-1">Tech Stack:</h6>
                      <div className="d-flex flex-wrap gap-2 mb-4">
                        {selectedProject.tech.map((t, index) => (
                          <span key={index} className="badge bg-light text-dark border px-3 py-2 rounded-pill fw-normal">
                            {t}
                          </span>
                        ))}
                      </div>
                      
                      <div className="d-grid">
                        <a href={selectedProject.link} target="_blank" rel="noreferrer" className="btn btn-dark rounded-pill py-2 fw-bold shadow-sm">
                          View on GitHub <i className="bi bi-github ms-2"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;