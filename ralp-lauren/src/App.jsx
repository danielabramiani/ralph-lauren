import React, { useState, useEffect } from 'react';
import './style.css';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({});

  useEffect(() => {
    document.body.classList.toggle('nav-open', menuOpen);
  }, [menuOpen]);

  const toggleDropdown = (name) => {
    setDropdownOpen((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <>
      <div className="overlay"></div>
      <header className={menuOpen ? 'open' : ''}>
        <h1 className="logo">Ralp Lauren</h1>
        <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
          <img
            src="https://www.svgrepo.com/show/509382/menu.svg"
            alt="hamburger-icon menu-open"
            className="open-menu"
          />
          <img
            src="https://static.thenounproject.com/png/659815-200.png"
            alt="times-icon menu-close"
            className="close-menu"
          />
        </div>

        <nav>
          <ul className="nav-links">
            <li className={`nav-link ${dropdownOpen['types'] ? 'link-open' : ''}`}>
              <a href="#" aria-label="features" className="dropdown" onClick={() => toggleDropdown('types')}>
                <span>Types</span>
                <img src="https://www.svgrepo.com/show/93813/up-arrow.svg" alt="arrow up" className="arrow-up" />
                <img src="https://www.svgrepo.com/show/80156/down-arrow.svg" alt="arrow down" className="arrow-down" />
              </a>
              <ul className="dropdown-list">
                <li className="dropdown-link"><a href="#world-cup"><span>T-shirt</span></a></li>
                <li className="dropdown-link"><a href="#fragance"><span>Fragance</span></a></li>
                <li className="dropdown-link"><a href="#coat"><span>Coat</span></a></li>
              </ul>
            </li>

            <li className={`nav-link ${dropdownOpen['company'] ? 'link-open' : ''}`}>
              <a href="#" aria-label="company" className="dropdown" onClick={() => toggleDropdown('company')}>
                <span>Company</span>
                <img src="https://www.svgrepo.com/show/93813/up-arrow.svg" alt="arrow up" className="arrow-up" />
                <img src="https://www.svgrepo.com/show/80156/down-arrow.svg" alt="arrow down" className="arrow-down" />
              </a>
              <ul className="dropdown-list">
                <li className="dropdown-link"><a href="#daniel">Our Team</a></li>
              </ul>
            </li>
          </ul>

          <div className="registration">
            <a href="#contact"><button>Contact Us</button></a>
          </div>
        </nav>
      </header>

      <main className="container">
        <picture>
          <source media="(min-width:465px) and (max-width:800px)" srcSet="./images/image-hero-desktop.png" />
          <img src="./image/Ralph-Lauren-logo.png" alt="hero image" />
        </picture>

        <section className="text-content">
          <h1>Make yourself better</h1>
          <p id="main-text">Get your dream clothes to be better version of yourself.</p>
          <button>Learn more</button>
          <div className="clients">
            <img src="./image/1_EN86b9SYkJlGByUz-3k_Fg.png" alt="databiz logo" />
          </div>
        </section>
      </main>

      <hr />

      <section className="features">
        {/** T-Shirt */}
        <article>
          <div className="left-col" id="world-cup">
            <div className="left-col-text">
              <h2>Polo T-Shirt</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis laboriosam voluptate.</p>
              <a href="#">Learn more</a>
            </div>
          </div>
          <div className="right-col">
            <picture>
              <source media="(max-width: 375px)" srcSet="./image/__57-removebg-preview.png" />
              <img src="./image/s7-1266710_lifestyle.webp" alt="transform image" />
            </picture>
          </div>
        </article>

        {/** Coat */}
        <article>
          <div className="right-col">
            <picture>
              <source media="(min-width: 280px)" srcSet="./image/60465-44_001_3f90625b-3ec1-4602-9f78-79c3c8a1b09c.webp" />
              <img src="./image/60465-44_001_3f90625b-3ec1-4602-9f78-79c3c8a1b09c.webp" alt="stand out image" />
            </picture>
          </div>
          <div className="left-col" id="coat">
            <div className="left-col-text">
              <h2>Coat</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, distinctio totam eius voluptatem.</p>
              <a href="#">Learn more</a>
            </div>
          </div>
        </article>

        {/** Fragance */}
        <article>
          <div className="left-col" id="fragance">
            <div className="left-col-text">
              <h2>Fragance</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis laboriosam voluptate.</p>
              <a href="#">Learn more</a>
            </div>
          </div>
          <div className="right-col">
            <picture>
              <source media="(max-width: 375px)" srcSet="./image/2609070.avif" />
              <img src="./image/2609070.avif" alt="transform image" />
            </picture>
          </div>
        </article>

        {/** Owner Section */}
        <hr />
        <article id="daniel">
          <div className="left-col">
            <div className="left-col-text">
              <h2>Owner1</h2>
              <h3>Daniel Abramiani</h3>
              <p>
                Web-developer<br />
                Skills: html, css, js, py
              </p>
            </div>
          </div>
          <div className="left-col">
            <div className="left-col-text">
              <h2>Owner2</h2>
              <h3>Lorem Ipsum</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </article>
      </section>
      <hr />
      <section id="contact" className="contact-section">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>
          Ready to get started? Feel free to reach out through the contact form.
        </p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h4>Contact Information</h4>
          <p>Fill up the form and our team will get back to you within 24 hours.</p>

          <div className="contact-row">
            <h6>557 520 755</h6>
          </div>
          <div className="contact-row">
            <h6>danielabramiani4@gmail.com</h6>
          </div>

        </div>

        <div className="contact-form">
          <form>
            <div className="form-row">
              <input type="text" name="first-name" placeholder="First Name" />
              <input type="text" name="last-name" placeholder="Last Name" />
            </div>

            <div className="form-row">
              <input type="email" name="email" placeholder="Email Address" />
            </div>

            <div className="form-row">
              <textarea name="message" placeholder="Your Message" />
            </div>

            <div className="form-button">
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </section>

      <hr />

      <div className="footer" id="footer">
        <div className="footer-card">
          <p>
            contact me: <br />
            +995 557 520 755<br />
            danielabramiani4@gmail.com<br />
            Made By Daniel Abramiani
          </p>
        </div>
      </div>
    </>
  );
};

export default App;
