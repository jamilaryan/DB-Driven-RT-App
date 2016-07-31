var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var AddTodo = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();
    var {dispatch} = this.props;
    var todoText = this.refs.todoText.value;
    var todoText2 = this.refs.todoText2.value;
    var todoText3 = this.refs.todoText3.value;
    var todoText4 = this.refs.todoText4.value;
    var todoText5 = this.refs.todoText5.value;
    var todoText6 = this.refs.todoText6.value;
    var todoText7 = this.refs.todoText7.value;
    var todoText8 = this.refs.todoText8.value;
    var todoText9 = this.refs.todoText9.value;
    var todoText10 = this.refs.todoText10.value;

    var todoTextArray = [todoText,todoText2,todoText3,todoText4,todoText5, todoText6, todoText7, todoText8, todoText9,todoText10];

      this.refs.todoText.value = '';
      this.refs.todoText2.value = '';
      this.refs.todoText3.value = '';
      this.refs.todoText4.value = '';
      this.refs.todoText5.value = '';
      this.refs.todoText6.value = '';
      this.refs.todoText7.value = '';
      this.refs.todoText8.value = '';
      this.refs.todoText9.value = '';
      this.refs.todoText10.value = '';


      if (todoText.length > 0) { dispatch(actions.startAddTodo(todoTextArray));}
      // if (todoText2.length > 0) { dispatch(actions.startAddTodo(todoText2));}
      // if (todoText3.length > 0) { dispatch(actions.startAddTodo(todoText3));}
      // if (todoText4.length > 0) { dispatch(actions.startAddTodo(todoText4));}
      // if (todoText5.length > 0) { dispatch(actions.startAddTodo(todoText5));}
      // if (todoText6.length > 0) { dispatch(actions.startAddTodo(todoText6));}
      // if (todoText7.length > 0) { dispatch(actions.startAddTodo(todoText7));}
      // if (todoText8.length > 0) { dispatch(actions.startAddTodo(todoText8));}
      // if (todoText9.length > 0) { dispatch(actions.startAddTodo(todoText9));}
      // if (todoText10.length > 0) { dispatch(actions.startAddTodo(todoText10));}
    // if (todoText.length > 0) {
    //   this.refs.todoText.value = '';
    //   this.refs.todoText2.value = '';
    //   this.refs.todoText3.value = '';
    //   dispatch(actions.startAddTodo(todoText));
    //   dispatch(actions.startAddTodo(todoText2));
    //   dispatch(actions.startAddTodo(todoText3));
    // } else {
    //   this.refs.todoText.focus();
    // }
  },
  render: function () {
    return (
      <div className="container__footer">
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="todoText" placeholder="Vendor ID"/>
          <input type="text" ref="todoText2" placeholder="Client Lastname"/>
          <input type="text" ref="todoText3" placeholder="Client Firstname"/>
          <input type="text" ref="todoText4" placeholder="Client Address"/>
          <input type="text" ref="todoText5" placeholder="Client Phone Number"/>
          <input type="text" ref="todoText6" placeholder="Client Email"/>
          <input type="text" ref="todoText7" placeholder="Service Plan"/>
          <input type="text" ref="todoText8" placeholder="Service Description"/>
          <input type="text" ref="todoText9" placeholder="Service/Invoice Document"/>
          <input type="text" ref="todoText10" placeholder="Voice Recording"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
});

export default connect()(AddTodo);
