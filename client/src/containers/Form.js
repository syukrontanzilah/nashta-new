import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { postEvent } from "../actions";
import ImageUpload from "../components/ImageUpload";
import Navbar from "../components/Navbar";

class AddEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      location: "",
      date: "",
      participant: "",
      note: "",
      noteError: ""
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const {
      title,
      location,
      date,
      participant,
      note,
      image,
    } = this.state
    this.props.postEvent({
      title,
      location,
      date,
      participant,
      note,
      image
    });

    // if (this.state.note.length > 10) {
    //   this.state.noteError = "notes tidak boleh lebih dari 10 karakter"
    // } else{
     
    // }
     this.props.history.push("/")
  };

  render() {
    return (
      <Fragment>
        <Navbar />
        <section className="login-block" method="post">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 login-sec">
                <h2 className="text-left text-success">Tambah Event</h2>
                <form className="mt-3" onSubmit={this.handleSubmit}>


                  <div class="form-group row">
                    <div class="col-sm-10">
                      <input
                        type="text"
                        name="title"
                        value={this.state.title}
                        onChange={this.handleChange}
                        className="form-control"
                        id="title"
                        placeholder="Masukkan Nama Event"
                        required
                      />
                    </div>
                  </div>


                  <div class="form-group row">
                    <div class="col-sm-10">
                      <input type="text" name="location"
                        value={this.state.location}
                        onChange={this.handleChange}
                        className="form-control"
                        id="location"
                        placeholder="Masukkan Lokasi"
                        required
                      />
                    </div>
                  </div>


                  <div class="form-group row">
                    <div class="col-sm-10">
                      <input type="text" name="participant"
                        value={this.state.participant}
                        onChange={this.handleChange}
                        className="form-control"
                        id="participant"
                        placeholder="Kategory"
                        required
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col-sm-10">
                      <input type="date" name="date"
                        value={this.state.date}
                        onChange={this.handleChange}
                        className="form-control"
                        id="date"
                        required
                      />
                    </div>
                  </div>

                  <div class="form-group row">
                    <div class="col-sm-10">
                      <textarea
                        className="form-control"
                        name="note"
                        value={this.state.note}
                        onChange={this.handleChange}
                        id="note"
                        rows="4"
                        placeholder="Catatan"
                        required
                      ></textarea>
                    </div>

                    {
                      this.state.noteError ? (
                        <div style={{ fontSize: 14, marginLeft: 20, color: 'red' }}>{this.state.noteError}</div>
                      ) : null
                    }
                  </div>

                  <div class='row'
                    style={{
                      justifyContent: 'space-between',
                      marginRight: 95
                    }}>
                    <div style={{ paddingLeft: 13 }}>
                      <ImageUpload getURL={(image) => this.setState({ image })} />
                    </div>
                    <button type="submit" className="btn btn-success" style={{}}>
                      Kirim
                    </button>
                  </div>

                </form>
              </div>

              <div style={{ marginTop: 40 }}>
                <img style={{ width: 360, height: 360, borderRadius: 20 }} src="https://assalafiyahbrebes.com/wp-content/uploads/2020/01/3220141_S.jpg" />
              </div>
            </div>
          </div>
        </section>

      </Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  postEvent: (data) => dispatch(postEvent(data)),
});

export default connect(null, mapDispatchToProps)(AddEvent);
