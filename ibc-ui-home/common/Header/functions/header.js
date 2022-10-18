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
