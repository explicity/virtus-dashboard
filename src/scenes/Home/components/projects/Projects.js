import React from 'react';


import _map from 'lodash/map';

import data from 'scenes/Workflow/components/data';
import ProjectsItem from './components/ProjectsItem';

const Projects = () => {
  const user = JSON.parse(localStorage.getItem('userData'));
  const userData = data.filter(item => item.email === user.email);
  return (
    <div className="inner">
      <header className="inner-header">
        <h3 className="inner-title">Your projects</h3>
      </header>
      <div className="inner-item item-project">
        {_map(userData, (item, index) => (
          <ProjectsItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
