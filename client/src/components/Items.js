import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";

export default function Item(props) {
  return (
    <div className="card-deck" >
      <div className="col-md-3">
        <div className="card text-white mb-3" style={{ width: "20rem", borderColor: 'lightgray', borderWidth: 1, backgroundColor: '#474747', borderRadius:20 }}>
          <Link to="/">
            <img style={{borderTopRightRadius: 20, borderTopLeftRadius:20}} src={props.events && props.events.image || "https://specials-images.forbesimg.com/imageserve/1152308114/960x0.jpg?fit=scale"} className="card-img-top" alt="..." />
          </Link>
          <div className="card-body">
            <h4 style={{ color: 'salmon' }} className="card-title">{props.events && props.events.title}</h4>
            <div style={{ marginTop: -10 }}>
              <small>
                <i className="fa fa-heart text-warning mr-2" aria-hidden="true"></i>
                {props.events && props.events.location}
              </small>
            </div>

            <div style={{ marginTop: 0 }}>
              <p style={{ fontSize: 10, color: 'lightgray' }}>
                <Moment format="DD MMMM YYYY" withTitle>
                  {props.event && props.events.date}
                </Moment>
              </p>
            </div>
          </div>


          <ul className="list-group list-group-flush" style={{ color: 'salmon', fontSize:15, }}>
            <div className="list-group list-group-flush">
              <div className="list-group-item">
                  {props.events && props.events.participant}
              </div>
            </div>
          </ul>
          <li className="list-group-item" style={{ color: '#000', backgroundColor: 'lightgray' }}>
            <p style={{ color: 'gray', marginBottom: 0, fontSize: 12, fontWeight: 'bold' }}>Catatan:</p>
            <p style={{ color: 'gray', marginBottom: 0, fontSize: 14 }}>
              {props.events && props.events.note}
            </p>

          </li>
        </div>
      </div>
    </div>
  );
}
