import React from "react";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";
 

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

const Materials = () => {
   const classes = useStyles();
  const [maxWord, setMaxWord] = React.useState(13);
  const [text, setText] = React.useState("");
  const [chipData, setChipData] = React.useState([]);

  const handleAdd = () => {
    if (chipData.includes(text)) return alert("you cannot have the same materials twice");
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

 
   return (
    <div style={{ display: "flex", marginTop: 20 }}>
      <div style={{ width: 300 }}>
        <p style={{ fontSize: 17 }}>
        Materials <span style={{ color: "gray", fontSize: 11 }}>Optional</span>
        </p>
       
      </div>
      <div style={{ width: 950, marginLeft: 20 }}>
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex" }}>
            <div style={{ width: 390 }}>
              <input
                type="text"
                placeholder="Ingredients, components, etc."
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
       
    </div>
  );
};

export default Materials;
