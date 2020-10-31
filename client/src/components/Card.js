import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {remFavcard} from "../actions/favorites";
import {getCards} from "../actions/integrations";

const Card = ({name,src,content,id,favorited,connected, remFavcard,getCards}) => {
  useEffect(() => {
    getCards();
  }, [getCards]);
    return (
    <card>
    <div className="card_head"> 
    <img src={src} alt="slack" className="card_logo" />
    </div>
    <h3 className="card_name">{name}</h3>
    <p className="card_content">{content}</p>
    <div className="card_buttons">
      <a href="#" className={`connect_link ${connected ? "connected" :""}`}>{connected ? "Connected" :"Connection"}</a>
      <div className="card_icons">
        <button className="btn" id={id} onClick={() => {remFavcard(name)}}><i className={ favorited? "fas fa-heart hide red-heart" : "fas fa-heart hide " }></i></button>
        <i className="fas fa-trash-alt show"></i>
      </div>                  
    </div>
  </card>
  );

  
}

Card.propTypes = {
  getCards: PropTypes.func.isRequired,
  remFavcard: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
  favCards: state.favCards,
  cards: state.cards
});

export default connect(mapStateToProps,{
  getCards,
  remFavcard
})(Card);
