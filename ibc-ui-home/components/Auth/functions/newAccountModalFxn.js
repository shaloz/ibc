import * as actions from "../../../store/actions/AuthActions";
import axios from "axios";
import {setCookie} from '../../../helpers/utils'

export const closeModal = (dispatch) => {
  dispatch(actions.handleAuthModal(false));
};

const validateEmail = (email) => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const handlePhoneNumber = (value) => {
  const formatted = value.replace(/[^\d]+/g, "").replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
  return formatted;
};

export const handleBack = (section, setSection, setVerificationError) => {
  if (section === "phoneDetails") {
    setSection("details");
  } else if (section === "verification") {
    setVerificationError("");
    setSection("phoneDetails");
  }
};

const handleSignUp = (input, setVerificationError, services, setInput, setIsLoading) => {
  const array = [...input];
  const areaCode = array[4].value.split(" ")[0];
  const country = array[4].value.split(" ")[1];
  const userData = {
    areaCode,
    country,
    phoneNumber: array[5].value,
    code: array[6].value,
  };
  if (array[6].value === "") {
    array[6].className.hasErrors = true;
    setInput(array);
  } else {
   setIsLoading(true);
    axios
      .post(services.signUp.baseUrl, userData)
      .then(({ data }) => {
        //handle save cookie
        setIsLoading(false);
        setCookie("_13123d", data)
        window.location.href = "/";
      })
      .catch((err) => {
        setVerificationError(err.response.data.message);
        setIsLoading(false);
      });
  }
};

export const onSendCode = (input, services) => {
  let userData = {};
  for (let i = 0; i < input.length; i++) {
    if (input[i].name === "areaCode") {
      const areaCode = input[i].value.split(" ")[0];
      const country = input[i].value.split(" ")[1];
      userData["areaCode"] = areaCode;
      userData["country"] = country;
    } else {
      userData[input[i].name] = input[i].value;
    }
  }
  userData.dateJoined = new Date();
  delete userData.verificationCode;
  axios.post(services.verificationSMS.baseUrl, userData);
};

export const next = (section, setSection, input, setInput, services, setVerificationError, setIsLoading) => {
  if (section === "details") {
    const array = input.slice(0, 4);
    const arrayCopy = [...input];
    const hasErrors = array.filter((result) => result.value === "").length == 0 ? false : true;
    for (let i = 0; i < array.length; i++) {
      if (arrayCopy[i].value === "") {
        arrayCopy[i].className.hasErrors = true;
      }
    }

    //validate email
    if (!validateEmail(array[2].value)) {
      arrayCopy[2].className.hasErrors = true;
      setInput(arrayCopy);
      return;
    }

    setInput(arrayCopy);
    if (hasErrors) return;
    setSection("phoneDetails");
  } else if (section === "phoneDetails") {
    const array = input.slice(4, 6);
    const arrayCopy = [...input];
    const hasErrors = array.filter((result) => result.value === "").length == 0 ? false : true;
    for (let i = 4; i < input.length; i++) {
      if (arrayCopy[i].name !== "verificationCode") {
        if (arrayCopy[i].value === "") {
          arrayCopy[i].className.hasErrors = true;
        }
      }
    }
    setInput(arrayCopy);
    if (hasErrors) return;
    //send verification
    onSendCode(input, services, setSection, setVerificationError);
    setSection("verification");
  } else {
    handleSignUp(input, setVerificationError, services, setInput, setIsLoading);
  }
};

const handleInputState = (name, value, index, setInput, input) => {
  const inputArray = [...input];

  inputArray[index].value = value;
  inputArray[index].className.hasErrors = false;
  setInput(inputArray);
};

export const handleInput = (e, index, userLocation, setInput, input) => {
  const { name, value } = e.target;
  if (name === "phoneNumber") {
    if (userLocation.name === "United States" || userLocation.name === "Canada") {
      const phoneNumber = handlePhoneNumber(value);
      handleInputState(name, phoneNumber, 5, setInput, input);
    } else {
      handleInputState(name, value, 5, setInput, input);
    }
  } else {
    handleInputState(name, value, index, setInput, input);
  }
};
