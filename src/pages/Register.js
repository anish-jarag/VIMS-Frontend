
const Register = () => {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="card p-4 shadow-sm" style={{ width: '100%', maxWidth: '500px' }}>
        <h2 className="text-center mb-4 text-primary">HexaShield Register</h2>

        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Full Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter your full name" />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email" />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Create a password" />
          </div>

          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
            <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm your password" />
          </div>

          <div className="d-grid mb-3">
            <button type="submit" className="btn btn-primary">Register</button>
          </div>

          <div className="text-center">
            <small>Already have an account? <a href="/login">Login here</a></small>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
