import React from 'react';
import { SideNavItems, SideNavLink, SideNavMenuItem } from 'carbon-components-react/lib/components/UIShell';
import Klasha from '../../assets/images/logo.svg';
import Analytics from '../../assets/images/Analytics.svg';
import Call from '../../assets/images/Call.svg';
import Dashboard from '../../assets/images/dashboard.svg';
import Customer from '../../assets/images/customer.svg';
import Filter from '../../assets/images/Filter.svg';
import Logout from '../../assets/images/Logout.png';
import Star from '../../assets/images/Star.svg';
import Wallet from '../../assets/images/Wallet.svg';
import './sidebar.css';
import { StyledSideNav } from './style';

const Sidebar = () => {
    return(
        <StyledSideNav isFixedNav expanded isChildOfHeader={false} aria-label="Side Navigation" class="sidenav">
           <div className="nav-heading">
               <img src={Klasha} alt="The Klasha logo" className="logo"/>
           </div>
           <SideNavItems>
          <SideNavLink> Menu</SideNavLink>
            <SideNavMenuItem><img src={Dashboard} alt="Dashboard icon" className="nav-icon"/>Overview</SideNavMenuItem>
            <SideNavMenuItem aria-current="page"><img src={Wallet} alt="Balance icon" className="nav-icon"/>Order</SideNavMenuItem>
            <SideNavMenuItem><img src={Customer} alt="Customers icon" className="nav-icon"/>Products</SideNavMenuItem>
            <SideNavMenuItem><img src={Analytics} alt="Analytics icon" className="nav-icon"/>Settings</SideNavMenuItem>
          <SideNavLink>Business</SideNavLink> 
            <SideNavMenuItem><img src={Filter} alt="Settings" className="nav-icon"/>Shipment</SideNavMenuItem>
            <SideNavMenuItem><img src={Star} alt="Team icon" className="nav-icon"/>Employment</SideNavMenuItem>
        </SideNavItems>
        </StyledSideNav>
    );
};
export default Sidebar;
