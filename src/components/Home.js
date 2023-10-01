import React from "react";
import { useState } from "react";
import Container from "react-bootstrap/Container";
export default function Home() {
  const [state, setState] = useState([
    "Apple",
    "Mango",
    "Grapes",
    "Oranges",
    "kiwis",
  ]);
  const [value, setValue] = useState("");
  //const [key, setKey] = useState();
  const [add, setAdd] = useState("");
  const handleUpdate = (value, index, newValue) => {
    console.log(value, index, newValue);
    let a = state;
    a[index] = newValue;
    setState([...a]);
    console.log([...a]);
  };
  const handleDelete = (item, index) => {
    //
    console.log(item);
    let a = state;
    a = a.filter((i) => i !== item);
    setState([...a]);
  };
  const handleAddition = (key, value) => {
    setState((pv) => [...pv, add]);
  };
  return (
    <Container style={{ paddingTop: "45px" }}>
      <h5 style={{ position: "relative" }}>
        Please use add , delete and update operations for the fruit list
      </h5>
      <div
        style={{
          border: "solid 2px",
          padding: "55px",
        }}
      >
        <input
          type="text"
          style={{ margin: "5px" }}
          onChange={(e) => {
            return setAdd(e.target.value);
          }}
        ></input>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleAddition}
          style={{ margin: "5px" }}
        >
          Add Fruit
        </button>

        {state.map((item, index) => {
          return (
            <div key={index}>
              <h3 style={{ margin: "1em" }}>{item}</h3>
              <input
                key={item}
                type="text"
                style={{ margin: "5px" }}
                onChange={(e) => {
                  return setValue(e.target.value);
                }}
              ></input>
              <button
                onClick={() => handleDelete(item, index)}
                style={{ marginLeft: "5px" }}
              >
                Delete
              </button>
              <button
                onClick={() => handleUpdate(item, index, value)}
                style={{ marginLeft: "5px" }}
              >
                Update
              </button>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
