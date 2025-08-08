"use client";
import React, { useState } from "react";
import Link from "next/link";

const CustomerSupportLanding = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="min-vh-100 bg-light d-flex flex-column">
      {/* Header */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
          <Link href="/" className="navbar-brand fw-bold">
            MySupportApp
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <i className={`bi ${menuOpen ? "bi-x-lg" : "bi-list"} fs-3`}></i>
          </button>

          <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link href="#" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#" className="nav-link">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#" className="nav-link">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="text-center py-5 bg-white shadow-sm">
        <div className="container">
          <h1 className="display-5 fw-bold mb-3">Need Help? We re Here for You</h1>
          <p className="lead mb-4">
            Connect with our support team to resolve any issues quickly and efficiently.
          </p>
          <Link href="#" className="btn btn-primary px-4 py-2">
            Get Support
          </Link>
        </div>
      </header>

      {/* Support Options */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card border-0 shadow-sm text-center">
                <div className="card-body">
                  <i className="bi bi-telephone fs-1 text-primary mb-3"></i>
                  <h5 className="card-title">Phone Support</h5>
                  <p className="card-text">Reach out to our 24/7 phone support team.</p>
                  <Link href="#" className="btn btn-outline-primary btn-sm">
                    Call Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-sm text-center">
                <div className="card-body">
                  <i className="bi bi-envelope fs-1 text-success mb-3"></i>
                  <h5 className="card-title">Email Support</h5>
                  <p className="card-text">Send us an email and we’ll get back to you shortly.</p>
                  <Link href="#" className="btn btn-outline-success btn-sm">
                    Email Us
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-sm text-center">
                <div className="card-body">
                  <i className="bi bi-chat-dots fs-1 text-info mb-3"></i>
                  <h5 className="card-title">Live Chat</h5>
                  <p className="card-text">Chat live with one of our support agents.</p>
                  <Link href="#" className="btn btn-outline-info btn-sm">
                    Start Chat
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="text-center mb-4">Why Choose Our Support?</h2>
          <div className="row g-4">
            {[
              { icon: "bi-check-circle", title: "Fast Response", text: "Quick and efficient help when you need it." },
              { icon: "bi-check-circle", title: "Experienced Team", text: "Support from industry professionals." },
              { icon: "bi-check-circle", title: "Available 24/7", text: "Anytime access to help and advice." },
            ].map((item, idx) => (
              <div key={idx} className="col-md-4 text-center">
                <i className={`bi ${item.icon} fs-1 text-primary mb-3`}></i>
                <h5>{item.title}</h5>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3 mt-auto">
        <div className="container">
          <p className="mb-0">&copy; {new Date().getFullYear()} MySupportApp. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default CustomerSupportLanding;
