import React from 'react'

export default class EventSearch extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSearchChange = (event) => {
    event.preventDefault();
    this.props.updateSearch(event.target.value);
  }

  handleSearchAction = () => {
    this.props.actionSearch(this.props.search);

  }

  render() {
    return (
      <div className="col-lg-6" style={{ float: 'left', marginLeft:-12 }}>
        <div class="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Cari disini ..."
            onChange={this.handleSearchChange}
            value={this.props.search}
          />
        </div>
      </div>
    )
  }
}