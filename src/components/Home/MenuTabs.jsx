import React , {useState} from 'react';
import "./Home.scss";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';




export default function MenuTabs({ value, handleChange }) {
  return (
    <div className="main-menu-section">
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <Tab label="Egg breakfast" />
        <Tab label="Bagels" />
        <Tab label="Healthy picks" />
        <Tab label="Biscuit & Gravy" />
        <Tab label="Pancakes" />
      </Tabs>
    </div>
  );
}