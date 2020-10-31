import React from "react"
import NavigationTile from "./NavigationTile"

function Navigation() {

   return(<div className="navigation" id="navigation">
  <NavigationTile title="Account" path="#" description="Your account preferences" logoClass="fas fa-user-alt"/>
  <NavigationTile title="Notifications" path="#" description="Your notification preferences" logoClass="fas fa-bell"/>
  <NavigationTile title="Integrations" path="/" description="Add or remove integrations" logoClass="fas fa-plus-square"/>
  <NavigationTile title="Colleagues" path="#" description="Your colleague preferences" logoClass="fas fa-user-friends"/>
  <NavigationTile title="Tags" path="#" description="Add or remove tags" logoClass="fas fa-tag"/>
</div>);
    

}

export default Navigation;