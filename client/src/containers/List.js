import React, { Component } from "react";
import Items from "../components/Items";
import { loadEvent } from "../actions";
import { connect } from "react-redux";

class List extends Component {
  componentDidMount() {
    this.props.loadEvent();
  }

  render() {
    console.log(this.props.events);

    const listItems = (this.props.events.data || []).map((item, index) => (
      <Items
        key={index}
        events={{ ...item }}
      />
    ));

    return (
      <div className="row" style={{}}>
        {listItems}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  events: state.events
})

const mapDispatchToProps = (dispatch) => ({
  loadEvent: () => dispatch(loadEvent())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)
