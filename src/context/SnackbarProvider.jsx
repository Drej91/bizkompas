import React, { createContext, useState, useContext } from "react";

const SnackbarContext = createContext();

// Create a custom hook to use the snackbar
export const useSnackbar = () => {
  const context = useContext(SnackbarContext);
  if (!context) {
    throw new Error("useSnackbar must be used within a SnackbarProvider");
  }
  return context;
};

export const SnackbarProvider = ({ children }) => {
  const [snackbarMessage, setSnackbarMessage] = useState(null);

  const showSnackbar = (message) => {
    setSnackbarMessage(message);
    setTimeout(() => {
      setSnackbarMessage(null);
    }, 4000); // Change the timeout as needed
  };

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}
      {snackbarMessage && (
        <div
          style={{
            position: "fixed",
            bottom: 20,
            left: "50%",
            transform: "translateX(-50%)",
            background: "#333",
            color: "#fff",
            padding: 10,
            borderRadius: 5,
          }}
        >
          {snackbarMessage}
        </div>
      )}
    </SnackbarContext.Provider>
  );
};
