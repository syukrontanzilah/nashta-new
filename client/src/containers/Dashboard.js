import React, { Component, Fragment } from "react";
import Navbar from "../components/Navbar";
import { loadEvent } from "../actions";
import { connect } from "react-redux";
import Event from "../components/Event"
import EventSearch from "../components/EventSearch"
import Pagination from "../components/Pagination"


class Beranda extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: ''
    }
  }
  componentDidMount() {
    this.props.loadEvent({
      limit: 2,
      page: 1
    });
  }
  render() {
    const { search } = this.state
    let { page, limit, total } = this.props.events || {}
    limit = parseFloat(limit)
    page = parseFloat(page)
    total = parseFloat(total)
    const nodes = (this.props.events.data || []).map((item, index) => {
      return (
        <Event
          key={`${index}_`}
          id={item.id} index={index + 1}
          title={item.title}
          location={item.location}
          date={item.date}
          participant={item.participant}
          note={item.note}
        />
      )
    })

    return (
      <Fragment>
        <Navbar />
        <div className="container">
          <div className="card shadow-sm">
            <div className="card-body">
              <form style={{marginTop:-10,}}>
                <div style={{}} className="form-group">
                  <EventSearch
                    updateSearch={(val) => this.setState({ search: val }, () => this.props.loadEvent({
                      limit,
                      page: 1,
                      search: this.state.search
                    }))}
                    search={search}
                  />
                </div>
              </form>
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead className="bg-success">
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Nama</th>
                      <th scope="col">Lokasi</th>
                      <th scope="col">Tanggal</th>
                      <th scope="col">Kategori</th>
                      <th scope="col">Catatan</th>
                    </tr>
                  </thead>
                  <tbody>
                    {nodes}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

      <Pagination
                  updatePage={(page) => this.props.loadEvent({
                    limit,
                    page,
                    search
                  })}
                  page={page}
                  limit={limit}
                  currentPage={page}
                  total={total}
                />

        </div>
      </Fragment>
    )
  }
}
const mapStateToProps = (state) => ({
  events: state.events
})

const mapDispatchToProps = (dispatch) => ({
  loadEvent: (data) => dispatch(loadEvent(data))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Beranda)
