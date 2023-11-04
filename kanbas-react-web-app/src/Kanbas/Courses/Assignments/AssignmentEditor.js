import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../Database";
import { FaCheckCircle, FaEllipsisV } from "react-icons/fa";

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId
  );

  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div className="pe-5">
      <div className="pb-4">
        <div className="float-end">
          <button
            className="btn"
            style={{ fontSize: "small", color: "green", border: "none" }}
          >
            <FaCheckCircle />
            Published
          </button>

          <button
            className="btn btn-secondary"
            style={{ fontSize: "small", color: "black", border: "none" }}
          >
            <FaEllipsisV />
          </button>
        </div>
      </div>
      <hr />

      <h5>Assignment Name</h5>
      <input value={assignment.title} className="form-control mb-2" />
      <hr />
      <div class="float-end">
        <Link
          to={`/Kanbas/Courses/${courseId}/Assignments`}
          className="btn btn-secondary"
        >
          Cancel
        </Link>
        <button onClick={handleSave} className="btn btn-danger me-2">
          Save
        </button>
      </div>
    </div>
  );
}

export default AssignmentEditor;
