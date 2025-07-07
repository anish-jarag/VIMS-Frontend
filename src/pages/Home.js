import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Home = () => {
  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Hero Banner */}
      <section className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="display-4 fw-bold">Welcome to HexaShield</h1>
          <p className="lead">Protect your journey with trusted vehicle insurance plans.</p>
          <button className="btn btn-light btn-lg mt-3">Explore Policies</button>
        </div>
      </section>

      {/* Why Insurance Matters */}
      <section className="container my-5">
        <h2 className="text-center mb-4">Why Vehicle Insurance Matters</h2>
        <div className="row text-center">
          <div className="col-md-4 mb-3">
            <i className="bi bi-shield-lock fs-1 text-primary"></i>
            <h5 className="mt-2">Legal Protection</h5>
            <p>Maintain compliance with road regulations and avoid fines.</p>
          </div>
          <div className="col-md-4 mb-3">
            <i className="bi bi-wrench fs-1 text-primary"></i>
            <h5 className="mt-2">Financial Safety</h5>
            <p>Covers accidental damage, theft, natural calamities, and more.</p>
          </div>
          <div className="col-md-4 mb-3">
            <i className="bi bi-calendar-check fs-1 text-primary"></i>
            <h5 className="mt-2">No Claim Bonus</h5>
            <p>Save more each year by maintaining a claim-free record.</p>
          </div>
        </div>
      </section>

      {/* Insurance Plan Cards */}
      <div className="container my-5">
        <h2 className="text-center mb-4">Available Insurance Plans</h2>
        <div className="row">
          <div className="col-md-3 mb-4">
            <div className="card shadow-sm h-100">
              <img src="/images/car.webp" className="card-img-top" alt="Car" />
              <div className="card-body">
                <h5 className="card-title">Car Insurance</h5>
                <p className="card-text">Comprehensive protection for your four-wheeler.</p>
              </div>
            </div>
          </div>
           <div className="col-md-3 mb-4">
            <div className="card shadow-sm h-100">
              <img src="/images/van.jpg" className="card-img-top" alt="Van" />
              <div className="card-body">
                <h5 className="card-title">Camper Van Insurance</h5>
                <p className="card-text">Travel freely with full coverage for your camper van.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card shadow-sm h-100">
              <img src="/images/bike.webp" className="card-img-top" alt="Bike" />
              <div className="card-body">
                <h5 className="card-title">Bike Insurance</h5>
                <p className="card-text">Affordable coverage for your two-wheeler.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card shadow-sm h-100">
              <img src="/images/truck.avif" className="card-img-top" alt="Van" />
              <div className="card-body">
                <h5 className="card-title">Truck Insurance</h5>
                <p className="card-text">Transport your goods freely with full coverage for your truck.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-primary text-white text-center py-4">
        <div className="container d-flex justify-content-around flex-wrap">
          <div className="mb-3">
            <h2>8,000+</h2>
            <p>Active Policies</p>
          </div>
          <div className="mb-3">
            <h2>1,200+</h2>
            <p>Claims Served</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
