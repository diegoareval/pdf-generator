import React, { Component } from "react";
import { PDFExport } from "@progress/kendo-react-pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import canvg from "canvg";
import ReactDOMServer from "react-dom/server";
import Table from "./components/table";
import {Icons} from "./Icons/icons"
import DownloadButton from "./shared/DownloadButton";
import PdfLayout from "./layout/PdfLayout";
import GeneralLayout from "./layout/GeneralLayout";

class App extends Component {
  resume;

  constructor() {
    super();
    this.iconsToConvert = Icons
    this.canvLoaded = false;
    this.canvas = null;
  }

  exportPDF = () => {
    this.resume.save();
  };
  

  convertSvgToImage = arr => {
    let canv = this.refs.canvas;
    if (!this.canvLoaded) {
      this.canvLoaded = true;
      canv.getContext("2d");
      arr.forEach((d, i) => {
        let htmlString = ReactDOMServer.renderToStaticMarkup(
          <FontAwesomeIcon
            icon={d.icon}
            size={"3x"}
            style={{ color: "#005696", height: "500px", width: "500px" }}
          />
        );
        canvg(canv, htmlString);
        d.icon = canv.toDataURL("image/png");
      });
      this.setState({});
    }
  };

  componentDidMount() {
    this.convertSvgToImage(this.iconsToConvert);
  }

  render() {
    return (
     <GeneralLayout>
        {!this.canvLoaded && (
          <canvas ref="canvas" style={{ display: "none" }} />
        )}
        <DownloadButton exportPDF={this.exportPDF}/>
        <PDFExport
          paperSize={"Letter"}
          fileName="report.pdf"
          title=""
          subject=""
          keywords=""
          ref={r => (this.resume = r)}
        >
          <PdfLayout>
            Hi!
            {this.canvLoaded &&
              this.iconsToConvert.map((iconObject, index) => {
                return (
                  <img
                    src={iconObject.icon}
                    key={"img-" + index}
                    alt={iconObject.alt}
                    style={{ height: 25, width: 25 }}
                  />
                );
              })}
              <Table/>
              </PdfLayout>
        </PDFExport>
        </GeneralLayout>
    );
  }
}

export default App;
