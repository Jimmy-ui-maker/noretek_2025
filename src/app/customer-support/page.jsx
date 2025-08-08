"use client"

import Link from "next/link"
import Image from "next/image"
import React from "react"

const sidebarItems = [
  { label: "Report", href: "/reports" },
  { label: "Support term", href: "/support-term" },
  { label: "Message", href: "/message" },
]

const supportData = [
  {
    sn: 1,
    date: "05/21/2025",
    customerName: "Abdul Abbas",
    customerId: "NTP-C-05754",
    homeId: "NTP-D-0044",
    meterId: "NTP-M-222",
    compliantType: "Payment",
    statement: "I have request to refilling my gas, I mak...",
    supportTicket: "TK/341753",
    status: "Attending",
  },
  {
    sn: 2,
    date: "05/21/2025",
    customerName: "Joe john",
    customerId: "NTP-C-15754",
    homeId: "NTP-D-0064",
    meterId: "NTP-M-202",
    compliantType: "Payment",
    statement: "I have request to refilling my gas, I mak...",
    supportTicket: "TK/348753",
    status: "Awaiting",
  },
  {
    sn: 3,
    date: "05/21/2025",
    customerName: "Aliyu Yusuf",
    customerId: "NTP-C-35754",
    homeId: "NTP-D-0344",
    meterId: "NTP-M-232",
    compliantType: "Payment",
    statement: "I have request to refilling my gas, I mak...",
    supportTicket: "TK/340753",
    status: "Resolved",
  },
  {
    sn: 4,
    date: "05/21/2025",
    customerName: "Aliyu Yusuf",
    customerId: "NTP-C-35754",
    homeId: "NTP-D-0344",
    meterId: "NTP-M-232",
    compliantType: "Payment",
    statement: "I have request to refilling my gas, I mak...",
    supportTicket: "TK/340753",
    status: "Not Resolving",
  },
]

function getStatusBadge(status) {
  let className = "badge rounded-pill text-bg-secondary"

  switch (status) {
    case "Attending":
      className = "badge rounded-pill text-bg-warning"
      break
    case "Awaiting":
      className = "badge rounded-pill text-bg-primary"
      break
    case "Resolved":
      className = "badge rounded-pill text-bg-success"
      break
    case "Not Resolving":
      className = "badge rounded-pill text-bg-danger"
      break
  }

  return <span className={className}>{status}</span>
}

export default function CustomerSupport() {
  return (
    <div className="min-vh-100 bg-light">
      {/* Header */}
      <header className="bg-white border-bottom py-3 px-4 d-flex align-items-center">
        <Link href="/" className="d-flex align-items-center text-decoration-none text-dark">
          <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: "40px", height: "40px" }}>
            <span className="text-white fw-bold">N</span>
          </div>
          <Image
            src="/assets/logo.png"
            alt="Noretek Energy Ltd"
            width={240}
            height={80}
            className="img-fluid"
            priority
          />
        </Link>
      </header>

      <div className="d-flex">
        {/* Sidebar */}
        <aside className="bg-white border-end p-4" style={{ width: "250px", minHeight: "100vh" }}>
          <nav className="nav flex-column">
            {sidebarItems.map((item, index) => (
              <Link key={index} href={item.href} className="nav-link text-dark px-0 py-2">
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-grow-1 p-4">
          <div className="mb-4">
            <h2 className="h4 fw-bold">Customer Support</h2>
            <p className="text-muted">May 20th Tuesday, 2025</p>
          </div>

          {/* Filter Cards */}
          <div className="row g-3 mb-4">
            <div className="col-md-4">
              <div className="card p-3">
                <label className="text-muted small mb-1">Home ID</label>
                <div className="fw-semibold">NTP-D-0044</div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-3">
                <label className="text-muted small mb-1">Customer ID</label>
                <div className="fw-semibold">NTP-C-05754</div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-3">
                <label className="text-muted small mb-1">Meter ID</label>
                <div className="fw-semibold">NTP-M-222</div>
              </div>
            </div>
          </div>

          {/* Support Table */}
          <div className="card">
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table table-striped mb-0">
                  <thead className="table-primary">
                    <tr>
                      <th>S/N</th>
                      <th>Date</th>
                      <th>Customer Name</th>
                      <th>Customer ID</th>
                      <th>Home ID</th>
                      <th>Meter ID</th>
                      <th>Compliant Type</th>
                      <th>Statement</th>
                      <th>Support Ticket</th>
                    </tr>
                  </thead>
                  <tbody>
                    {supportData.map((row) => (
                      <tr key={row.sn}>
                        <td>{row.sn}</td>
                        <td>{row.date}</td>
                        <td>{row.customerName}</td>
                        <td>{row.customerId}</td>
                        <td>{row.homeId}</td>
                        <td>{row.meterId}</td>
                        <td>{row.compliantType}</td>
                        <td className="text-truncate" style={{ maxWidth: "200px" }}>
                          {row.statement}
                        </td>
                        <td>
                          <div className="d-flex flex-column gap-1">
                            <span>{row.supportTicket}</span>
                            {getStatusBadge(row.status)}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
