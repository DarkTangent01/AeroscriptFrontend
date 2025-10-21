// Filename: ErrorMessage.jsx
import React from "react";
import { Alert, AlertTitle } from "@mui/material";

const ErrorMessage = ({ severity = "error", title, children }) => {
  return (
    <Alert
      severity={severity}
      variant="filled"
      sx={{
        mb: 2,
        borderRadius: 2,
        fontWeight: 500,
        boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
      }}
    >
      {title && <AlertTitle>{title}</AlertTitle>}
      {children}
    </Alert>
  );
};

export default ErrorMessage;
