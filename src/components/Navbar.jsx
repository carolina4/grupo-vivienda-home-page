import React, { useState } from 'react';
import {
  Link
} from "react-router-dom";
import {
  AppBar,
  Button,
  Drawer,
  List,
  ListItem,
} from '@material-ui/core';
import logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Navbar({ location }) {
  const pages = [
    {
      title: "Inicio",
      url: "/"
    },
    {
      title: "Bono Vivienda",
      url: "/bono"
    },
    {
      title: "Prefa Vivienda",
      url: "/prefa"
    },
    {
      title: "Contáctenos",
      url: "/contacto"
    }
  ];

  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  return (
    <React.Fragment>
      <AppBar
        position="fixed"
        color="transparent"
        style={{ backgroundColor: '#7f7f7f' }}
      >
        <div className="flex justify-between items-center pr3" style={{ height: '5rem' }}>
          <Link to="/" className="f4 ml4 btn">
            <div className="flex items-center">
              <img src={logo} alt="Logo" style={{ width: '60px' }} />
              <div className="ml2 white">GRUPO VIVIENDA</div>
            </div>
          </Link>
          <div>
            <div className="dn flex-l">
              {pages.map((page, iter) => (
                <Link
                  to={page.url}
                  key={`navbar-item-${iter}`}
                  className={`btn navbar-btn f4 ml4 ${location.pathname === page.url ? 'selected' : ''}`}
                >
                  {page.title}
                </Link>
              ))}
            </div>
            <div className="dn-l">
              <Button onClick={toggleDrawer}>
                <FontAwesomeIcon icon={faBars} className="white" size="lg" />
              </Button>
            </div>
          </div>
        </div>
      </AppBar>
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
        <List>
          {pages.map((page, iter) => (
            <Link
              to={page.url}
              className={`f4 no-underline ml4 ${location.pathname === page.url ? 'selected' : ''}`}
              key={`drawer-item-${iter}`}
              onClick={toggleDrawer}
            >
              <ListItem className="mh2">
                {page.title}
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
    </React.Fragment>
  );
}

export default Navbar;
