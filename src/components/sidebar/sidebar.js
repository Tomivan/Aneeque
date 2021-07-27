import React from 'react';
import { SideNavItems, SideNavLink, SideNavMenuItem } from 'carbon-components-react/lib/components/UIShell';
import './sidebar.css';
import { StyledSideNav } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faPaperPlane, faShoppingBag, faStickyNote, faThLarge, faUsers } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    return(
        <StyledSideNav isFixedNav expanded isChildOfHeader={false} aria-label="Side Navigation" class="sidenav">
           <div className="nav-heading">
               <img src="" alt="The Tumbas logo" className="logo"/>
           </div>
           <SideNavItems>
          <SideNavLink> Menu</SideNavLink>
            <SideNavMenuItem aria-current="page"><FontAwesomeIcon icon={faThLarge} className="nav-icon"/>Overview</SideNavMenuItem>
            <SideNavMenuItem><FontAwesomeIcon icon={faStickyNote} className="nav-icon"/>Order</SideNavMenuItem>
            <SideNavMenuItem><FontAwesomeIcon icon={faShoppingBag} className="nav-icon"/>Products</SideNavMenuItem>
            <SideNavMenuItem><FontAwesomeIcon icon={faCog} className="nav-icon"/>Settings</SideNavMenuItem>
          <SideNavLink>Business</SideNavLink> 
            <SideNavMenuItem><FontAwesomeIcon icon={faPaperPlane} className="nav-icon"/>Shipment</SideNavMenuItem>
            <SideNavMenuItem><FontAwesomeIcon icon={faUsers} className="nav-icon"/>Employee</SideNavMenuItem>
        </SideNavItems>
        </StyledSideNav>
    );
};
export default Sidebar;
