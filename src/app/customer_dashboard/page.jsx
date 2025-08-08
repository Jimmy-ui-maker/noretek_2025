// UserDashboard.jsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function UserDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [email, setEmail] = useState("");

  const router = useRouter();

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  useEffect(() => {
    const storedEmail = localStorage.getItem("userEmail");
    if (storedEmail) setEmail(storedEmail);
  }, []);

  // ✅ logout function
  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    router.push("/customer-signin"); // redirect to login
  };

  return (
    <>
      {/* Top Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid d-flex align-items-center justify-content-between flex-wrap px-2">
          {/* Sidebar toggle for small screens */}
          <button
            className="btn text-white me-3 d-lg-none"
            onClick={toggleSidebar}
          >
            <i className="bi bi-list"></i>
          </button>

          {/* Brand */}
          <a className="navbar-brand text-white me-auto" href="#">
            Dashboard
          </a>

          {/* Nav Links */}
          <ul className="navbar-nav d-flex flex-row ms-auto">
            <li className="nav-item mx-2">
              <a className="nav-link text-white text-truncate" href="">
                <i className="bi bi-person me-2"></i>
                {/** 
                {email}
                */}
              </a>
            </li>
            <li className="nav-item mx-2">
              {/** 
              <button className="btn btn-outline-light" onClick={handleLogout}>
                <i className="bi bi-box-arrow-right me-1"></i>
              </button>
              */}
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Layout */}
      <div className="d-flex">
        {/* Sidebar */}
        <div
          className={`sidebar bg-primary text-white p-2 ${
            sidebarOpen ? "d-block" : "d-none"
          } d-lg-block`}
          style={{ minHeight: "100vh", width: "250px" }}
        >
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a className="nav-link text-white" href="">
                <i className="bi bi-cash me-2"></i>Trans... History
              </a>
            </li>
            <li className="nav-item mb-2">
              <a className="nav-link text-white" href="#">
                <i className="bi bi-wallet2 me-2"></i>Credit Wallet
              </a>
            </li>
            <li className="nav-item mb-2">
              <a className="nav-link text-white" href="#">
                <i className="bi bi-piggy-bank me-2"></i>Wallet Balance
              </a>
            </li>
            <li className="nav-item mb-2">
              <a className="nav-link text-white" href="#">
                <i className="bi bi-credit-card me-2"></i>Buy Token
              </a>
            </li>
            <li className="nav-item mb-2">
              <a className="nav-link text-white" href="#">
                <i className="bi bi-phone me-2"></i>Contact Support
              </a>
            </li>
            <li className="nav-item mt-3">
              <a className="nav-link text-white" href="#">
                <i className="bi bi-gear me-2"></i>Settings
              </a>
            </li>
            {/* Add more nav items here */}
          </ul>
        </div>

        {/* Main Content */}
        <div id="main" className="flex-grow-1 p-4 bg-light">
          <div className="container">
            {/* Dashboard Intro */}
            <div className="text-center mb-5">
              <h2 className="mb-3">🎉 Welcome to Your Dashboard</h2>
              <p className="lead">This is your secure user area.</p>
              <p className="text-muted">
                You can manage your wallet, tokens and settings from the
                sections below.
              </p>
            </div>

            {/* Responsive Cards */}
            <div className="row g-4">
              {/* Create Wallet */}
              <div className="col-12 col-lg-6">
                <div className="card shadow-sm h-100">
                  <div className="card-body d-flex align-items-center">
                    <i className="bi bi-wallet2 fs-1 text-primary me-3"></i>
                    <div>
                      <h5 className="card-title mb-1">Credit Wallet</h5>
                      <p className="card-text text-muted">
                        Set up a new crypto wallet.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Wallet Balance */}
              <div className="col-12 col-lg-6">
                <div className="card shadow-sm h-100">
                  <div className="card-body d-flex align-items-center">
                    <i className="bi bi-piggy-bank fs-1 text-primary me-3"></i>
                    <div>
                      <h5 className="card-title mb-1">Wallet Balance</h5>
                      <p className="card-text text-muted">$0.00</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Buy Token */}
              <div className="col-12 col-lg-6">
                <div className="card shadow-sm h-100">
                  <div className="card-body d-flex align-items-center">
                    <i className="bi bi-credit-card fs-1 text-primary me-3"></i>
                    <div>
                      <h5 className="card-title mb-1">Buy Token (Vend)</h5>
                      <p className="card-text text-muted">
                        Click here to buy token
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Credit Wallet */}
              <div className="col-12 col-lg-6">
                <div className="card shadow-sm h-100">
                  <div className="card-body d-flex align-items-center">
                    <i className="bi bi-credit-card fs-1 text-primary me-3"></i>
                    <div>
                      <h5 className="card-title mb-1">Credit Wallet</h5>
                      <p className="card-text text-muted">
                        Add funds to your wallet.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Settings */}
              <div className="col-12">
                <div className="card shadow-sm h-100">
                  <div className="card-body d-flex align-items-center">
                    <i className="bi bi-gear fs-1 text-primary me-3"></i>
                    <div>
                      <h5 className="card-title mb-1">Settings</h5>
                      <p className="card-text text-muted">
                        Manage your account settings.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
