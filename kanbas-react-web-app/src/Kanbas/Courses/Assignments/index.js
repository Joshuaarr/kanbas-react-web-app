import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import "bootstrap/dist/css/bootstrap.css";
import { FaBars, FaCheckCircle, FaPlus, FaEllipsisV } from "react-icons/fa";

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  return (
    <div class="pe-1 ps-1 container-fluid">
      <h2>Assignments for course {courseId}</h2>

      <ul className="list-group pe-5 ">
        <div className="pb-1 ">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <input
                type="email"
                className="form-control"
                id="input1"
                placeholder="Search for Assignments"
              />
            </div>
            <div className="col">
              <div className="float-end">
                <button
                  className="btn btn-secondary me-1"
                  style={{ fontSize: "small" }}
                >
                  <FaPlus /> Group
                </button>

                <button
                  className="btn btn-danger me-1"
                  style={{ fontSize: "small" }}
                >
                  <FaPlus /> Assignment
                </button>
                <button
                  className="btn btn-secondary"
                  style={{ fontSize: "small", color: "black", border: "none" }}
                >
                  <FaEllipsisV />
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr />

        <ul className="list-group">
          {courseAssignments.map((assignment) => (
            <Link
              key={assignment}
              to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
              className="list-group-item rounded-0"
              style={{ padding: "0" }}
            >
              <div className="d-flex align-items-center ms-2 mt-2">
                <FaBars className="me-2" />
                <h3>{assignment.title}</h3>
                <div className="ms-auto">
                  <FaCheckCircle className="me-2 text-success" />
                  <FaPlus className="me-2" />
                  <FaEllipsisV />
                </div>
              </div>
            </Link>
          ))}
        </ul>
      </ul>
    </div>
  );
}
export default Assignments;
