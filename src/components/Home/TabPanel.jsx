import * as React from "react";
import Box from "@mui/material/Box";

export default function TabPanel({ children, value, index }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
    >
      {value === index && <div sx={{ p: 3 }}>{children}</div>}
    </div>
  );
}