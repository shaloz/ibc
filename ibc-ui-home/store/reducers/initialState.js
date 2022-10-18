import getStartedData from "./getStartedState";

export default {
  openNewAccountModal: false,
  toggleNotification: false,
  toggleProfile: false,
  getStartedData,

  application: {
    security: {},
    errors: [],
    configuration: {
      services: {},
    },
    user: {},
  },
};
