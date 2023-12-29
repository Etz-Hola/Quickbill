import React from "react";
import Invoice from "../components/Invoice";

import SidebarWithHeader from "../components/SidebarWithHeader";

const CreateInvoicePage = () => {
  return (
    <SidebarWithHeader>


      {/* <NavBar/> */}
      <Invoice />

    </SidebarWithHeader>
  );
};

export default CreateInvoicePage;
