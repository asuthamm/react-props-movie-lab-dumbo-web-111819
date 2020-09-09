/src/App.js

class App extends Component {
	render() {
		return (
            <div className='App'>
                <h1>App</h1>
            </div>
		);
	}
}

export default App;


/src/components/Todos.js

import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
  render() {
    return this.props.todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo} />
    ));
  }
}

// PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
}

export default Todos;


import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class note extends PureComponent {
	render() {
		return (
			<div>
				
			</div>
		);
	}
}

note.propTypes = {

};

export default note;


input:checkbox
