import React from "react";

export const ClientItem = ({
  clientTitle,
  listOfProjects
}) => {
  return (
    <div>
      <h1>{clientTitle}</h1>
      <ul>
        {listOfProjects.map((project) =>
          <li>{project.name}</li>
        )
      }
      </ul>
      <button>Add Project</button>
      <input type="text" name="newproject" />
    </div>
  );
};
