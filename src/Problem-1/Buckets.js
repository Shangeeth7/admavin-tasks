import React, { useState } from "react";
import "./style.css";

function ItemTransfer() {
  const [container1, setContainer1] = useState([
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
    { id: 4, name: "Item 4" },
  ]);
  const [container2, setContainer2] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedContainer, setSelectedContainer] = useState(null);

  const handleSelectionChange = (event) => {
    const { name, checked } = event.target;
    if (checked) {
      setSelectedItems([...selectedItems, name]);
    } else {
      setSelectedItems(selectedItems.filter((item) => item !== name));
    }
    setSelectedContainer(
      name.startsWith("container1-") ? "container1" : "container2"
    );
  };

  const handleTransfer = () => {
    if (!selectedContainer || selectedItems.length === 0) {
      return;
    }
    if (selectedContainer === "container1") {
      setContainer2([
        ...container2,
        ...container1.filter((item) =>
          selectedItems.includes(`container1-${item.id}`)
        ),
      ]);
      setContainer1(
        container1.filter(
          (item) => !selectedItems.includes(`container1-${item.id}`)
        )
      );
    } else {
      setContainer1([
        ...container1,
        ...container2.filter((item) =>
          selectedItems.includes(`container2-${item.id}`)
        ),
      ]);
      setContainer2(
        container2.filter(
          (item) => !selectedItems.includes(`container2-${item.id}`)
        )
      );
    }
    setSelectedItems([]);
    setSelectedContainer(null);
  };

  const handleAddItem = () => {
    setContainer1([
      ...container1,
      { id: container1.length + 1, name: `Item ${container1.length + 1}` },
    ]);
  };

  const handleDeleteItems = () => {
    if (!selectedContainer || selectedItems.length === 0) {
      return;
    }
    if (selectedContainer === "container1") {
      setContainer1(
        container1.filter(
          (item) => !selectedItems.includes(`container1-${item.id}`)
        )
      );
    } else {
      setContainer2(
        container2.filter(
          (item) => !selectedItems.includes(`container2-${item.id}`)
        )
      );
    }
    setSelectedItems([]);
    setSelectedContainer(null);
  };

  return (
    <div>
      <div className="container-box">
        <div>
          <h2>Bucket 1</h2>
          {container1.map((item, index) => (
            <div key={index}>
              <input
                type="checkbox"
                name={`container1-${item.id}`}
                onChange={handleSelectionChange}
              />
              {item.name}
            </div>
          ))}
        </div>
        <div>
          <h2>Bucket 2</h2>
          {container2.map((item, index) => (
            <div key={index}>
              <input
                type="checkbox"
                name={`container2-${item.id}`}
                onChange={handleSelectionChange}
              />
              {item.name}
            </div>
          ))}
        </div>
      </div>
      <div className="buttonsss">
        <button onClick={handleAddItem}>Add Item </button>
        <button
          onClick={handleTransfer}
          disabled={!selectedContainer || selectedItems.length === 0}
        >
          Transfer
        </button>
        <button
          onClick={handleDeleteItems}
          disabled={selectedItems.length === 0}
        >
          Delete Selected Items
        </button>
      </div>
    </div>
  );
}

export default ItemTransfer;
