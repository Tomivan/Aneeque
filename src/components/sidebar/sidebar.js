import React from 'react';
import { SideNavItems, SideNavLink, SideNavMenuItem } from 'carbon-components-react/lib/components/UIShell';
import './sidebar.css';
import { StyledSideNav } from './style';

const Sidebar = () => {
    return(
        <StyledSideNav isFixedNav expanded isChildOfHeader={false} aria-label="Side Navigation" class="sidenav">
           <div className="nav-heading">
               <img src="" alt="The Tumbas logo" className="logo"/>
           </div>
           <SideNavItems>
          <SideNavLink> Menu</SideNavLink>
            <SideNavMenuItem aria-current="page"><img src="" alt="Dashboard icon" className="nav-icon"/>Overview</SideNavMenuItem>
            <SideNavMenuItem><img src="" alt="Balance icon" className="nav-icon"/>Order</SideNavMenuItem>
            <SideNavMenuItem><img src="" alt="Customers icon" className="nav-icon"/>Products</SideNavMenuItem>
            <SideNavMenuItem><img src="" alt="Analytics icon" className="nav-icon"/>Settings</SideNavMenuItem>
          <SideNavLink>Business</SideNavLink> 
            <SideNavMenuItem><img src="" alt="Settings" className="nav-icon"/>Shipment</SideNavMenuItem>
            <SideNavMenuItem><img src="" alt="Team icon" className="nav-icon"/>Employment</SideNavMenuItem>
        </SideNavItems>
        </StyledSideNav>
    );
};
export default Sidebar;
