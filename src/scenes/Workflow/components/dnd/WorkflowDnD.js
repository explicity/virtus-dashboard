import React, { Component } from 'react';

import _map from 'lodash/map';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import ProjectsItem from 'scenes/Home/components/projects/components/ProjectsItem';
import data from './data';

import './workflowDnD.scss';

const status = [
  'Quened',
  'Planning',
  'Design',
  'Development',
  'Testing',
  'Completed'
];
const lists = {};

export default class WorkflowDnD extends Component {
  constructor(props) {
    super(props);

    this.onDragEnd = this.onDragEnd.bind(this);
    this.state = {
      tasks: {}
    };
  }

  componentWillMount() {
    _map(
      status,
      (title, index) =>
        (lists[title] = data.filter(item => item.status === title))
    );
    this.setState({
      tasks: lists
    });
  }

  onDragEnd(result) {
    if (!result.destination) return;
    const from = result.source;
    const to = result.destination;
    const { tasks } = this.state;
    const [removed] = tasks[from.droppableId].splice(from.index, 1);
    if (from.droppableId === 'completed' && to.droppableId !== 'completed') {
      removed.status = to.droppableId;
    }
    if (to.droppableId === 'completed') removed.status = 'completed';
    tasks[to.droppableId].splice(to.index, 0, removed);
    this.setState({
      tasks
    });

    const index = to.index;
    const list = tasks[to.droppableId];
    const id = list[index].id;
    data[id].status = result.destination.droppableId;
  }

  render() {
    const { tasks } = this.state;
    return (
      <div className="dnd">
        <div className="container">
          <DragDropContext onDragEnd={this.onDragEnd}>
            <div className="dnd-wrapper">
              {_map(status, (title, titleIndex) => (
                <Droppable
                  direction="vertical"
                  droppableId={title}
                  key={titleIndex}
                >
                  {provided => (
                    <div className="dnd-col">
                      <header className="dnd-col-heading hvr-icon-forward">
                        <h4>
                          <a href=" ">{title}</a>
                        </h4>
                        <span className="amount amount-projects mr-2">
                          {tasks[title].length}{' '}
                          {tasks[title].length === 1 ? 'project' : 'projects'}
                        </span>
                        <i className="fa fa-circle" aria-hidden="true" />
                        <span className="amount amount-cash ml-2">
                          ${tasks[title].reduce(
                            (prev, next) => prev + next.price,
                            0
                          )}
                        </span>
                      </header>

                      <ul ref={provided.innerRef}>
                        {_map(tasks[title], (item, index) => (
                          <Draggable
                            key={item.id}
                            draggableId={item.id}
                            index={index}
                          >
                            {provided => (
                              <li>
                                <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  className="mb-3"
                                >
                                  <ProjectsItem
                                    key={item.id}
                                    item={item}
                                    listId={titleIndex}
                                  />
                                </div>

                                {provided.placeholder}
                              </li>
                            )}
                          </Draggable>
                        ))}

                        {provided.placeholder}
                      </ul>
                    </div>
                  )}
                </Droppable>
              ))}
            </div>
          </DragDropContext>
        </div>
      </div>
    );
  }
}
