import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faTimes } from "@fortawesome/free-solid-svg-icons";
import ReactModal from "react-modal";
import NewVariant from "./NewVariant";

const VariationModal = ({ contentToRender, setContentToRender, modalIsOpen, setModalIsOpen, setVariationList, variationList }) => {
  const closeModal = () => {
    setModalIsOpen(false);
  };

  ReactModal.setAppElement("body"); //react modal body
  return (
    <ReactModal
      shouldFocusAfterRender={true}
      isOpen={modalIsOpen}
      role="dialog"
      className="variantModal"
      style={{
        overlay: {
          backgroundColor: "rgb(255,255,255,.7)",
          zIndex: "10010",
        },
      }}
      appElement={document.getElementById("app")}
    >
      <div style={{ padding: 10 }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <span style={{ fontSize: 18 }}>{contentToRender === "add" ? "Add variations" : "Link photos"}</span>
          </div>
          <div onClick={closeModal} style={{ cursor: "pointer" }}>
            <FontAwesomeIcon icon={faTimes} />
          </div>
        </div>
        <p style={{ marginTop: 5, color: "gray" }}>List all the options you offer. Buyers will see them in the order they are here.</p>
      </div>

      <div style={{ borderBottom: "1px solid #dadde1", width: "100%" }}></div>

      <div style={{ padding: 20 }}>
        {contentToRender === "add" && (
          <div style={{ maxHeight: 650, overflow: "hidden", padding: 5 }}>
            <NewVariant setVariationList={setVariationList} variationList={variationList} setModalIsOpen={setModalIsOpen} />
          </div>
        )}
      </div>
    </ReactModal>
  );
};

export default VariationModal;
