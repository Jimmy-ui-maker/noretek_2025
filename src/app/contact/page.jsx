'use client';

import React from 'react';

const ContactCard = () => {
  return (
    <div className="container py-5">
      <div className="row g-4">
        {/* Contact Information */}
        <div className="col-md-6">
          <div className="card shadow border-0">
            <div className="card-header bg-primary text-white">
              <h5 className="mb-0">Contact Information</h5>
            </div>
            <div className="card-body">
              <p className="mb-3">
                <i className="bi bi-telephone-fill me-2 text-primary"></i> +234 816 000 0000
              </p>
              <p className="mb-3">
                <i className="bi bi-envelope-fill me-2 text-primary"></i> info@example.com
              </p>
              <p className="mb-3">
                <i className="bi bi-geo-alt-fill me-2 text-primary"></i> No. 12 Example Street, Lagos
              </p>
              <p className="mb-0">
                <i className="bi bi-clock-fill me-2 text-primary"></i> Mon - Fri: 9am - 5pm
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="col-md-6">
          <div className="card shadow border-0">
            <div className="card-header bg-success text-white">
              <h5 className="mb-0">Send Us a Message</h5>
            </div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Your Name</label>
                  <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Your Email</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Your Message</label>
                  <textarea className="form-control" id="message" rows="4" placeholder="Type your message..."></textarea>
                </div>
                <button type="submit" className="btn btn-success w-100">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
