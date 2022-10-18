import React, { useState, useEffect } from "react";
import ReactModal from "react-modal";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const CropModal = ({ openCropModal, setOpenCropModal, cropImage, setCropImage, imageIndex }) => {
  const [imageLoaded, setImageLoaded] = useState(null);
  const [imageCropped, setImageCropped] = useState(null);
  const closeModal = () => {
    setOpenCropModal(false);
  };

  const makeClientCrop = async (crop) => {
    if (imageLoaded && cropImage.crop.width && cropImage.crop.height) {
      const croppedImageUrl = await getCroppedImg(imageLoaded, crop, "newFile.jpeg");
      document.getElementById("image" + imageIndex).src = croppedImageUrl;
      setImageCropped(croppedImageUrl);
      document.getElementById("success").style.visibility = "visible";
      setTimeout(() => {
          if(document.getElementById("success").style) {
            document.getElementById("success").style.visibility = "hidden";
          }
       
      }, 1000);
    }
  };

  const getCroppedImg = (image, crop, fileName) => {
    const canvas = document.createElement("canvas");
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext("2d");

    ctx.drawImage(image, crop.x * scaleX, crop.y * scaleY, crop.width * scaleX, crop.height * scaleY, 0, 0, crop.width, crop.height);
    const imageType = cropImage.image.split(",")[0].replace("data:", "").split(";")[0];

    return new Promise((resolve, reject) => {
      canvas.toBlob((blob) => {
        if (!blob) {
          //reject(new Error('Canvas is empty'));
          console.error("Canvas is empty");
          return;
        }
        blob.name = fileName;

        const fileUrl = window.URL.createObjectURL(blob);
        resolve(fileUrl);
      }, imageType);
    });
  };

  const onImageLoaded = (image) => {
    setImageLoaded(image);
  };

  const onCropComplete = (crop) => {
    makeClientCrop(crop);
  };
  const onCropChange = (crop, percentCrop) => {
    setCropImage((prev) => {
      return {
        ...prev,
        ["crop"]: crop,
      };
    });
  };

  ReactModal.setAppElement("body"); //react modal body
  return (
    <ReactModal
      shouldFocusAfterRender={true}
      isOpen={openCropModal}
      role="dialog"
      className="cropModal"
      style={{
        overlay: {
          backgroundColor: "rgb(255,255,255,.7)",
          zIndex: "10010",
        },
      }}
      appElement={document.getElementById("app")}
    >
      <div>
        <div style={{ display: "flex", justifyContent: "space-between", padding: 10 }} id="cropHeader">
          <div>
            <span style={{ fontSize: 30 }}>Crop</span>
          </div>
          <div onClick={closeModal} style={{ cursor: "pointer" }}>
            <FontAwesomeIcon icon={faTimes} />
          </div>
        </div>

        <div style={{ visibility: "hidden", textAlign: "center" }} id="success">
          <p style={{ color: "green" }}>image cropped and saved</p>
        </div>

        <div style={{ borderBottom: "1px solid #dadde1", width: "100%" }}></div>
        <div className="cropBody">
          <div className="crop-container">
            <ReactCrop
              src={cropImage.image}
              crop={cropImage.crop}
              ruleOfThirds
              onImageLoaded={onImageLoaded}
              onComplete={onCropComplete}
              onChange={onCropChange}
              imageStyle={{ maxWidth: 800, maxHeight: 500 }}
            />
          </div>
          {imageCropped && (
            <div>
              <img alt="Crop" style={{ maxWidth: "100%" }} src={imageCropped} />
            </div>
          )}
        </div>
      </div>
    </ReactModal>
  );
};

export default CropModal;
