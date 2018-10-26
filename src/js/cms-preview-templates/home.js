import React from "react";

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
                        <a key={index} href={button_app.get('link')} className="pet-btn is-white">{button_app.get('name')}</a>
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
                                <a key={index} href={button_app.get('link')} className="pet-btn is-blue">{button_app.get('name')}</a>
                            )}
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-5 col-xl-5 col-xl-offset-1 text-center">
                    <img className="img-response" src="/img/owl.svg" alt=""/>
                </div>
            </div>
        </section>
        <section className="pet-section pet-app-property">
            <img className="road" src="/img/road.png" alt=""/>
                <div className="pet-app-property-inner">
                    <div className="text">
                        <h2>{ entry.getIn(["data", "third_section", "heading"])}</h2>
                        <p>{ entry.getIn(["data", "third_section", "description"])}</p>
                    </div>
                    <div className="property">
                        {(entry.getIn(['data', 'third_section', 'promo_block']) || []).map((promo_block, index) =>
                            <div key={index} className="item">
                                <img src={promo_block.get('image')}/>
                                    <strong>{promo_block.get('heading')}</strong>
                                    <p>{promo_block.get('description')}</p>
                            </div>
                        )}
                    </div>
                    <div className="links">
                        {(entry.getIn(['data', 'second_section', 'button_app']) || []).map((button_app, index) =>
                            <a key={index} href={button_app.get('link')} className="pet-btn is-white">{button_app.get('name')}</a>
                        )}
                    </div>
                </div>
        </section>
        <section className="pet-section pet-app-can text-center">
            <div className="parallax-scene" id="app-can-scene">
                <div data-depth="0.05" className="layer">
                    <div className="layer-1">
                        <img src="/img/2-1.png" alt=""/>
                    </div>
                </div>
                <div data-depth="0.3" className="layer">
                    <div className="layer-2">
                        <img src="/img/2-2.png" alt=""/>
                    </div>
                </div>
                <div data-depth="0.6" className="layer">
                    <div className="layer-3">
                        <img src="/img/2-3.png" alt=""/>
                    </div>
                </div>
            </div>
            <div className="section-container">
                <h2>{ entry.getIn(["data", "fourth_section", "heading"])}</h2>
                <div className="row">
                    {(entry.getIn(['data', 'fourth_section', 'promo_block']) || []).map((promo_block, index) =>
                    <div  key={index} className="col-xs-12 col-md-4">
                        <div className="can-item">
                            <div className="img">
                                <img className="img-response" src={promo_block.get('image')}/>
                            </div>
                            <strong>{promo_block.get('heading')}</strong>
                            <p>{promo_block.get('description')}</p>
                        </div>
                    </div>
                    )}
                </div>
                <div className="links">
                    {(entry.getIn(['data', 'fourth_section', 'button_app']) || []).map((button_app, index) =>
                        <a key={index} href={button_app.get('link')} className="pet-btn is-white">{button_app.get('name')}</a>
                    )}
                </div>
            </div>
        </section>
    </div>
  }
}