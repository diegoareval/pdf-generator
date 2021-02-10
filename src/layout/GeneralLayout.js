import React from "react";
const styles = {
  container: {
    height: "100vh",
    width: "100vw",
    paddingTop: 20,
    backgroundColor: "gray",
  },
};
const GeneralLayout = ({ children }) => {
  return <div style={styles.container}>{children}</div>;
};

export default GeneralLayout;
