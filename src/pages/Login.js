
const Login = () => {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="card p-4 shadow-sm" style={{ width: '100%', maxWidth: '400px' }}>
        <h2 className="text-center mb-4 text-primary">HexaShield Login</h2>

        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email" />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Enter password" />
          </div>

          <div className="d-grid mb-3">
            <button type="submit" className="btn btn-primary">Login</button>
          </div>

          <div className="text-center">
            <small>Don't have an account? <a href="/register">Register here</a></small>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
