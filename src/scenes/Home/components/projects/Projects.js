import React, { Component } from 'react';

import _map from 'lodash/map';

import ProjectsItem from './components/ProjectsItem';
import data from './components/data';

const Projects = () => {
  let user = JSON.parse(localStorage.getItem('userData'));
  const userData = data.filter(item => item.username === user.username);
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
