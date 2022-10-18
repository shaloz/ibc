import * as actions from "../../../store/actions/HeaderActions";

export const handleClickOutSide = (dispatch) => {
  dispatch(actions.handleProfileMenu("reset"));
  dispatch(actions.handleNotificationMenu("reset"));
  closeSearch();
};

export const closeSearch = () => {
  document.getElementById("middle-header").style.border = "0";
  document.getElementById("middle-header").style.backgroundColor = "rgba(34, 34, 34, 0.07)";
  document.getElementById("header-search").style.backgroundColor = "rgba(34, 34, 34, 0.07)";

  document.getElementById("clear-search-container").style.backgroundColor = "rgba(34, 34, 34, 0.07)";
  document.getElementById("search-button-container").style.backgroundColor = "rgba(34, 34, 34, 0.07)";
  document.getElementById("searchIcon").style.color = "#000";
  document.getElementById("search-box").style.transform = "translateY(-10px)";
  document.getElementById("search-box").style.visibility = "hidden";
};

export const openNotificationMenu = (dispatch) => {
  dispatch(actions.handleNotificationMenu("toggle"));
  dispatch(actions.handleProfileMenu("reset"));
  closeSearch();
};

export const openUserAccountMenu = (dispatch) => {
  closeSearch();
  dispatch(actions.handleProfileMenu("toggle"));
  dispatch(actions.handleNotificationMenu("reset"));
};

export const onInputClick = (dispatch) => {
  dispatch(actions.handleNotificationMenu("reset"));
  dispatch(actions.handleProfileMenu("reset"));
  document.getElementById("middle-header").style.border = "1px solid #000";
  document.getElementById("middle-header").style.backgroundColor = "#fff";
  document.getElementById("header-search").style.backgroundColor = "#fff";
  document.getElementById("clear-search-container").style.backgroundColor = "#fff";
  document.getElementById("search-button-container").style.backgroundColor = "#000";
  document.getElementById("searchIcon").style.color = "#fff";
  document.getElementById("search-box").style.visibility = "visible";
  document.getElementById("search-box").style.transform = "translateY(10px)";
};

export const handleSearch = (e, setSearchText) => {
  if (e.target.value === "") {
    document.getElementById("clear-search-icon").style.visibility = "hidden";
  } else {
    document.getElementById("clear-search-icon").style.visibility = "visible";
  }

  setSearchText(e.target.value);
};

export const handleClearInput = (setSearchText) => {
  setSearchText("");
  document.getElementById("clear-search-icon").style.visibility = "hidden";
  handleClickOutSide(dispatch);
};
