import React from "react";
import format from "date-fns/format";

import Jumbotron from "./components/jumbotron";

export default class PostPreview extends React.Component {
  render() {
    const {entry, getAsset} = this.props;
    let image = getAsset(entry.getIn(["data", "image"]));
    if (image && !image.fileObj) {
        image = window.parent.location.protocol + "//" + window.parent.location.host + image;
    }

    return<div>
      <section className="pet-section pet-main-section">
        <div className="parallax-scene" id="main-section-scene">
            <div data-depth="0.05" className="layer">
                <div className="layer-1">
                    <img src="/img/0-static.png" alt=""/>
                </div>
            </div>
            <div data-depth="0.2" className="layer">
                <div className="layer-2">
                    <img src="/img/1-back.png" alt=""/>
                </div>
            </div>
            <div data-depth="0.3" className="layer">
                <div className="layer-3">
                    <img src="/img/2-wide.png" alt=""/>
                </div>
            </div>
            <div data-depth="0.4" className="layer">
                <div className="layer-4">
                    <img src="/img/3-middle.png" alt=""/>
                </div>
            </div>
            <div data-depth="1.1" className="layer">
                <div className="layer-5">
                    <img src="/img/4-front.png" alt=""/>
                </div>
            </div>
            <div data-depth="1.2" className="layer">
                <div className="layer-6">
                    <img src="/img/5-closeup.png" alt=""/>
                </div>
            </div>
        </div>
        <div className="section-container">
            <div className="logo">
                <img src="/img/logo-white.svg" alt=""/>
                <div className="text">{ entry.getIn(["data", "first_section","heading"])}</div>
            </div>
            <h2>{ entry.getIn(["data", "first_section","text"])}</h2>
            <p>{ entry.getIn(["data", "first_section","description"])}</p>
            <div className="links">
                {(entry.getIn(['data', 'first_section', 'button_app']) || []).map((button_app, index) =>
                    <a key={index} href={button_app.get('link')} className="pet-btn is-white"><span>{button_app.get('name')}</span></a>
                )}
            </div>
        </div>
    </section>
    <section className="pet-section pet-have-question">
        <div className="row">
            <div className="col-xs-12 col-sm-7 col-xl-6">
                <div className="text-block">
                    <div className="subjects">
                        <img src="/img/subj-1.png" alt=""/>
                        <img src="/img/subj-2.png" alt=""/>
                        <img src="/img/subj-3.png" alt=""/>
                    </div>
                    <h2>{ entry.getIn(["data", "second_section","heading"])}</h2>
                    <p>{ entry.getIn(["data", "second_section","description"])}</p>
                    <div className="links">
                        {(entry.getIn(['data', 'second_section', 'button_app']) || []).map((button_app, index) =>
                            <a key={index} href={button_app.get('link')} className="pet-btn is-blue"><span>{button_app.get('name')}</span></a>
                        )}
                    </div>
                </div>
            </div>
            <div className="col-xs-12 col-sm-5 col-xl-5 col-xl-offset-1 text-center">
                <img className="img-response" src="/img/owl.svg" alt=""/>
            </div>
        </div>
    </section>
    </div>
  }
}