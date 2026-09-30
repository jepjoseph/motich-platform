import motichLogo from "../../assets/logo/motich-logo-1.png";

import "./Blog.css";

function Blog() {
  const depthLayers = Array.from({ length: 16 });

  return (
    <section className="placeholder-page">
      <div className="placeholder-page-content">
        <p className="placeholder-page-eyebrow">MoticH</p>

        <div className="blog-logo-scene">
          <div className="blog-logo-distance">
            <div className="blog-logo-spinner">
              <div className="blog-logo-3d">
                {depthLayers.map((_, index) => (
                  <img
                    key={index}
                    src={motichLogo}
                    alt=""
                    aria-hidden="true"
                    className="blog-logo-depth"
                    style={{
                      "--depth": `${-(index + 1) * 2}px`,
                    }}
                  />
                ))}

                <img
                  src={motichLogo}
                  alt="MoticH"
                  className="blog-logo-front"
                />

                <img
                  src={motichLogo}
                  alt=""
                  aria-hidden="true"
                  className="blog-logo-back"
                />
              </div>
            </div>
          </div>

          <div className="blog-logo-shadow" aria-hidden="true" />
        </div>

        <h1>Meet the Blog</h1>

        <p>
          We’re preparing this page to introduce the people behind MoticH. More
          information is coming soon.
        </p>
      </div>
    </section>
  );
}

export default Blog;
