import React from "react";
import { connect } from "react-redux";
import { sendData, sendDataAsync, sendErrorAsync } from "../redux/actions";

const Main = ({ data, sendData, sendDataAsync, sendErrorAsync }) => {
  const textRef = React.useRef(null);
  return (
    <div className="mainComp">
      <h1>Redux Saga</h1>
      <input type="text" ref={textRef}></input>
      <button onClick={() => sendData(textRef.current.value)}>Send Data</button>
      <button onClick={() => sendDataAsync(textRef.current.value)}>
        Send Data async(2 second)
      </button>
      <button onClick={sendErrorAsync}>Send Error async(1 second)</button>
      <hr />
      <p>
        <i>this saga will take every action</i>
      </p>
      <h1>Data: {data}</h1>
    </div>
  );
};

const mapStateToProps = (state) => ({ data: state.data });

const mapDispatchToProps = {
  sendData,
  sendDataAsync,
  sendErrorAsync,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
