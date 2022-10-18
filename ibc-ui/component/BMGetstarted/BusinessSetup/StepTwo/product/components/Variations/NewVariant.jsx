import React, { useState, useRef, useEffect } from "react";
import VariantChip from "./VariantChip";

const NewVariant = ({ variationList, setVariationList, setModalIsOpen }) => {
  const [displayCustomInput, setDisplayCustomInput] = useState(false);
  const [customInputValue, setCustomInputValue] = useState("");

  const getIndex = (display) => {
    const array = [...variationList];
    const arrayIndex = array.findIndex((result) => result.display === display);
    return arrayIndex;
  };

  const onVariationCategorySelection = (e) => {
    if (e.target.value !== "") {
      if (e.target.value === "_custom") {
        setDisplayCustomInput(true);
      } else {
        const variationCategory = [...variationList];
        variationCategory[getIndex(e.target.value)].isSelected = true;
        if (variationCategory[getIndex(e.target.value)].structure.right.top !== "dropDownSelect") {
          console.log(variationCategory[getIndex(e.target.value)].structure);
          variationCategory[getIndex(e.target.value)].structure.right.textComponentIsVisible = true;
        }
        setVariationList(variationCategory);
      }
      document.getElementById("newVariantSelect").value = "";
    }
  };

  const handleCheck = (index, dataToSelect) => {
    const array = [...variationList];

    if (dataToSelect === "price_vary") {
      let price_vary = !array[index].price_vary;
      array[index].price_vary = price_vary;
    } else {
      let qty_vary = !array[index].qty_vary;
      array[index].qty_vary = qty_vary;
    }
    setVariationList(array);
  };

  const handleDeleteView = (index) => {
    const array = [...variationList];
    array[index].isSelected = false;
    array[index].structure.right.textComponentIsVisible = false;
    if (array[index].structure.right.data) {
      //reset array
      const newData = [...array[index].structure.right.data, ...array[index].structure.right.options];
      array[index].structure.right.data = newData;
    }
    //remove options and reset
    array[index].price_vary = false;
    array[index].qty_vary = false;
    array[index].structure.right.options = [];
    array[index].structure.right.hasError = true;
    setVariationList(array);
  };

  const handleRename = (index) => {
    const array = [...variationList];
    array[index].requiresEdit = true;
    setVariationList(array);
  };

  const action = (value, index) => {
    const deleteBtn = (
      <button className="edit_variant_option" onClick={handleDeleteView.bind(this, index)}>
        Delete
      </button>
    );
    if (value.action === "delete") {
      return <div style={{ marginLeft: 10 }}>{deleteBtn}</div>;
    } else {
      return (
        <div style={{ marginLeft: 10 }}>
          {value.editIsVisible && (
            <button className="edit_variant_option" onClick={handleRename.bind(this, index)}>
              Rename
            </button>
          )}
          {deleteBtn}
        </div>
      );
    }
  };

  const handleAllOptions = (index) => {
    const array = [...variationList];
    //join
    const newOption = [...array[index].structure.right.data, ...array[index].structure.right.options];
    array[index].structure.right.options = newOption;
    //remove selection
    array[index].structure.right.data = [];
    array[index].structure.right.hasError = false;
    setVariationList(array);
  };

  const handleScale = (name, index) => {
    const array = [...variationList];
    const optionIndex = array[index].structure.right.options.findIndex((result) => result.name === name);
    const display = array[index].display;
    const el = document.getElementById(`${display}${optionIndex}`);
    el.style.transform = "scale(1.1)";
    // el.scrollIntoView();
    setTimeout(() => {
      el.style.transform = "scale(1)";
    }, 300);
  };

  const handleSelectRight = (e, index) => {
    const value = e.target.value.split("|");
    const name = value[1];
    const id = value[0];
    const array = [...variationList];
    if (array[index].structure.right.options.filter((result) => result.name === name).length !== 0) {
      handleScale(name, index);
      document.getElementById("handleSelectRight" + index).value = "";
      return;
    }
    if (e.target.value !== "") {
      if (e.target.value === "_add_all_options") {
        handleAllOptions(index);
      } else if (e.target.value === "_create_new_option") {
        array[index].structure.right.textComponentIsVisible = true;
        array[index].structure.right.hasError = false;
        setVariationList(array);
      } else {
        //remove from selection
        const dataIndex = array[index].structure.right.data.findIndex((result) => result.name === name);
        array[index].structure.right.data.splice(dataIndex, 1);
        //add to options
        array[index].structure.right.options.unshift({ name, id: parseInt(id) });
        array[index].structure.right.hasError = false;
        setVariationList(array);
      }

      document.getElementById("handleSelectRight" + index).value = "";
    }
  };

  const handleSelectLeft = (e, index) => {
    const value = e.target.value.split("|");
    const name = value[1];
    const id = value[0];
    const array = [...variationList];
    if (e.target.value !== "") {
      if (e.target.value === "Other") {
        alert("other");
      } else {
        //  array[index].editIsVisible = true
        array[index].structure.right.textComponentIsVisible = true;
        //reset selection
        for (let i = 0; i < array[index].structure.left.data.length; i++) {
          array[index].structure.left.data[i].isSelected = false;
        }
        array[index].structure.left.data[parseInt(id)].isSelected = true;
        array[index].structure.left.prevSelected = name;
      }
      setVariationList(array);
    }
  };

  const handleDeleteOption = (variantListIndex, optionsIndex) => {
    const array = [...variationList];
    const optionToDelete = array[variantListIndex].structure.right.options[optionsIndex];
    if (!optionToDelete.isCustom) {
      //add to data list at required index
      array[variantListIndex].structure.right.data.splice(optionToDelete.id, 0, optionToDelete);
      //remove from options list
    }
    //reset hasError to true
    if (array[variantListIndex].structure.right.options.length === 1) {
      array[variantListIndex].structure.right.hasError = true;
    }
    array[variantListIndex].structure.right.options.splice(optionsIndex, 1);

    setVariationList(array);
  };

  const handleCustomAdd = (index, unitType) => {
    const array = [...variationList];
    const inputValue = array[index].structure.right.inputValue;
    if (inputValue !== "") {
      if (array[index].structure.right.options.filter((result) => result.name === inputValue).length === 0) {
        if (unitType === "none") {
          array[index].structure.right.options.unshift({ name: inputValue, id: array.length + 1, isCustom: true, price: 0, qty: 0 });
        } else {
          //get unit
          const newValue = array[index].structure.left.data.filter((result) => result.isSelected)[0].name;
          array[index].structure.right.options.unshift({ name: `${inputValue} ${newValue}`, id: array.length + 1, isCustom: true, price: 0, qty: 0 });
        }
        array[index].structure.right.inputValue = "";
        array[index].structure.right.hasError = false;
        setVariationList(array);
      } else {
        handleScale(inputValue, index);
      }
    }
  };

  const handleTextInput = (e, index) => {
    const array = [...variationList];
    array[index].structure.right.inputValue = e.target.value;
    setVariationList(array);
  };

  const TextComponent = (inputValue, index, unitType) => {
    return (
      <div style={{ marginTop: 10 }}>
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex" }}>
            <div style={{ width: 249 }}>
              <input
                type="text"
                placeholder="Name the option"
                style={{
                  borderLeft: "1px solid #dddfe2",
                  borderBottom: "1px solid #dddfe2",
                  borderTop: "1px solid #dddfe2",
                  fontSize: 17,
                  marginTop: 3,
                  padding: 15,
                  borderRadius: 5,
                  outline: "none",
                  height: 20,
                  width: 249,
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0,
                }}
                value={inputValue}
                onChange={(e) => {
                  handleTextInput(e, index);
                }}
              />
            </div>
            <div
              style={{
                border: "1px solid #dddfe2",
                cursor: "pointer",
                padding: 10,
                height: 30,
                marginTop: 3,
                borderTopRightRadius: 5,
                borderBottomRightRadius: 5,
                backgroundColor: inputValue === "" ? "#E0E0E0" : "#fff",
              }}
              onClick={handleCustomAdd.bind(this, index, unitType)}
            >
              <p style={{ marginTop: 2 }}>Add</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderOption = (display, index, inputValue, textComponentIsVisible, unitType) => {
    return (
      <div>
        {textComponentIsVisible && TextComponent(inputValue, index, unitType)}
        {variationList.map((result, variantListIndex) => {
          if (result.display === display) {
            if (result.structure.right.options)
              return result.structure.right.options.map((contentData, optionsIndex) => (
                <VariantChip
                  result={contentData}
                  handleDeleteOption={handleDeleteOption.bind(this, variantListIndex, optionsIndex)}
                  key={optionsIndex}
                  div_id={`${display}${optionsIndex}`}
                />
              ));
          }
        })}
      </div>
    );
  };

  const renderRightView = ({ display, price_vary, qty_vary, structure }, index) => {
    let content = null;
    if (structure.right.bottom && structure.right.top) {
      const {
        right: { bottom, top, data, textComponentIsVisible, inputValue },
      } = structure;
      if (bottom === "inputText" && top === "dropDownSelect") {
        content = (
          <div style={{ marginRight: 20 }}>
            <div>
              <select
                className="variation-select-right form-control"
                placeholder="Country"
                onChange={(e) => {
                  handleSelectRight(e, index);
                }}
                defaultValue=""
                id={`handleSelectRight${index}`}
              >
                <option value="">{`Add ${display} options`}</option>
                <optgroup label={`${display} options`}>
                  {data.map((value, index) => (
                    <option value={`${value.id}|${value.name}`} key={index}>
                      {value.name}
                    </option>
                  ))}
                </optgroup>
                <optgroup label="Add all options above">
                  <option value="_add_all_options">Add all options</option>
                </optgroup>
                <optgroup label="None of these work?">
                  <option value="_create_new_option">Create a new option</option>
                </optgroup>
              </select>
            </div>
            <div>{renderOption(display, index, inputValue, textComponentIsVisible, "none")}</div>
          </div>
        );
      }
    }

    if (structure.right.top) {
      const {
        right: { top, data, textComponentIsVisible, inputValue },
      } = structure;
      if (top === "inputText") {
        content = (
          <div style={{ marginRight: 20 }}>
            <div>{renderOption(display, index, inputValue, textComponentIsVisible, "unit")}</div>
          </div>
        );
      }
    }

    if (structure.right.top) {
      const {
        right: { top, textComponentIsVisible, inputValue },
      } = structure;
      if (structure.left === undefined) {
        if (top === "inputText") {
          content = (
            <div style={{ marginRight: 20 }}>
              <div>{renderOption(display, index, inputValue, textComponentIsVisible, "none")}</div>
            </div>
          );
        }
      }
    }

    return <div>{content}</div>;
  };

  const renderLeftView = ({ display, price_vary, qty_vary, structure }, index) => {
    let content = null;
    if (structure.left) {
      const {
        left: { top, data },
      } = structure;
      if (top === "dropDownSelect") {
        content = (
          <div style={{ marginLeft: 2 }}>
            <div>
              <select
                className="variation-select-right form-control"
                placeholder="Country"
                onChange={(e) => {
                  handleSelectLeft(e, index);
                }}
                defaultValue=""
                id={`handleSelectRight${index}`}
              >
                <option value="">Select a unit</option>
                {data.map((value, index) => (
                  <option value={`${value.id}|${value.name}`} key={index}>
                    {value.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        );
      }
    }

    return <div>{content}</div>;
  };

  const handleCustomTextUpdate = (e, index) => {
    const array = [...variationList];
    array[index].display = e.target.value;
    setVariationList(array);
  };

  const renderContent = (data, index) => {
    return (
      <div style={{ display: "flex", marginBottom: 30, justifyContent: "space-between" }} key={index}>
        <div style={{ width: 500 }}>
          {data.requiresEdit ? (
            <div>
              <input
                type="text"
                placeholder="Name the option"
                style={{
                  border: "1px solid #dddfe2",
                  fontSize: 17,
                  marginTop: 3,
                  padding: 15,
                  borderRadius: 5,
                  outline: "none",
                  height: 20,
                  width: 249,
                }}
                value={data.display}
                onChange={(e) => {
                  handleCustomTextUpdate(e, index);
                }}
                onMouseLeave={() => {
                  const array = [...variationList];
                  array[index].requiresEdit = false;
                  setVariationList(array);
                }}
              />
            </div>
          ) : (
            <div>
              <div style={{ display: "flex" }}>
                <div>
                  <p>{data.display}</p>
                </div>
                {action(data, index)}
              </div>
              {renderLeftView(data, index)}
            </div>
          )}

          <div style={{ marginTop: 10 }}>
            <div>
              <input
                value={data.price_vary}
                onChange={handleCheck.bind(this, index, "price_vary")}
                type="checkbox"
                checked={data.price_vary}
                style={{ cursor: "pointer" }}
              />
              <label style={{ marginLeft: 10, cursor: "pointer", color: "gray", fontSize: 14 }} onClick={handleCheck.bind(this, index, "price_vary")}>
                Prices vary for each secondary color
              </label>
            </div>

            <div>
              <input
                type="checkbox"
                value={data.qty_vary}
                onChange={handleCheck.bind(this, index, "qty_vary")}
                type="checkbox"
                checked={data.qty_vary}
                style={{ cursor: "pointer" }}
              />
              <label style={{ marginLeft: 10, cursor: "pointer", fontSize: 14, color: "gray" }} onClick={handleCheck.bind(this, index, "qty_vary")}>
                Quantities vary for each secondary color
              </label>
            </div>
          </div>
        </div>

        {renderRightView(data, index)}
      </div>
    );
  };

  const handleAddNewVariationList = () => {
    const array = [...variationList];
    //create new array
    const obj = {
      display: customInputValue,
      action: "edit_delete",
      indexPosition: variationList.length + 1,
      isSelected: true,
      editIsVisible: true,
      requiresEdit: false,
      isCustom: true,
      price_vary: false,
      qty_vary: false,
      hasSaved: false,
      structure: {
        right: {
          top: "inputText",
          inputValue: "",
          textComponentIsVisible: true,
          options: [],
        },
      },
      value: variationList.length + 1,
    };
    array.push(obj);
    setDisplayCustomInput(false);
    setCustomInputValue("");
    setVariationList(array);
    document.getElementById("scrollData").scrollIntoView();
  };

  const handleSave = () => {
    const array = [...variationList];
    for (let i = 0; i < array.length; i++) {
      if (!array[i].structure.right.hasError) {
        if (array[i].isSelected) {
          array[i].hasSaved = true;
        }
      }
    }
    setVariationList(array);
    setModalIsOpen(false);
  };

  return (
    <div>
      <div style={{ maxHeight: 500, overflowY: "auto" }} id="scrollData">
        {variationList.map((value, index) => value.isSelected && renderContent(value, index))}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <div>
            <p>Add a variation</p>
            <select
              className="variation-select form-control"
              placeholder="Country"
              onChange={onVariationCategorySelection}
              defaultValue=""
              id="newVariantSelect"
            >
              <option value="">Select a variation type</option>
              <optgroup label="Variation type">
                {variationList.map(
                  (value, index) =>
                    !value.isSelected &&
                    !value.isCustom && (
                      <option value={value.display} key={index}>
                        {value.display}
                      </option>
                    )
                )}
              </optgroup>
              <optgroup label="None of these work?">
                <option value="_custom">Create a new variation</option>
              </optgroup>
            </select>
          </div>
          {displayCustomInput && (
            <div style={{ marginTop: 10 }}>
              <div style={{ display: "flex" }}>
                <div style={{ display: "flex" }}>
                  <div style={{ width: 249 }}>
                    <input
                      type="text"
                      placeholder="Name the variation"
                      style={{
                        borderLeft: "1px solid #dddfe2",
                        borderBottom: "1px solid #dddfe2",
                        borderTop: "1px solid #dddfe2",
                        fontSize: 17,
                        marginTop: 3,
                        padding: 15,
                        borderRadius: 5,
                        outline: "none",
                        height: 20,
                        width: 249,
                        borderTopRightRadius: 0,
                        borderBottomRightRadius: 0,
                      }}
                      value={customInputValue}
                      onChange={(e) => {
                        setCustomInputValue(e.target.value);
                      }}
                    />
                  </div>
                  <div
                    style={{
                      border: "1px solid #dddfe2",
                      cursor: "pointer",
                      padding: 10,
                      height: 30,
                      marginTop: 3,
                      borderTopRightRadius: 5,
                      borderBottomRightRadius: 5,
                      backgroundColor: customInputValue === "" ? "#E0E0E0" : "#fff",
                    }}
                    onClick={handleAddNewVariationList}
                  >
                    <p style={{ marginTop: 2 }}>Add</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div>
          <button
            onClick={handleSave}
            className="variation-btn"
            disabled={variationList.filter((result) => !result.structure.right.hasError).length === 0}
            style={{ backgroundColor: variationList.filter((result) => !result.structure.right.hasError).length === 0 ? "gray" : "black" }}
          >
            Save and continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewVariant;
