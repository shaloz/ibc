import React, { useState, memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faTrash, faCropAlt } from "@fortawesome/free-solid-svg-icons";
import CropModal from "./CropModal";

const Photos = ({}) => {
  const [openCropModal, setOpenCropModal] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const [cropImage, setCropImage] = useState({
    image: null,
    crop: {
      x: 10,
      y: 10,
      width: 160,
      height: 80,
    },
  });
  const [photoArray, setPhotoArray] = useState([
    {
      addNew: true,
      img: "",
      primary: true,
      text: "Primary photo",
      icon: "/image/icon11.svg",
    },
    {
      addNew: false,
      img: "",
      primary: false,
      text: "Every angle",
      icon: "/image/icon12.svg",
    },
    {
      addNew: false,
      img: "",
      primary: false,
      text: "Every angle",
      icon: "/image/icon13.svg",
    },
    {
      addNew: false,
      img: "",
      primary: false,
      text: "Every angle",
      icon: "/image/icon14.svg",
    },
    {
      addNew: false,
      img: "",
      primary: false,
      text: "Details",
      icon: "/image/icon15.svg",
    },
    {
      addNew: false,
      img: "",
      primary: false,
      text: "In use",
      icon: "/image/icon16.svg",
    },
    {
      addNew: false,
      img: "",
      primary: false,
      text: "Size and scale",
      icon: "/image/icon17.svg",
    },
    {
      addNew: false,
      img: "",
      primary: false,
      text: "Styled scene",
      icon: "/image/icon18.svg",
    },
    {
      addNew: false,
      img: "",
      primary: false,
      text: "Variations",
      icon: "/image/icon19.svg",
    },
  ]);

  const handlePhoto = (result, index) => {
    let input = document.createElement("input");
    input.type = "file";
    input.accept = ".png,.jpg";
    input.onchange = (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (readerEvent) => {
        const content = readerEvent.target.result; // this is the content!

        let newArray = [...photoArray];
        newArray[index].addNew = false;
        newArray[index].img = content;

        //check if the next array has an image
        let addNewPhoto = false;
        let indexToAdd = 0;
        for (let i = 0; i < photoArray.length; i++) {
          if (photoArray[i].img === "") {
            addNewPhoto = true;
            indexToAdd = i;
            break;
          }
        }

        if (addNewPhoto) {
          newArray[indexToAdd].addNew = true;
        }

        setPhotoArray(newArray);
      };
    };
    input.click();
  };

  const handleCrop = (result, index) => {
    setImageIndex(index);
    setCropImage((prev) => {
      return {
        ...prev,
        ["image"]: result.img,
      };
    });
    setOpenCropModal(true);
  };

  const handleDelete = (index) => {
    const newArray = [...photoArray];
    //reset addNew
    for (let i = 0; i < photoArray.length; i++) {
      if (photoArray[i].addNew) {
        newArray[i].addNew = false;
      }
    }
    newArray[index].addNew = true;
    newArray[index].img = "";
    setPhotoArray(newArray);
  };

  const renderData = (result, index) => {
    let content = null;
    if (result.addNew) {
      content = (
        <div style={{ textAlign: "center" }} onClick={handlePhoto.bind(this, result, index)}>
          <FontAwesomeIcon icon={faCamera} style={{ marginTop: 70 }} />
          <p>Add a photo</p>
          {result.primary && (
            <div style={{ backgroundColor: "#000", width: 100, borderRadius: 10, margin: "auto" }}>
              <p style={{ fontSize: 12, color: "#fff" }}>Primary photo</p>
            </div>
          )}
        </div>
      );
    } else if (!result.addNew && result.img === "") {
      content = (
        <div style={{ backgroundColor: "#FAF9F5", borderColor: "#FAF9F5", height: 180 }}>
          <div style={{ textAlign: "center" }}>
            <img src={result.icon} style={{ width: 120, objectFit: "cover", marginTop: 20 }} draggable={false} />
            <p style={{ fontWeight: "100", color: "#757575", fontSize: 13 }}>{result.text}</p>
          </div>
        </div>
      );
    } else {
      content = (
        <div
          style={{ backgroundColor: "#FAF9F5", cursor: "pointer" }}
          onMouseEnter={() => {
            document.getElementById("buttonContainer" + index).style.visibility = "visible";
          }}
          onMouseLeave={() => {
            document.getElementById("buttonContainer" + index).style.visibility = "hidden";
          }}
        >
          <div style={{ position: "absolute", visibility: "hidden" }} id={`buttonContainer${index}`}>
            <div style={{ width: 180 }}>
              <div
                style={{
                  display: "flex",
                  boxShadow: "0 0 2px rgba(0, 0, 0, 0.3)",
                  backgroundColor: "#fff",
                  margin: "auto",
                  width: 90,
                  height: 37,
                  borderRadius: 2,
                  marginTop: 143,
                }}
              >
                <div style={{ borderRight: "1px solid #E0E0E0" }} onClick={handleCrop.bind(this, result, index)}>
                  <div style={{ padding: "5px 15px 5px 15px" }}>
                    <FontAwesomeIcon icon={faCropAlt} style={{ color: "gray" }} />
                  </div>
                </div>
                <div onClick={handleDelete.bind(this, index)}>
                  <div style={{ padding: "5px 15px 5px 15px" }}>
                    <FontAwesomeIcon icon={faTrash} style={{ color: "gray" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img src={result.img} style={{ objectFit: "contain", width: 180, height: 178 }} id={`image${index}`} />
        </div>
      );
    }
    return content;
  };

  const content = (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {photoArray.map((result, index) => (
        <div
          key={index}
          className="newProductPhoto"
          id={`newProductPhoto${index}`}
          onMouseEnter={() => {
            if (result.addNew) {
              document.getElementById("newProductPhoto" + index).style.border = "1px solid #000";
              document.getElementById("newProductPhoto" + index).style.cursor = "pointer";
            }
          }}
          onMouseLeave={() => {
            document.getElementById("newProductPhoto" + index).style.border = "1px solid transparent";
          }}
        >
          {renderData(result, index)}
        </div>
      ))}
    </div>
  );

  return (
    <div>
      <div style={{ display: "flex", marginTop: 20 }}>
        <div style={{ width: 300 }}>
          <p style={{ fontSize: 17 }}>
            Photos <span style={{ color: "gray" }}>*</span>
          </p>
          <p style={{ color: "gray", fontWeight: "100", fontSize: 12 }}>Use up to ten photos to show your item's most important qualities.</p>
          <div style={{ marginTop: 10 }}>
            <p style={{ color: "gray", fontWeight: "100", fontSize: 12 }}>Tips</p>
            <ul style={{ marginLeft: 17 }}>
              <li style={{ color: "gray", fontWeight: "100", fontSize: 12, marginTop: 10 }}>Use natural light and no flash.</li>
              <li style={{ color: "gray", fontWeight: "100", fontSize: 12 }}>Include a common object for scale.</li>
              <li style={{ color: "gray", fontWeight: "100", fontSize: 12 }}>Show the item being held, worn, or used.</li>
              <li style={{ color: "gray", fontWeight: "100", fontSize: 12 }}>Shoot against a clean, simple background.</li>
            </ul>
          </div>
        </div>
        <div style={{ width: 1100, marginLeft: 20 }}>{content}</div>
      </div>
      {openCropModal && (
        <CropModal
          openCropModal={openCropModal}
          setOpenCropModal={setOpenCropModal}
          imageIndex={imageIndex}
          cropImage={cropImage}
          setCropImage={setCropImage}
        />
      )}
    </div>
  );
};

export default Photos;
