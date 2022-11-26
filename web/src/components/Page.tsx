import { Box } from "@mui/material";
import React, { ReactNode } from 'react';
import Header from "./Header";

type PageProps = {
  children: ReactNode
}

function Page(props: PageProps) {

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <Box sx={{ padding: 4, backgroundColor: "#F0F2F5", flexGrow: 1 }}>
        {props.children}
      </Box>
    </Box>
  );
}

export default Page;
