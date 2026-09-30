import motichLogo from "../../assets/logo/motich-logo-1.png";

import "./Solutions.css";

function Solutions() {
  const depthLayers = Array.from({ length: 16 });

  return (
    <section className="placeholder-page">
      <div className="placeholder-page-content">
        <p className="placeholder-page-eyebrow">MoticH</p>

        <div className="solutions-logo-scene">
          <div className="solutions-logo-distance">
            <div className="solutions-logo-spinner">
              <div className="solutions-logo-3d">
                {depthLayers.map((_, index) => (
                  <img
                    key={index}
                    src={motichLogo}
                    alt=""
                    aria-hidden="true"
                    className="solutions-logo-depth"
                    style={{
                      "--depth": `${-(index + 1) * 2}px`,
                    }}
                  />
                ))}

                <img
                  src={motichLogo}
                  alt="MoticH"
                  className="solutions-logo-front"
                />

                <img
                  src={motichLogo}
                  alt=""
                  aria-hidden="true"
                  className="solutions-logo-back"
                />
              </div>
            </div>
          </div>

          <div className="solutions-logo-shadow" aria-hidden="true" />
        </div>

        <h1>Meet the Solutions</h1>

        <p>
          We’re preparing this page to introduce the people behind MoticH. More
          information is coming soon.
        </p>
      </div>
    </section>
  );
}

export default Solutions;
