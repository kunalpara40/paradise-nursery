import Navbar from './Navbar';

function AboutUs() {
  return (
    <div className="about-page">
      <Navbar />

      {/* about-us-container is required by the Coursera rubric */}
      <div className="about-us-container">

        <div className="about-hero">
          <h1>About Paradise Nursery</h1>
          <p>
            Bringing the beauty and serenity of nature into every home and workspace,
            one plant at a time.
          </p>
        </div>

        <div className="about-content">
          <div className="about-grid">
            <div className="about-card">
              <div className="card-icon">🌱</div>
              <h2>Our Mission</h2>
              <p>
                At Paradise Nursery, our mission is to connect people with the
                natural world through carefully selected, high-quality indoor plants.
                We believe that every space — whether a cozy apartment or a
                bustling office — deserves a touch of green vitality. We source
                only the healthiest specimens and pair each plant with expert care
                guidance so your purchase thrives for years to come.
              </p>
            </div>

            <div className="about-card">
              <div className="card-icon">🔭</div>
              <h2>Our Vision</h2>
              <p>
                We envision a world where urban living seamlessly coexists with
                nature. Our goal is to be the most trusted name in houseplant
                retail by championing sustainable practices, promoting biodiversity,
                and educating plant lovers of all experience levels. By 2030 we aim
                to have helped plant over one million indoor gardens across the
                country.
              </p>
            </div>

            <div className="about-card">
              <div className="card-icon">🌿</div>
              <h2>Quality Commitment</h2>
              <p>
                Every plant in our catalogue is hand-inspected by our horticulture
                team before it reaches our warehouse. We partner exclusively with
                certified nurseries that adhere to ethical growing standards —
                no pesticides, no harmful chemicals. Your plants arrive
                healthy, packaged in eco-friendly materials, with a 30-day
                satisfaction guarantee.
              </p>
            </div>

            <div className="about-card">
              <div className="card-icon">🤝</div>
              <h2>Customer Promise</h2>
              <p>
                Your success as a plant parent is our success. That's why every
                order ships with a personalised care guide, and our dedicated
                support team is available seven days a week to answer questions,
                troubleshoot issues, or recommend the perfect plant for your
                lifestyle. We nurture relationships as carefully as we nurture roots.
              </p>
            </div>
          </div>

          <div className="benefits-section">
            <h2>🌍 Benefits of Indoor Plants</h2>
            <div className="benefits-grid">
              {[
                { icon: '💨', text: 'Improve air quality by filtering toxins and increasing oxygen levels' },
                { icon: '🧘', text: 'Reduce stress, anxiety, and promote mental well-being' },
                { icon: '🎨', text: 'Enhance the aesthetic appeal of any room or workspace' },
                { icon: '🔊', text: 'Reduce noise levels by absorbing and deflecting sound' },
                { icon: '💧', text: 'Increase room humidity, benefiting skin and respiratory health' },
                { icon: '⚡', text: 'Boost productivity, focus, and creativity in work environments' },
                { icon: '🌡️', text: 'Help regulate indoor temperature and reduce energy costs' },
                { icon: '😊', text: 'Elevate mood and create a sense of calm and purpose' },
              ].map((b, i) => (
                <div className="benefit-item" key={i}>
                  <span className="benefit-icon">{b.icon}</span>
                  <span className="benefit-text">{b.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="team-section">
            <h2>🌺 Our Story</h2>
            <p>
              Paradise Nursery was founded in 2018 by a small team of plant
              enthusiasts who believed that everyone deserves to experience the
              joy of a thriving indoor garden. What started as a weekend market
              stall has grown into a nationwide online store shipping thousands
              of plants each month. We remain a family-run business at heart,
              guided by our passion for plants and our commitment to the
              communities we serve.
            </p>
          </div>
        </div>
      </div>{/* /about-us-container */}
    </div>
  );
}

export default AboutUs;
