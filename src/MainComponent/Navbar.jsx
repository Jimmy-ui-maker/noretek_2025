import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md shadow-sm py-1 justify-content-center align-content-around">
      <div className="container">
        <img
          src="/assets/logo.png"
          className=" rounded-2"
          width={300}
          height={70}
          alt=""
        />
       
        <button
          className="navbar-toggler shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main-nav"
          aria-controls="main-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-center align-center mx-2"
          id="main-nav"
        >
          <ul className="navbar-nav">
            <li className="nav-item mx-1">
              <a href="/" className="nav-link fw-bold">
               Home
              </a>
            </li>
            <li className="nav-item mx-1">
              <a href="/about" className="nav-link fw-bold">
                About Us
              </a>
            </li>
            <li className="nav-item mx-1">
              <a href="/contact" className="nav-link fw-bold">
                Contact Us
              </a>
            </li>
            <li className="nav-item mx-1">
              <a href="/services" className="nav-link fw-bold">
                Services
              </a>
            </li>

            <li className="nav-item mx-1">
              <a href="/customer-support" className="nav-link fw-bold">
                Customer Support
              </a>
            </li>
            <li className="nav-item mx-1">
              <a href="/customer-signup" className="nav-link fw-bold btnStyle">
                Register
              </a>
            </li>
            <li className="nav-item mx-1">
              <a href="/customer-signin" className="nav-link fw-bold">
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
