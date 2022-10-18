import getStartedData from "./getStartedState";

export default {
  openNewAccountModal: false,
  toggleNotification: false,
  toggleProfile: false,
  getStartedData,
  user: {
    userLocation: {},
    userDetails: {},
  },
  application: {
    security: {},
    errors: [],
    configuration: {
      services: {},
    },
  },
};
