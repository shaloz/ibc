import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle, faCircle, faPencilAlt, faTrash } from "@fortawesome/free-solid-svg-icons";
import NewService from "./NewService";

const ServicesOffered = ({ styles, button }) => {
  const [newService, setNewService] = useState(false);
  const [serviceArray, setServiceArray] = useState([]);

  return (
    <div style={{ marginBottom: 30 }}>
      <p>Enter all the services you offer</p>
      {newService ? (
        <NewService styles={styles} setNewService={setNewService} />
      ) : (
        <div>
          <button
            onClick={() => {
              setNewService(true);
            }}
            className="newService-btn"
          >
            {serviceArray.length === 0 ? "Add service" : "Add more services"}
          </button>
        </div>
      )}
      {serviceArray.length !== 0 && (
        <div style={{ width: 1050, boxShadow: "0 0 2px rgba(0, 0, 0, 0.3)", borderRadius: 3, marginTop: 20, padding: 10 }}>
          <div>
            <div style={{ borderBottom: "3px solid #E0E0E0", paddingBottom: 10 }}>
              <p style={{ fontWeight: "500" }}>Service Category name</p>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: 10, borderBottom: "1px solid #E0E0E0" }}>
              <div style={{ width: 1300 }}>
                <div>
                  <p style={{ fontWeight: "500" }}>Service name</p>
                </div>
                <div>
                  <p>Service description</p>
                </div>
              </div>
              <div style={{ width: 300 }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <div>
                    <p>
                      <span style={{ marginRight: 10 }}>$11.00</span>
                      <span style={{ textDecoration: "line-through" }}>$12.00</span>
                    </p>
                    <p>1h:15min</p>
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faTrash} style={{ marginRight: 20 }} />
                    <FontAwesomeIcon icon={faPencilAlt} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {serviceArray.length !== 0 && <div style={{ marginTop: 50 }}>{button}</div>}
    </div>
  );
};

export default ServicesOffered;
