import React from "react";
import "./styles.css";
import { ReactSortable } from "react-sortablejs";

const draggableList = [
  {
    name: "Mike"
  },
  {
    name: "Michael"
  },
  {
    name: "Mason"
  },
  {
    name: "Miller"
  },
  {
    name: "Milner"
  },
  {
    name: "Merry"
  }
];

export default function App() {
  const [list, setList] = React.useState(draggableList);

  return (
    <div className="App">
      <h1>
        Very Simple Draggable Stuff <>⚛️</>
      </h1>
      <ReactSortable
        filter=".addImageButtonContainer"
        dragClass="sortableDrag"
        list={list}
        setList={setList}
        animation="200"
        easing="ease-out"
      >
        {list.map(item => (
          <div className="draggableItem">{item.name}</div>
        ))}
      </ReactSortable>
    </div>
  );
}
