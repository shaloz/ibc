import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarOfLife } from "@fortawesome/free-solid-svg-icons";
const NotificationMenu = () => {
  return (
    <div className="popup-header-bar" id="popup-header-bar">
      <div className="rh20">
        <p>Updates</p>
      </div>
      <div className="updatesBody-top">
        <div className="rh14">
          <div className="rh15">
            <FontAwesomeIcon icon={faStarOfLife} className="rh16" />
          </div>
          <div className="rh17">
            <p className="rh18">Your first update!</p>
            <p className="rh19">
              Look here for updates on services, items and businesses you've favorites - sales, services, new products, discounts and more
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationMenu;
