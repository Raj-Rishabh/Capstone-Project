import React from "react";

function Footer() {
  return (
    <footer className="py-5 text-light back" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-6 col-md-2 mb-3">
            <h5>Quik Links</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#g" class="nav-link p-0 text-muted">
                  About us
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#g" class="nav-link p-0 text-muted">
                  Our Teams
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#g" class="nav-link p-0 text-muted">
                  Careers
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#g" class="nav-link p-0 text-muted">
                  Testimonials
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#g" class="nav-link p-0 text-muted">
                  Work Culture
                </a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5>Quick Links</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#g" className="nav-link p-0 text-muted">
                  Blogs
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#g" className="nav-link p-0 text-muted">
                  Programs
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#g" className="nav-link p-0 text-muted">
                  Gallery
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#g" className="nav-link p-0 text-muted">
                  Franchise
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#g" className="nav-link p-0 text-muted">
                  Events
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-5 offset-md-1 mb-3">
            <form>
              <h5>Newsletter</h5>
              <p>
                Sign up for the latest news, new products, tips and offers from
                ArtStore Online. Plus get 10% off your next order over $50!.
              </p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <input
                  id="newsletter1"
                  type="text"
                  className="form-control"
                  placeholder="Email address"
                  autocomplete="off"
                />
                <button className="btn btn card-btn" type="button">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
          <p>&copy; 2023 Company, Inc. All rights reserved.</p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3">
              <a
                className="social-icon"
                href="https://www.instagram.com/i_am_rishabhraj/"
              >
                <i className=" fab fa-instagram"></i>
                <svg width="24" height="24"></svg>
              </a>
            </li>

            <li className="ms-3">
              <a className="social-icon" href="https://wa.me/916207777090">
                <i className="fab fa-whatsapp"></i>
                <svg className="bi" width="24" height="24"></svg>
              </a>
            </li>
            <li className="ms-3">
              <a className="social-icon" href="tel:916207777090">
                <i className=" fas fa-phone"></i>
                <svg className="bi" width="24" height="24"></svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
