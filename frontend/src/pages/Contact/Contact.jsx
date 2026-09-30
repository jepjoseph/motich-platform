import motichLogo from "../../assets/logo/motich-logo-1.png";

import "./Contact.css";

function Contact() {
  const depthLayers = Array.from({ length: 16 });

  return (
    <section className="placeholder-page">
      <div className="placeholder-page-content">
        <p className="placeholder-page-eyebrow">MoticH</p>

        <div className="contact-logo-scene">
          <div className="contact-logo-distance">
            <div className="contact-logo-spinner">
              <div className="contact-logo-3d">
                {depthLayers.map((_, index) => (
                  <img
                    key={index}
                    src={motichLogo}
                    alt=""
                    aria-hidden="true"
                    className="contact-logo-depth"
                    style={{
                      "--depth": `${-(index + 1) * 2}px`,
                    }}
                  />
                ))}

                <img
                  src={motichLogo}
                  alt="MoticH"
                  className="contact-logo-front"
                />

                <img
                  src={motichLogo}
                  alt=""
                  aria-hidden="true"
                  className="contact-logo-back"
                />
              </div>
            </div>
          </div>

          <div className="contact-logo-shadow" aria-hidden="true" />
        </div>

        <h1>Meet the Contact</h1>

        <p>
          We’re preparing this page to introduce the people behind MoticH. More
          information is coming soon.
        </p>
      </div>
    </section>
  );
}

export default Contact;
