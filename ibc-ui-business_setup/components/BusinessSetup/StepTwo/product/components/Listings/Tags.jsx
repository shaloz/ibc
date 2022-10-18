import React from "react";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";
import ReactModal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

const Tags = () => {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const classes = useStyles();
  const [maxWord, setMaxWord] = React.useState(13);
  const [text, setText] = React.useState("");
  const [chipData, setChipData] = React.useState([]);

  const handleAdd = () => {
    if (chipData.includes(text)) return alert("you cannot have the same tag twice");
    const newMax = maxWord - 1;
    if (newMax >= 0) {
      setMaxWord(newMax);
      setChipData((prev) => {
        return [...prev, text];
      });
    }
  };

  const handleDelete = (chipToDelete) => () => {
    const newMax = maxWord + 1;
    setMaxWord(newMax);
    setChipData((chips) => chips.filter((chip) => chip !== chipToDelete));
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  ReactModal.setAppElement("body"); //react modal body
  return (
    <div style={{ display: "flex", marginTop: 20 }}>
      <div style={{ width: 300 }}>
        <p style={{ fontSize: 17 }}>
          Tags <span style={{ color: "gray", fontSize: 11 }}>Optional</span>
        </p>
        <p style={{ color: "gray", fontWeight: "100", fontSize: 12 }}>
          What words might someone use to search for your listings? Use all 13 tags to get found.{" "}
          <span
            style={{ color: "#000", cursor: "pointer", textDecoration: "underline" }}
            onClick={() => {
              setModalIsOpen(true);
            }}
          >
            Get tag ideas
          </span>
        </p>
      </div>
      <div style={{ width: 950, marginLeft: 20 }}>
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex" }}>
            <div style={{ width: 390 }}>
              <input
                type="text"
                placeholder="Shape, color, style, functions, etc"
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
                  width: 360,
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0,
                }}
                value={text}
                onChange={(e) => {
                  setText(e.target.value);
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
              }}
              onClick={handleAdd}
            >
              <p style={{ marginTop: 2 }}>Add</p>
            </div>
          </div>
          <div style={{ marginLeft: 20, marginTop: 16 }}>
            <p style={{ color: "gray", fontSize: 14 }}>{maxWord} left</p>
          </div>
        </div>
        <div>
          {chipData.map((data, index) => {
            return <Chip label={data} onDelete={handleDelete(data)} className={classes.chip} key={index} />;
          })}
        </div>
      </div>
      {modalIsOpen && (
        <ReactModal
          shouldFocusAfterRender={true}
          isOpen={modalIsOpen}
          role="dialog"
          className="tagModal"
          style={{
            overlay: {
              backgroundColor: "rgb(255,255,255,.7)",
              zIndex: "10010",
            },
          }}
          onRequestClose={() => {
            setModalIsOpen(false);
          }}
          appElement={document.getElementById("app")}
        >
          <div style={{ display: "flex", justifyContent: "space-between", padding: 10 }}>
            <div>
              <span style={{ fontSize: 18 }}>Add tags that answer these questions:</span>
            </div>
            <div onClick={closeModal} style={{ cursor: "pointer" }}>
              <FontAwesomeIcon icon={faTimes} />
            </div>
          </div>

          <div style={{ borderBottom: "1px solid #dadde1", width: "100%" }}></div>

          <div style={{ padding: 20 }}>
            <ul class="list-unstyled">
              <li>Who is it for?</li>
              <li>What is the main color?</li>
              <li>What method or technique did you use to make it?</li>
              <li>What size is it?</li>
              <li>What style is it?</li>
              <li>What is the main material?</li>
              <li>Does the item feature imagery or motifs?</li>
            </ul>

            <div class="tag-panel">
              <p style={{ fontSize: 14 }}>
                <strong>Don’t forget synonyms</strong>. Different people search for the same thing in different ways.
              </p>
            </div>
          </div>
        </ReactModal>
      )}
    </div>
  );
};

export default Tags;
