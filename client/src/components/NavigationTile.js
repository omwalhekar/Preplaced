import React from "react";

function NavigationTile({title, description, logoClass, path}) {


  return (
    <div className="navigation_tile btn">
    <div className="svg"><i className={logoClass}></i></div>
    <div className="navigation_tile_link">
      <a href={path}><h5 className="navigation_link">{title}</h5></a>
      <h6 className="navigation_desc">{description}</h6>
    </div>
  </div>
  );


}

export default NavigationTile;
