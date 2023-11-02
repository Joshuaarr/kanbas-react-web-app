import db from "../Database";
import { React, useState } from "react";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import "./index.css";
function Dashboard() {
  const [courses, setCourses] = useState(db.courses);
  const [course, setCourse] = useState({
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
  });
  const deleteCourse = (courseId) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };

  const addNewCourse = () => {
    setCourses([...courses, { ...course, _id: new Date().getTime() }]);
  };
  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  return (
    <div className="ps-3">
      <h1>Dashboard</h1>
      <hr />
      <h2 className="ps-3">
        Published Courses ({courses.length})
        <hr />
      </h2>

      <h5>Edit Course</h5>
      <input
        value={course.name}
        className="form-control"
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
      />
      <input
        value={course.number}
        className="form-control"
        onChange={(e) => setCourse({ ...course, number: e.target.value })}
      />
      <input
        value={course.startDate}
        className="form-control"
        type="date"
        onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
      />
      <input
        value={course.endDate}
        className="form-control"
        type="date"
        onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
      />
      <button onClick={addNewCourse}>Add</button>
      <button onClick={updateCourse}>Update</button>

      <div className="ps-3 d-flex flex-row">
        <div className="wd-kanbas card-container">
          {courses.map((course) => (
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
                      <button
                        onClick={(event) => {
                          event.preventDefault();
                          setCourse(course);
                        }}
                      >
                        Edit
                      </button>

                      <button
                        onClick={(event) => {
                          event.preventDefault();
                          deleteCourse(course._id);
                        }}
                      >
                        Delete
                      </button>
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
