import db from "../Database";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import "./index.css";
function Dashboard() {
  const courses = db.courses;

  return (
    <div className="ps-3">
      <h1>Dashboard</h1>
      <hr />
      <h2 className="ps-3">
        Published Courses ({courses.length})
        <hr />
      </h2>

      <div className="ps-3 d-flex flex-row">
        <div className="wd-kanbas card-container">
          {courses.map((course, index) => (
            <div>
              <div>
                <div className="card wd-kanbas card-size">
                  <div
                    className="wd-kanbas square"
                    style={{ backgroundColor: "rgb(55, 55, 169)" }}
                  ></div>
                  <div className="card-body" style={{ color: "gray" }}>
                    <Link
                      key={course._id}
                      to={`/Kanbas/Courses/${course._id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <h5>{course.name}</h5>
                    </Link>
                    <div className="card-text">
                      CS4550.12631.202410
                      <div style={{ color: "gray" }}>
                        202410_1 Fall 2023 Semester Full Term
                      </div>
                    </div>
                    <FaEdit />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
