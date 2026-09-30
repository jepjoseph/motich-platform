import motichLogo from "../../assets/logo/motich-logo-1.png";

import "./Team.css";

function Team() {
  const depthLayers = Array.from({ length: 16 });

  return (
    <section className="placeholder-page">
      <div className="placeholder-page-content">
        <p className="placeholder-page-eyebrow">MoticH</p>

        <div className="team-logo-scene">
          <div className="team-logo-distance">
            <div className="team-logo-spinner">
              <div className="team-logo-3d">
                {depthLayers.map((_, index) => (
                  <img
                    key={index}
                    src={motichLogo}
                    alt=""
                    aria-hidden="true"
                    className="team-logo-depth"
                    style={{
                      "--depth": `${-(index + 1) * 2}px`,
                    }}
                  />
                ))}

                <img
                  src={motichLogo}
                  alt="MoticH"
                  className="team-logo-front"
                />

                <img
                  src={motichLogo}
                  alt=""
                  aria-hidden="true"
                  className="team-logo-back"
                />
              </div>
            </div>
          </div>

          <div className="team-logo-shadow" aria-hidden="true" />
        </div>

        <h1>Meet the Team</h1>

        <p>
          We’re preparing this page to introduce the people behind MoticH. More
          information is coming soon.
        </p>
      </div>
    </section>
  );
}

export default Team;
