import React, { useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const VariationContent = ({ variationList, setVariationList }) => {
  const handlePriceChange = (e, optionsIndex, variationListIndex) => {
    let newArray = [...variationList];
    newArray[variationListIndex].structure.right.options[optionsIndex].price = e.target.value;
    setVariationList(newArray);
  };

  const handleQtyChange = (e, optionsIndex, variationListIndex) => {
    let newArray = [...variationList];
    newArray[variationListIndex].structure.right.options[optionsIndex].qty = e.target.value;
    setVariationList(newArray);
  };

  const handleDelete = (optionsIndex, variationListIndex) => {
    let array = [...variationList];
    if (array[variationListIndex].structure.right.options.length === 1) {
      //remove variant and option
      array[variationListIndex].isSelected = false;
      array[variationListIndex].hasSaved = false;
      array[variationListIndex].structure.right.textComponentIsVisible = false;
      if (array[variationListIndex].structure.right.data) {
        //reset array
        const newData = [...array[variationListIndex].structure.right.data, ...array[variationListIndex].structure.right.options];
        array[variationListIndex].structure.right.data = newData;
      }
      //remove options and reset
      array[variationListIndex].price_vary = false;
      array[variationListIndex].qty_vary = false;
      array[variationListIndex].structure.right.options = [];
      array[variationListIndex].structure.right.hasError = true;
      setVariationList(array);
    } else {
      //remove variant
      const optionToDelete = array[variationListIndex].structure.right.options[optionsIndex];
      if (!optionToDelete.isCustom) {
        //add to data list at required index
        array[variationListIndex].structure.right.data.splice(optionToDelete.id, 0, optionToDelete);
        //remove from options list
      }
      array[variationListIndex].structure.right.options.splice(optionsIndex, 1);
      setVariationList(array);
    }
  };

  const priceInput = (value, optionsIndex, variationListIndex) => {
    return (
      <div style={{ display: "flex", width: 200 }}>
        <div
          style={{
            borderLeft: "1px solid #dddfe2",
            borderTop: "1px solid #dddfe2",
            borderBottom: "1px solid #dddfe2",
            width: 40,
            height: 30,
            padding: 10,
            marginTop: 3,
            borderTopLeftRadius: 5,
            borderBottomLeftRadius: 5,
          }}
        >
          <p style={{ marginTop: 3 }}>USD</p>
        </div>
        <div style={{ width: 230 }}>
          <input
            type="text"
            style={{
              borderTop: "1px solid #dddfe2",
              borderBottom: "1px solid #dddfe2",
              borderRight: "1px solid #dddfe2",
              fontSize: 17,
              marginTop: 3,
              padding: 15,
              borderRadius: 5,
              outline: "none",
              height: 20,
              width: 100,
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
            }}
            value={value.price}
            onChange={(e) => handlePriceChange(e, optionsIndex, variationListIndex)}
          />
        </div>
      </div>
    );
  };

  const qtyInput = (value, optionsIndex, variationListIndex) => {
    return (
      <div style={{ width: 200 }}>
        <input
          type="text"
          style={{
            border: "1px solid #dddfe2",
            fontSize: 17,
            marginTop: 3,
            padding: 15,
            borderRadius: 5,
            outline: "none",
            height: 20,
            width: 100,
          }}
          value={value.qty}
          onChange={(e) => handleQtyChange(e, optionsIndex, variationListIndex)}
        />
      </div>
    );
  };
  return (
    <div style={{ marginTop: 20 }}>
      {variationList.map(
        (result, variationListIndex) =>
          result.hasSaved && (
            <div key={variationListIndex} style={{ marginBottom: 20 }}>
              <p>{result.display}</p>
              <TableContainer component={Paper}>
                <Table aria-label="simple table">
                  <TableHead style={{ backgroundColor: "#F5F5F5" }}>
                    <TableRow>
                      <TableCell className="variation-t1">Options</TableCell>
                      <TableCell align="left" className="variation-t2">
                        Price
                      </TableCell>
                      <TableCell align="left" className="variation-t2">
                        Quantity
                      </TableCell>
                      <TableCell align="center" className="variation-t3">
                        Delete
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {result.structure.right.options.map((value, optionsIndex) => (
                      <TableRow key={optionsIndex}>
                        <TableCell component="th" scope="row" className="variation-t1">
                          {value.name}
                        </TableCell>
                        <TableCell align="left" style={{ width: 200 }} className="variation-t2">
                          {result.price_vary && priceInput(value, optionsIndex, variationListIndex)}
                        </TableCell>
                        <TableCell align="left" className="variation-t2">
                          {result.qty_vary && qtyInput(value, optionsIndex, variationListIndex)}
                        </TableCell>
                        <TableCell align="center" className="variation-t3">
                          <button
                            style={{ backgroundColor: "transparent", cursor: "pointer", outline: "none" }}
                            onClick={handleDelete.bind(this, optionsIndex, variationListIndex)}
                          >
                            <FontAwesomeIcon icon={faTrash} />
                          </button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          )
      )}
    </div>
  );
};

export default VariationContent;
