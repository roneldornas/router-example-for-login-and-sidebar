import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SideBar from './Sidebar';
import { routes }  from '../routes';

function SidebarExample() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <SideBar />

        <div style={{ flex: 1, padding: "10px" }}>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              component={route.component}
            />
          ))}
        </div>
      </div>
    </Router>
  );
}

export default SidebarExample;