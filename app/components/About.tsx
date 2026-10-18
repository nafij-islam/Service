import Image from 'next/image';

const stats = [
  { value: '9875', label: 'Satisfied Clients' },
  { value: '7894', label: 'Project Launched' },
  { value: '65', label: 'Years Completed' },
];

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <figure className="about-banner">
          <Image
            src="/images/about-banner.png"
            width={700}
            height={532}
            loading="lazy"
            alt="About Desinic Agency Banner"
            className="w-100 banner-animation"
          />
        </figure>

        <div className="about-content">
          <h2 className="h2 section-title underline">Why Our Agency</h2>

          <p className="about-text">
            In dictum aliquam turpis lacinia iaculis. Fusce vel malesuada magna. Nulla vel maximus risus. Donec
            volutpat metus lacinia risus accumsan, ac bibendum libero efficitur. Pellentesque nec nisi sit amet
            magna tempus hendrerit ut a odio.
          </p>

          <p className="about-text">
            Praesent rhoncus commodo tortor, id pulvinar nisl blandit at. Nulla facilisi. Quisque turpis ante,
            vehicula condimentum arcu.
          </p>

          <ul className="stats-list">
            {stats.map((stat, idx) => (
              <li key={idx} className="stats-card">
                <p className="h3 stats-title">{stat.value}</p>
                <p className="stats-text">{stat.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
