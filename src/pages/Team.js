import React from 'react';

const Team = () => {
  const members = [
    { name: "Herdyawan", role: "Fullstack Developer", img: "https://www.radicalcompliance.com/wp-content/uploads/2020/07/mrpotatohead.jpg" },
    { name: "Andika", role: "UI/UX Specialist", img: "https://static.wikia.nocookie.net/joey-slikk-alt/images/b/b1/ToyStory3MrPotatoHead.jpg" },
    { name: "Apta", role: "Frontend Lead", img: "https://static.wikia.nocookie.net/disney/images/5/55/Profile_-_Mr._Potato_Head.jpeg" }
  ];

  return (
    <div className="container mt-5">
      <div className="text-center mb-5">
        <h6 className="text-primary fw-bold text-uppercase ls-2">The Brains</h6>
        <h2 className="display-5 fw-bold">Our Creative Team</h2>
        <p className="text-muted mx-auto" style={{maxWidth: '500px'}}>Kombinasi antara seni dan teknologi untuk hasil yang luar biasa.</p>
      </div>
      <div className="row g-4">
        {members.map((member, index) => (
          <div className="col-md-4" key={index}>
            <div className="card modern-card text-center p-4 h-100 shadow-sm border-0">
              <div className="mx-auto mb-3 position-relative" style={{width: '120px', height: '120px'}}>
                <div className="position-absolute top-0 start-0 w-100 h-100 border border-primary rounded-circle border-dashed animate-spin-slow" style={{animation: 'spin 10s linear infinite', borderStyle: 'dashed !important'}}></div>
                <img 
                  src={member.img} 
                  className="rounded-circle w-100 h-100 p-2" 
                  style={{ objectFit: 'cover' }} 
                  alt={member.name} 
                />
              </div>
              <h5 className="fw-bold mb-1">{member.name}</h5>
              <p className="text-primary small mb-3">{member.role}</p>
              <div className="d-flex justify-content-center gap-2">
                <button className="btn btn-light btn-sm rounded-circle">in</button>
                <button className="btn btn-light btn-sm rounded-circle">git</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;