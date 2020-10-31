import React, {useEffect, Fragment} from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {getCards, remFavcard, addFavcard} from "../actions/integrations";
import Card from "./Card";

const  Integrations = ({
  getCards,
  addFavcard,
  cards
}) => {
  useEffect(() => {
    getCards();
  }, [getCards]);
  
  return(
    <div className="contentBox">
    <div className="header">
        <div className="header_nav">
          <h3>Integrations</h3>
          <ul className="header_list">
            <li id="fav"><a href="/favorites" className="btn">Favorites</a></li>
            <li>
              Category:
              <a href="#" className="nav_link"
                >All <i className="fas fa-chevron-down"></i
              ></a>
            </li>
            <li>
              Filter:
              <a href="#" className="nav_link"
                >All <i className="fas fa-chevron-down"></i
              ></a>
            </li>
          </ul>
        </div>
        <div className="searchbar">
          <input
            type="search"
            id="searchbar"
            placeholder=" Search Integrations"
            results="0"
          />
          
        </div>
      </div>
    <div className="integrations">
    <div className="integration_row">
          <h2 id="integration_heading">Your Integrations</h2>
          <div className="integration_cards">
          {cards == null? (<Fragment>
            </Fragment>): (<Fragment>
           {cards.map((item) =>(
             
              item.type == "myCard" ? (<Card 
                  key={item._id}
                  name={item.name} 
                  src={item.logoURL}
                  content={item.content}
                  id={item.name}
                  favorited={item.favorited}
            />):(null)
                
              ))}
            </Fragment>)}  
                                 
          
          </div>
          
        </div>
    <div className="integration_row">
          <h2 id="integration_heading">Popular Integrations</h2>
          <div className="integration_cards">
          {cards == null? (<Fragment>
            </Fragment>): (<Fragment>
           {cards.map((item) =>(
             
              item.type == "openCard" ? (<Card 
                  key={item._id}
                  name={item.name} 
                  src={item.logoURL}
                  content={item.content}
                  id={item.name}
                  favorited={item.favorited}
            />):(null)
                
              ))}
            </Fragment>)}
          </div>
        </div>
    </div>
    </div>
    );
}

Integrations.propTypes = {
  cards: PropTypes.array,
  getCards: PropTypes.func.isRequired,
  addFavcard: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  cards: state.cards,
});

export default connect(mapStateToProps, {
  getCards,
  addFavcard
})(Integrations);

