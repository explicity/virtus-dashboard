import React, { Component } from 'react';

import _map from 'lodash/map';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import ProjectsItem from 'scenes/Home/components/projects/components/ProjectsItem';
import data from 'scenes/Home/components/projects/components/data';

const status = ['Quened', 'Planning'];
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
    console.log(result);
    if (!result.destination) return;
    const from = result.source;
    const index = from.index;
    const list = this.state.tasks[from.droppableId];
    console.log(list[index]);
    const id = list[index].id;
    console.log(id);
    data[id].status = result.destination.droppableId;
    console.log(data[id]);
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
  }

  render() {
    console.log(this.state);
    return (
      <div className="container">
        <DragDropContext onDragEnd={this.onDragEnd}>
          <div className="row">
            {_map(status, (title, index1) => (
              <Droppable direction="vertical" droppableId={title} key={index1}>
                {provided => (
                  <div className="col col-md-4">
                    <h3 className="workflow-heading">
                      <a href=" " className="hvr-icon-forward">
                        {title}
                      </a>
                    </h3>

                    <ul ref={provided.innerRef}>
                      {_map(this.state.tasks[title], (item, index) => (
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
                                className="mb-2"
                              >
                                <ProjectsItem
                                  key={item.id}
                                  item={item}
                                  listId={index1}
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
    );
  }
}
