import motichLogo from "../../assets/logo/motich-logo-1.png";

import "./Demo.css";

function Demo() {
  const depthLayers = Array.from({ length: 16 });

  return (
    <section className="placeholder-page">
      <div className="placeholder-page-content">
        <p className="placeholder-page-eyebrow">MoticH</p>

        <div className="demo-logo-scene">
          <div className="demo-logo-distance">
            <div className="demo-logo-spinner">
              <div className="demo-logo-3d">
                {depthLayers.map((_, index) => (
                  <img
                    key={index}
                    src={motichLogo}
                    alt=""
                    aria-hidden="true"
                    className="demo-logo-depth"
                    style={{
                      "--depth": `${-(index + 1) * 2}px`,
                    }}
                  />
                ))}

                <img
                  src={motichLogo}
                  alt="MoticH"
                  className="demo-logo-front"
                />

                <img
                  src={motichLogo}
                  alt=""
                  aria-hidden="true"
                  className="demo-logo-back"
                />
              </div>
            </div>
          </div>

          <div className="demo-logo-shadow" aria-hidden="true" />
        </div>

        <h1>Meet the Demo</h1>

        <p>
          We’re preparing this page to introduce the people behind MoticH. More
          information is coming soon.
        </p>
      </div>
    </section>
  );
}

export default Demo;
