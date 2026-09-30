import motichLogo from "../../assets/logo/motich-logo-1.png";

import "./Gallery.css";

function Gallery() {
  const depthLayers = Array.from({ length: 16 });

  return (
    <section className="placeholder-page">
      <div className="placeholder-page-content">
        <p className="placeholder-page-eyebrow">MoticH</p>

        <div className="gallery-logo-scene">
          <div className="gallery-logo-distance">
            <div className="gallery-logo-spinner">
              <div className="gallery-logo-3d">
                {depthLayers.map((_, index) => (
                  <img
                    key={index}
                    src={motichLogo}
                    alt=""
                    aria-hidden="true"
                    className="gallery-logo-depth"
                    style={{
                      "--depth": `${-(index + 1) * 2}px`,
                    }}
                  />
                ))}

                <img
                  src={motichLogo}
                  alt="MoticH"
                  className="gallery-logo-front"
                />

                <img
                  src={motichLogo}
                  alt=""
                  aria-hidden="true"
                  className="gallery-logo-back"
                />
              </div>
            </div>
          </div>

          <div className="gallery-logo-shadow" aria-hidden="true" />
        </div>

        <h1>Meet the Gallery</h1>

        <p>
          We’re preparing this page to introduce the people behind MoticH. More
          information is coming soon.
        </p>
      </div>
    </section>
  );
}

export default Gallery;
