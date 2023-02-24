import React from "react";
import { Link } from "react-router-dom";
import { SideMenuButton } from "../../components/Blocks/Button";

import { NotFoundContainer, Image } from "./NotFound_sc";

const NotFound = () => {

  return (
    <NotFoundContainer>
      <Link to="/dashboard">
        <SideMenuButton style={{ marginTop: '1rem', width: '220px'}}>
          Return to dashboard
        </SideMenuButton>
      </Link>
      <Image src="https://dinahosting.com/blog/cont/uploads/2021/03/error-404.jpg"></Image>
    </NotFoundContainer>
  );
};

export default NotFound;
