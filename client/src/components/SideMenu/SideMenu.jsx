import React, { useState } from "react";
import { Layout, Menu } from "antd";


const { Sider } = Layout;

const SideMenu = ({ labelValues,OnChangeFilterSort }) => {
  const colorBgContainer = "#fff"; 
  const borderRadiusLG = "10px"; 

  const [openKeys, setOpenKeys] = useState([]);

  // Function to handle menu item clicks
  const onMenuClick = ({ key ,keyPath}) => {
    console.log("Selected Menu Item Key:", key,keyPath);
    OnChangeFilterSort(key,keyPath)
    // Close all submenus when an item is selected
    setOpenKeys([]);
  };

  // Function to handle menu open state changes
  const onOpenChange = (keys) => {
    // Open only the latest submenu that was opened
    const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
    if (latestOpenKey) {
      setOpenKeys([latestOpenKey]);
    } else {
      setOpenKeys([]);
    }
  };

  return (
    <div className="w-full flex">
      <div className="m-auto rounded-2xl py-4">
        <Layout
          style={{
            background: "white",
            borderRadius: borderRadiusLG,
          }}
        >
          <Sider
            style={{
              background: "white",
            }}
            width={300}
          >
            <Menu
              mode="inline"
              onClick={onMenuClick}
              items={labelValues}
              style={{
                height: "100%",
                backgroundColor: "white",
              }}
              openKeys={openKeys}
              onOpenChange={onOpenChange}
            />
          </Sider>
        </Layout>
      </div>
    </div>
  );
};

export default SideMenu;
