/*import React, { Component } from "react";
import QrReader from "react-qr-scanner";
class QrContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "hold qr can be changed"
    };
    this.handlescan = this.handlescan.bind(this);
  }

  handlescan(result) {
    this.setState({
      result: "hello"
    });
  }
  handleError(err) {
    console.error(err);
  }

  render() {
    const previewStyle = {
      height: 700,
      width: 1000,
      display: "flex",
      justifycontent: "center"
    };

    const camStyle = {
      display: "flex",
      justifycontent: "center",
      marginTop: "-50px"
    };

    const textStyle = {
      fontSize: "30px",
      textAlign: "center",
      marginTop: "-80px"
    };

    return (
      <React.Fragment>
        <div style={camStyle}>
          <QrReader
            delay={100}
            style={previewStyle}
            onError={this.handleError}
            onScan={this.handleScan}
          />
        </div>
        <p style={textStyle}>{this.state.result}</p>
      </React.Fragment>
    );
  }
}

export default QrContainer;
*/
/*
import React, { Component } from "react";
import QrReader from "modern-react-qr-reader";

class Test extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: "No result"
    };

    this.handleError = this.handleError.bind(this);
    this.handleScan = this.handleScan.bind(this);
  }

  handleScan = (data) => {
    if (data) {
      this.setState({
        result: data
      });
      console.log(this.state.result);
      // this.setState({result: data});
    }
  };

  handleError = (err) => {
    console.error(err);
  };

  render() {
    return (
      <div>
        <QrReader
          delay={300}
          facingMode={"environment"}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: "100%" }}
        />
        <p>{this.state.result}</p>
      </div>
    );
  }
}
export default Test;
*/ import React, {
  useState
} from "react";
import QrReader from "react-web-qr-reader";

const Example = () => {
  const delay = 500;

  const previewStyle = {
    height: 240,
    width: 320
  };

  const [result, setResult] = useState("No result");

  const handleScan = (result) => {
    if (result) {
      setResult(result);
    }
  };

  const handleError = (error) => {
    console.log(error);
  };

  return (
    <>
      <QrReader
        delay={delay}
        style={previewStyle}
        onError={handleError}
        onScan={handleScan}
      />
      <p>{result}</p>
    </>
  );
};

export default Example;
