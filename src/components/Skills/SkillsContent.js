import React from "react";

function SkillsContent(props) {
  return (
    <div className="resume-item">
      <h5 className={props.title ? "resume-title" : "resume-no-title"}>
        {props.title}
      </h5>
      <ul>
        {props.content.map((value, index) => (
          <li key={index}> ‣{value}</li>
        ))}
      </ul>
    </div>
  );
}

export default SkillsContent;
