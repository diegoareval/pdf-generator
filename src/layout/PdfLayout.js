import React from "react";

const styles = {
  container: {
    height: 792,
    width: 612,
    padding: "none",
    backgroundColor: "white",
    boxShadow: "5px 5px 5px black",
    margin: "auto",
    overflowX: "hidden",
    overflowY: "hidden",
  },
};
const PdfLayout = ({ children }) => {
  return <div style={styles.container}>{children}</div>;
};

export default PdfLayout;
