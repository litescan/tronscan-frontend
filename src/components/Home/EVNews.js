import React, {Component} from "react";
import {Link} from "react-router-dom";
import {UncontrolledCarousel} from "reactstrap";

export default class EVNews extends Component {

  constructor() {
    super();

    this.state = {
      items: [
        {
          src: require("../../images/frontpage/evnews/slide-4.jpg"),
        },
        {
          src: require("../../images/frontpage/evnews/slide-1.jpg"),
        },
        {
          src: require("../../images/frontpage/evnews/slide-2.jpg"),
        },
        {
          src: require("../../images/frontpage/evnews/slide-3.jpg"),
        },
      ]
    };
  }

  componentDidMount() {

  }

  render() {

    let {items} = this.state;

    return (
      <div className="bg-white py-5">
        <div className="container news-ev">
          <div className="row pt-5">
            <div className="col-md-5">
              <UncontrolledCarousel items={items} controls={false} indicators={false} />
            </div>
            <div className="col-md-7">
              <div className="card mb-3 border-0">
                <div className="card-body">
                  <h5 className="card-title">Super Envoy Pages</h5>
                  <p className="card-text">
                    Super Envoys can publish their information right here on Litescan to give potential
                    voters more information about their team and their projects.{' '}<br />
                    <Link to="/votes" className="card-link text-primary">Go to vote page</Link><br/>
                  </p>
                  <p className="card-text">
                    As a Super Envoy you have the possibility to fully manage your own content
                    and better inform your voters.{' '}<br />
                    <a href="https://github.com/litescan/litetokensev-template#readme"
                       target="_blank" className="card-link text-primary">
                      Read more about publishing a page
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


