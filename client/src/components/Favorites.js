import React, {useEffect, Fragment} from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {getFavcards, remFavcard} from "../actions/favorites";
import Card from "./Card";

const Favorites = ({
  favCards,
  getFavcards,
  remFavcard
}) => {
  useEffect(() => {
    getFavcards();
  }, [getFavcards]);

  return(

    <div className="contentBox">
        <div className="favorites">
        <h3>Favorites</h3>
        <div className="integrations">
        <div className="integration_row">
          <h2 id="integration_heading">Favorite Integrations</h2>
          <div className="integration_cards">

          {favCards == null? (<Fragment>
            </Fragment>): (<Fragment>
           {favCards.map(item => (
                <Card 
                  key={item._id}
                  name={item.name} 
                  src={item.logoURL}
                  content={item.content}
                  id={item.name}
                  favorited={item.favorited}
                  connected={item.connected}
            />
              ))}
            </Fragment>)}
           
          </div>
        </div>
        </div>
        </div>
    </div>
);
}

Favorites.propTypes = {
  favCards: PropTypes.array,
  getFavcards: PropTypes.func.isRequired,
  remFavcard: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  favCards: state.favCards,
});

export default connect(mapStateToProps, {
  getFavcards,
  remFavcard
})(Favorites);