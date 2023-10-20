import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "bootstrap/dist/css/bootstrap.css";
import { FaBars, FaCheckCircle, FaPlus, FaEllipsisV } from "react-icons/fa";

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <ul className="list-group pe-5">
      <div className="pb-3">
        <div className="float-end" style={{ display: "inline-flex" }}>
          <button
            className="btn btn-secondary me-1"
            style={{ color: "black", border: "none", fontSize: "small" }}
          >
            Collapse All
          </button>
          <button
            className="btn btn-secondary me-1"
            style={{ color: "black", border: "none", fontSize: "small" }}
          >
            View Progress
          </button>
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle me-1"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ color: "black", border: "none", fontSize: "small" }}
            >
              <FaCheckCircle style={{ color: "green" }} /> Publish All
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Publish All
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Publish All
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Publish All
                </a>
              </li>
            </ul>
          </div>
          <button className="btn btn-danger me-1" style={{ fontSize: "small" }}>
            <FaPlus /> Module
          </button>
          <button
            className="btn btn-secondary"
            style={{ fontSize: "small", color: "black", border: "none" }}
          >
            <FaEllipsisV />
          </button>
        </div>
      </div>

      <ul className="list-group">
        {modules
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <li
              key={index}
              className="list-group-item rounded-0"
              style={{ padding: "0", backgroundColor: "gray" }}
            >
              <div className="d-flex align-items-center ms-2 mt-2">
                <FaBars className="me-2" />
                <h3>{module.name}</h3>
                <div className="ms-auto">
                  <FaCheckCircle className="me-2 text-success" />
                  <FaPlus className="me-2" />
                  <FaEllipsisV />
                </div>
              </div>
              <p className="ms-4">{module.description}</p>
              {module.lessons && (
                <ul className="list-group">
                  {module.lessons.map((lesson, index) => (
                    <li key={index} className="list-group-item rounded-0">
                      <div className="d-flex align-items-center">
                        <FaBars className="me-2" />
                        <h4>{lesson.name}</h4>
                        <div className="ms-auto">
                          <FaCheckCircle className="me-2 text-success" />
                          <FaEllipsisV />
                        </div>
                      </div>
                      <p className="ms-4">{lesson.description}</p>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
      </ul>
    </ul>
  );
}
export default ModuleList;
