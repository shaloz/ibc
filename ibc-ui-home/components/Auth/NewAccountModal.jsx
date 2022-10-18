import React, { useState, useEffect } from "react";
import ReactModal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import inputFields from "./functions/inputFields";
import countries from "../../helpers/countries";
import axios from "axios";
import { closeModal, handleBack, next, onSendCode, handleInput } from "./functions/newAccountModalFxn";
import Details from "./NewAccountComponents/Details";
import PhoneDetails from "./NewAccountComponents/PhoneDetails";
import Verification from "./NewAccountComponents/Verification";
import { Spinner } from "react-activity";
import "react-activity/dist/react-activity.css";

const NewAccountModal = ({ openNewAccountModal }) => {
  const dispatch = useDispatch();
  const [section, setSection] = useState("details");
  const [userLocation, setUserLocation] = useState({});
  const [input, setInput] = useState(inputFields);
  const [verificationError, setVerificationError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const services = useSelector((state) => state.applicationReducer.configuration.services);
  //add area code fetch here
  useEffect(() => {
    const handleFetchLocation = async () => {
      try {
        const inputObj = [...input];
        const { data } = await axios.get(services.geoLocation.baseUrl);
        const country = countries(data.country_name);

        inputObj[4].value = country.areaCode + " " + country.shortCode;
        setUserLocation(country);
        setInput(inputObj);
      } catch (err) {
        console.log(err);
      }
    };
    handleFetchLocation();
  }, []);

  let render = null;
  if (section === "details") {
    render = <Details handleInput={handleInput} input={input} setInput={setInput} userLocation={userLocation} services={services} />;
  } else if (section === "phoneDetails") {
    render = <PhoneDetails handleInput={handleInput} input={input} setInput={setInput} userLocation={userLocation} services={services} />;
  } else {
    render = <Verification onSendCode={onSendCode} input={input} services={services} verificationError={verificationError} setInput={setInput} />;
  }

  ReactModal.setAppElement("body"); //react modal body

  return (
    <ReactModal
      shouldFocusAfterRender={true}
      isOpen={openNewAccountModal}
      role="dialog"
      className="authModal"
      style={{
        overlay: {
          backgroundColor: "rgb(255,255,255,.7)",
          zIndex: "10010",
        },
      }}
      appElement={document.getElementById("app")}
    >
      <div style={{ padding: 10 }}>
        <div className="authModalHeader" id="modalHeader">
          <div>
            <span className="auth0018">Sign Up</span>
          </div>
          <div onClick={closeModal.bind(this, dispatch)} className="auth0021">
            <FontAwesomeIcon icon={faTimes} />
          </div>
        </div>
        <div className="auth0019"></div>
        <div className="modalBody">
          {section !== "details" && (
            <div>
              <FontAwesomeIcon icon={faArrowLeft} onClick={handleBack.bind(this, section, setSection, setVerificationError)} className="auth0020" />
            </div>
          )}
          {render}
          <div className="auth0012">
            <button
              className="authFloatingBtn"
              onClick={next.bind(this, section, setSection, input, setInput, services, setVerificationError, setIsLoading)}
              disabled={isLoading}
            >
              {isLoading ? (
                <div>
                  <Spinner size={18} color="#fff" />
                </div>
              ) : (
                <FontAwesomeIcon icon={faArrowRight} id="authFloatingBtnIcon" className="authFloatingBtnIcon" />
              )}
            </button>
          </div>
        </div>
      </div>
    </ReactModal>
  );
};

export default NewAccountModal;
