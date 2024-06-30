import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import sortingImage from "../images/sorting.jpg";
import troubleImage from "../images/trouble.jpg";
import incodeImage from "../images/incodes.jpg";
import ncodeImage from "../images/ncode.jpg";

function Experience() {
  return (
    <div className="container px-5 mx-4">
      <h1 className="abouts">Experience</h1>
      <hr />
      
      <div className="row">
        <div className="col-lg-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h2>Internship Details</h2>
              <h5 className="card-title">Philpost Kabankalan Branch</h5>
              <ul>
                <li>Performed data encoding in different Microsoft Office applications.</li>
                <li>Performed data sorting.</li>
                <li>Performed data tracking.</li>
                <li>Performed data organizing.</li>
                <li>Performed customer service and troubleshooting.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-lg-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h2>Graduation</h2>
              <h5 className="card-title">Central Philippines State University Main Campus</h5>
              <p>Bachelor of Science in Information Technology.</p>
              <ul>
                <li>Developed a CPSU Clinic Management system.</li>
                <li>Developed websites.</li>
                <li>Performed Networking.</li>
                <li>Attended Photography, Videography, and Logo making Workshop.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h2>Internship</h2>
              <h5 className="card-title">Philpost Kabankalan Branch</h5>
              <img
                src={sortingImage}
                style={{ width: '100%' }}
                className="img-fluid border rounded-4 transform-images"
                alt="Sorting"
              />
              <div className="text-center">
                <button className="btn btn-light mt-1 text-center">Performed data sorting</button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h2>Internship</h2>
              <h5 className="card-title">Philpost Kabankalan Branch</h5>
              <img
                src={ncodeImage}
                style={{ width: '100%', height: '22.5rem' }}
                className="img-fluid border rounded-4 transform-images"
                alt="Ncode"
              />
              <div className="text-center">
                <button className="btn btn-light mt-1 text-center">Performed data tracking</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h2>Internship</h2>
              <h5 className="card-title">Philpost Kabankalan Branch</h5>
              <img
                src={troubleImage}
                style={{ width: '100%' }}
                className="img-fluid border rounded-4 transform-images"
                alt="Trouble"
              />
               <div className="text-center">
                <button className="btn btn-light mt-1 text-center">Performed troubleshooting</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mb-4">
  <div className="card">
    <div className="card-body">
      <h2>Internship</h2>
      <h5 className="card-title">Philpost Kabankalan Branch</h5>
      <img
        src={incodeImage}
        style={{ width: '100%', height: '22.5rem' }}
        className="img-fluid border rounded-4 transform-images"
        alt="Incode"
      />
      <div className="text-center">
        <button className="btn btn-light mt-1"> Data encoding in different Microsoft Office applications</button>
      </div>
    </div>
  </div>
</div>

      </div>

      <hr />
    </div>
  );
}

export default Experience;
