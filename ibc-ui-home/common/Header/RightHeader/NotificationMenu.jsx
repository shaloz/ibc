import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarOfLife } from "@fortawesome/free-solid-svg-icons";
const NotificationMenu = () => {
  return (
    <div className="popup-header-bar" id="popup-header-bar">
      <div style={{ textAlign: "center", padding: 10 }}>
        <p>Updates</p>
      </div>
      <div className="updatesBody-top">
        <div style={{ display: "flex", paddingLeft: 20, paddingTop: 10 }}>
          <div style={{ width: 20, marginRight: 20 }}>
            <FontAwesomeIcon icon={faStarOfLife} style={{ fontSize: 19, color: "#BA68C8", marginTop: 5 }} />
          </div>
          <div style={{ width: 400 }}>
            <p style={{ fontSize: 14, marginTop: 3, fontWeight: "500" }}>Your first update!</p>
            <p style={{ fontSize: 13, fontWeight: "100" }}>
              Look here for updates on services, items and businesses you've favorited - sales, services, new products, discounts and more
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationMenu;
