import Image from 'next/image';
import {
  IoBulbOutline,
  IoColorPaletteOutline,
  IoCodeSlashOutline,
  IoRocketOutline,
} from 'react-icons/io5';

export default function Features() {
  return (
    <section className="section features" id="features">
      <div className="container">
        <h2 className="h2 section-title underline">Our Features</h2>

        <ul className="features-list">
          <li>
            <div className="features-card">
              <div className="icon">
                <IoBulbOutline aria-hidden="true" />
              </div>

              <div className="content">
                <h3 className="h3 title">Idea & Analysis</h3>
                <p className="text">
                  Praesent tincidunt congue est ut hendrerit. Pellentesque et eros sit amet ipsum venenatis.
                </p>
              </div>
            </div>
          </li>

          <li>
            <div className="features-card">
              <div className="icon">
                <IoColorPaletteOutline aria-hidden="true" />
              </div>

              <div className="content">
                <h3 className="h3 title">Designing</h3>
                <p className="text">
                  Praesent tincidunt congue est ut hendrerit. Pellentesque et eros sit amet ipsum venenatis.
                </p>
              </div>
            </div>
          </li>
        </ul>

        <figure className="features-banner">
          <Image
            src="/images/feautres-banner.png"
            width={369}
            height={318}
            loading="lazy"
            alt="Desinic Workflow Features Banner"
            className="w-100 banner-animation"
          />
        </figure>

        <ul className="features-list">
          <li>
            <div className="features-card">
              <div className="icon">
                <IoCodeSlashOutline aria-hidden="true" />
              </div>

              <div className="content">
                <h3 className="h3 title">Development</h3>
                <p className="text">
                  Praesent tincidunt congue est ut hendrerit. Pellentesque et eros sit amet ipsum venenatis.
                </p>
              </div>
            </div>
          </li>

          <li>
            <div className="features-card">
              <div className="icon">
                <IoRocketOutline aria-hidden="true" />
              </div>

              <div className="content">
                <h3 className="h3 title">Testing & Launching</h3>
                <p className="text">
                  Praesent tincidunt congue est ut hendrerit. Pellentesque et eros sit amet ipsum venenatis.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
