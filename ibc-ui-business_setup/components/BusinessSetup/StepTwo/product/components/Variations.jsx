import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import VariationContent from "./Variations/VariationContent";
import VariationModal from "./Variations/VariationModal";
import variationsArray from "./Variations/variationsArray";

const Variations = ({}) => {
  const [variations, setVariations] = useState([]);
  const [contentToRender, setContentToRender] = useState("");
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [variationList, setVariationList] = useState(variationsArray);

  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ marginTop: 10 }}>
          <button
            className="add-variation"
            onClick={() => {
              setContentToRender("add");
              setModalIsOpen(true);
            }}
          >
            <FontAwesomeIcon icon={faCog} style={{ fontSize: 14, marginRight: 10 }} />
            {variationList.filter((result) => result.hasSaved).length === 0 ? "Add variations" : "Edit / Add variations"}
          </button>
        </div>
        <VariationContent setVariationList={setVariationList} variationList={variationList} />
        {modalIsOpen && (
          <VariationModal
            setVariationList={setVariationList}
            variationList={variationList}
            modalIsOpen={modalIsOpen}
            setModalIsOpen={setModalIsOpen}
            contentToRender={contentToRender}
            setContentToRender={setContentToRender}
          />
        )}
      </div>
    </div>
  );
};

export default Variations;
