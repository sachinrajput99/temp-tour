import React from "react";
import Title from "./Title";
import tours from "./Data";
const Tours = () => {
  return (
    <>
      <section className="section" id="tours">
        <Title title="featured" subTitle="tours" />

        <div className="section-center featured-center">
          {tours.map((link) => {
            const { id, image, Date, title, paragraph, country, days, rate } =
              link;
            return (
              <article className="tour-card" key={id}>
                <div className="tour-img-container">
                  <img src={image} className="tour-img" alt={title} />
                  <p className="tour-date">{Date}</p>
                </div>
                <div className="tour-info">
                  <h4>{title}</h4>
                  <p>{paragraph}</p>
                  <div className="tour-footer">
                    <p>
                      <span>
                        <i className="fas fa-map"></i>
                      </span>{" "}
                      {country}
                    </p>
                    <p>{days} days</p>
                    <p>from {rate}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
      ;
    </>
  );
};

export default Tours;