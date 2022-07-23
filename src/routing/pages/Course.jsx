import React from "react";
import html from "../../img/html.png";
import css from '../../img/css.jpg'
import javascript from '../../img/javascript.jpeg'
import { Link } from "react-router-dom";

const Course = () => {
  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-lg-4 col-12">
          <div className="card">
            <img src={html} className="img-fluid" />
            <div className="card-body">
              <h3>HTML-5</h3>

              <p>
                HTML5 is the standard language of the Web, developed by W3C. For
                application developers and industry, HTML5 represents a set of
                features that people are able to rely on for years to come.
              </p>

              <div className=" text-center">
                <button className="btn bg-primary text-light ">
                  <Link to="html" className="nav-link">
                    Enrool Now
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-12">
          <div className="card">
            <img src={css} className="img-fluid" />
            <div className="card-body">
              <h3 className="py-1">CSS</h3>

              <p className="py-2">
                Have you just begun your journey into Web development? This
                course introduces you to the basics of Web design and teach you
              </p>

              <div className=" text-center">
                <button className="btn bg-primary text-light ">
                  <Link to="css" className="nav-link">
                    Enrool Now
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-12">
          <div className="card">
            <img src={javascript} className="img-fluid" />
            <div className="card-body">
              <h3>JAVASCRIPT</h3>

              <p>
                JavaScript lets you add interactive features to your Web sites,
                including dynamically updated content, controlled multimedia,
                animated images, and much more.
              </p>

              <div className=" text-center">
                <button className="btn bg-primary text-light ">
                  <Link to="javascript" className="nav-link">
                    Enrool Now
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
