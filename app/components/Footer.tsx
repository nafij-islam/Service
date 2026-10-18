import Link from 'next/link';
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
  IoCall,
  IoMail,
  IoLocation,
} from 'react-icons/io5';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="contact">
      <div className="footer-top section">
        <div className="container">
          <div className="footer-brand">
            <Link href="#top" className="logo">
              Desinic
            </Link>

            <p className="text">
              Maecenas pellentesque placerat quam, in finibus nisl tincidunt sed. Aliquam magna augue,
              malesuada ut feugiat eget, cursus eget felis.
            </p>

            <ul className="social-list">
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="Visit our Facebook page"
                >
                  <IoLogoFacebook aria-hidden="true" />
                </a>
              </li>

              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="Visit our Instagram profile"
                >
                  <IoLogoInstagram aria-hidden="true" />
                </a>
              </li>

              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="Visit our Twitter profile"
                >
                  <IoLogoTwitter aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Our links</p>
            </li>

            <li>
              <Link href="#home" className="footer-link">
                Home
              </Link>
            </li>

            <li>
              <Link href="#about" className="footer-link">
                About Us
              </Link>
            </li>

            <li>
              <Link href="#services" className="footer-link">
                Services
              </Link>
            </li>

            <li>
              <Link href="#features" className="footer-link">
                Team
              </Link>
            </li>

            <li>
              <Link href="#blog" className="footer-link">
                Blog
              </Link>
            </li>
          </ul>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Our Services</p>
            </li>

            <li>
              <Link href="#services" className="footer-link">
                Strategy & Research
              </Link>
            </li>

            <li>
              <Link href="#services" className="footer-link">
                Web Development
              </Link>
            </li>

            <li>
              <Link href="#services" className="footer-link">
                Web Solution
              </Link>
            </li>

            <li>
              <Link href="#services" className="footer-link">
                Digital Marketing
              </Link>
            </li>

            <li>
              <Link href="#services" className="footer-link">
                App Design
              </Link>
            </li>
          </ul>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Other links</p>
            </li>

            <li>
              <a href="#faq" className="footer-link">
                FAQ
              </a>
            </li>

            <li>
              <a href="#portfolio" className="footer-link">
                Portfolio
              </a>
            </li>

            <li>
              <a href="#privacy" className="footer-link">
                Privacy Policy
              </a>
            </li>

            <li>
              <a href="#terms" className="footer-link">
                Terms & Conditions
              </a>
            </li>

            <li>
              <a href="#support" className="footer-link">
                Support
              </a>
            </li>
          </ul>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Contact Us</p>
            </li>

            <li className="footer-item">
              <div className="footer-item-icon">
                <IoCall aria-hidden="true" />
              </div>

              <div>
                <a href="tel:+2484214313" className="footer-item-link">
                  +248-421-4313
                </a>
                <a href="tel:+2486871365" className="footer-item-link">
                  +248-687-1365
                </a>
              </div>
            </li>

            <li className="footer-item">
              <div className="footer-item-icon">
                <IoMail aria-hidden="true" />
              </div>

              <div>
                <a href="mailto:info@desinic.com" className="footer-item-link">
                  info@desinic.com
                </a>
                <a href="mailto:help@desinic.com" className="footer-item-link">
                  help@desinic.com
                </a>
              </div>
            </li>

            <li className="footer-item">
              <div className="footer-item-icon">
                <IoLocation aria-hidden="true" />
              </div>

              <address className="footer-item-link">
                Pontiac, Michigan, United States of America
              </address>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright">
          &copy; {currentYear}{' '}
          <Link href="#top" className="copyright-link">
            codewithsadee / Desinic
          </Link>
          . All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
