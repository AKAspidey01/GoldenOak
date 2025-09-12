import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Menu.scss";
import MenuData from "./MenuContent";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabPanel from "../Home/TabPanel";
import MenuTabs from "../Home/MenuTabs";

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
}

const Menu = () => {
  const [value, setValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const menuItems = [
    "All",
    "Egg Combos",
    "Healthy Picks",
    "Breakfast Bagels",
    "Biscuits & Gravy",
    "Buttermilk Pancakes",
    "French Toast",
    "Belgian Waffles",
    "Lunch Specials",
    "Children's Menu",
    "Sides & Add-Ons",
    "Beverages",
    "3-Egg Omelets",
    "Breakfast Skillets",
    "Breakfast Burritos",
  ];

  const filteredMenuData = (tabIndex) => {
    if (tabIndex === 0) {
      return MenuData;
    } else {
      const selectedTabLabel = menuItems[tabIndex];
      const selectedObject = MenuData.find(
        (item) => (item.title + " " + item.span).trim() === selectedTabLabel
      );
      return selectedObject ? [selectedObject] : [];
    }
  };

  const [selectedTab, setSelectedTab] = useState("All");

  // Create tab names
  const tabs = [
    "All",
    ...MenuData.map((menu) => `${menu.title} ${menu.span}`.trim()),
  ];

  // Handle change for MUI Tabs
  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  // Filter menu data
  const filteredMenu =
    selectedTab === "All"
      ? MenuData
      : MenuData.filter(
          (menu) => `${menu.title} ${menu.span}`.trim() === selectedTab
        );

  return (
    <div className="menu-main-section">
      <section className="main-breadcrumb-similar">
        <div className="inner-menu-bread-crumb">
          <div className="container">
            <h2 className="">MENU</h2>
            <ul className="flex items-center justify-center gap-x-3">
              <li>
                <NavLink to={"/"}>Golden Oak</NavLink>
              </li>
              <li>
                <i class="bi bi-chevron-right text-white"></i>
              </li>
              <li>
                <p>Menu</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="menu-section-1">
        <div className="inner-menu-section-1">
          <div className="container">
            <div className="block-content-section">
              <h2 className="text-center">
                Pick Your <span> Plate</span>
              </h2>
              <div className="para-block-content-sec">
                <p className="text-center">
                  Welcome to our table! We've crafted a menu with something for
                  everyone, <br />
                  from hearty classics to fresh, healthy options.
                </p>
              </div>
            </div>
            <div className="tabs-top-list-sec">
              <Tabs
                value={selectedTab}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="menu tabs"
                textColor="inherit"
                indicatorColor="primary"
              >
                {tabs.map((tab, idx) => (
                  <Tab key={idx} label={tab} value={tab} />
                ))}
              </Tabs>
            </div>
          </div>
        </div>
      </section>
      <section className="menu-section-tab-panel-body">
        {filteredMenu.map((menu, index) => (
          <div className={`inner-menu-tab-panel ${ menu.background == true ? "gray-bg-sec-menu" : "" }`} key={index}>
            <div className="container">
              <div className="block-content-section">
                <div className="inner-heading-flex-sec flex items-center gap-x-5 flex-wrap">
                  <h2>
                    {menu.title} <span>{menu.span}</span>
                  </h2>
                  {menu.addOn == true ? (
                    <p className="addonText-para font-plusjakarta italic font-medium text-sm px-6 py-1 rounded-lg bg-primary">
                      {menu.addOnText}
                    </p>
                  ) : menu.sideDes == true ? (
                    <p className="italic text-sm addonText-para ">{menu.sideText}</p>
                  ) : null}
                </div>
              </div>
              {menu.lunchSpecials == true ? (
                <div className="luch-special-menu-sec single-tab-section-home-screen grid grid-cols-12 gap-y-7">
                  <div className="right-image-sec-tab col-span-12 max-h-[400px]">
                    {menu.menuImg ? (
                      <img src={menu.menuImg} className="rounded-2xl" alt="" />
                    ) : (
                      <div className="bg-gray-100 h-full flex items-center justify-center rounded-2xl">
                        <span className="text-gray-500">No Image</span>
                      </div>
                    )}
                  </div>
                  <div className="left-menu-section-home-screen col-span-12">
                    <div className="grid grid-cols-12 gap-y-7 gap-x-12 complete-lunch-special-yes-not-outer-grid">
                      {menu.menuList.map((item, menuIndex) => {
                        const isLast = menuIndex === menu.menuList.length - 1;
                        return (
                            <div className={`${item.menuTitle == "Dressings" ? 'col-span-12' : ' col-span-6'}`}>
                                {item.menuTitle == "Dressings" ? 
                                    <div className="dressings-section bg-white rounded-2xl p-8">
                                        <div className="dressigns-head flex items-center gap-4 flex-wrap">
                                            <h4>Dressings</h4>
                                            <p>Ranch • Italian • Thousands Island</p>
                                        </div>
                                        <div className="grid grid-cols-12 gap-x-10 gap-y-7 dressings-menu-grid-section-outer">
                                            {item.submenu.map((dressItem , dressIndex) => {
                                            return (
                                            <div className={`single-menu-item pb-7 col-span-6 ${isLast ? "border-b-0" : "border-b border-b-gray-300"}`} key={dressIndex}>
                                                <div className="top-menu-name-price flex items-center justify-between gap-x-4 mb-2.5">
                                                    <p className="text-black font-medium text">
                                                        {dressItem.subMenuTitle}
                                                    </p>
                                                    <p className="text-black font-medium text">
                                                        {dressItem.price}
                                                    </p>
                                                </div>
                                                <p className="text-sm text-black w-10/12">
                                                    {dressItem.subMenuDesc}
                                                </p>
                                            </div> 
                                            )
                                        })}
                                        </div>
                                    </div>: 
                                    <div className={`single-menu-item pb-7 ${isLast ? "border-b-0" : "border-b border-b-gray-300"}`} key={menuIndex}>
                                        <div className="top-menu-name-price flex items-center justify-between gap-x-4 mb-2.5">
                                            <p className="text-black font-medium text">
                                                {item.menuTitle}
                                            </p>
                                            <p className="text-black font-medium text">
                                                {item.price}
                                            </p>
                                        </div>
                                        <p className="text-sm text-black w-10/12">
                                            {item.menuDesc}
                                        </p>
                                    </div>                                 
                                }
                            </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="single-tab-section-home-screen grid grid-cols-12 gap-x-12">
                  <div className="left-menu-section-home-screen col-span-6">
                    <div className="flex flex-col gap-y-7">
                      {menu.menuList.map((item, menuIndex) => {
                        const isLast = menuIndex === menu.menuList.length - 1;
                        return (
                          <div
                            className={`single-menu-item pb-7 ${
                              isLast
                                ? "border-b-0"
                                : "border-b border-b-gray-300"
                            }`}
                            key={menuIndex}
                          >
                            <div className="top-menu-name-price flex items-center justify-between gap-x-4 mb-2.5">
                              <p className="text-black font-medium text">
                                {item.menuTitle}
                              </p>
                              <p className="text-black font-medium text">
                                {item.price}
                              </p>
                            </div>
                            <p className="text-sm text-black w-10/12">
                              {item.menuDesc}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="right-image-sec-tab col-span-6">
                    {menu.menuImg ? (
                      <img src={menu.menuImg} className="rounded-2xl" alt="" />
                    ) : (
                      <div className="bg-gray-100 h-full flex items-center justify-center rounded-2xl">
                        <span className="text-gray-500">No Image</span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Menu;
