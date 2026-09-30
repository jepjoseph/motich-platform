import motichLogo from "../../assets/logo/motich-logo-1.png";

import "./Products.css";

function Products() {
  const depthLayers = Array.from({ length: 16 });

  return (
    <section className="placeholder-page">
      <div className="placeholder-page-content">
        <p className="placeholder-page-eyebrow">MoticH</p>

        <div className="products-logo-scene">
          <div className="products-logo-distance">
            <div className="products-logo-spinner">
              <div className="products-logo-3d">
                {depthLayers.map((_, index) => (
                  <img
                    key={index}
                    src={motichLogo}
                    alt=""
                    aria-hidden="true"
                    className="products-logo-depth"
                    style={{
                      "--depth": `${-(index + 1) * 2}px`,
                    }}
                  />
                ))}

                <img
                  src={motichLogo}
                  alt="MoticH"
                  className="products-logo-front"
                />

                <img
                  src={motichLogo}
                  alt=""
                  aria-hidden="true"
                  className="products-logo-back"
                />
              </div>
            </div>
          </div>

          <div className="products-logo-shadow" aria-hidden="true" />
        </div>

        <h1>Meet the Products</h1>

        <p>
          We’re preparing this page to introduce the people behind MoticH. More
          information is coming soon.
        </p>
      </div>
    </section>
  );
}

export default Products;
