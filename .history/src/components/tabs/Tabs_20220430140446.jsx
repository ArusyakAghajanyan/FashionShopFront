import React from "react";
import { Tab } from "semantic-ui-react";
import DataTable from "../dataTable/DataTable";
import PendingTable from "../dataTable/PendingTable";
import { useState, useEffect } from 'react';
import Paginations from '../pagination/Pagination';
import "./tabs.css"

const Tabs = ({ pendingProducts, allProducts, changeStatus, uploadImg }) => {

  const panes = [
    {
      menuItem: "All Products",
      render: () => (
        <Tab.Pane>
          <DataTable list={allProducts} uploadImg={uploadImg} />
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Pending",
      render: () => (
        <Tab.Pane>
          <PendingTable 
            list={pendingProducts} 
            changeStatus={changeStatus} 
          />
        </Tab.Pane>
      ),
    },
  ];
  return (
    <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />
  );
};

export default Tabs;
