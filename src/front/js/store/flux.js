const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      backEndUrl: "https://3001-purple-meerkat-9rxu8mk8.ws-us23.gitpod.io",
      loggedUser: {},
    },
    actions: {
      updateUser: (loginInfo) => {
        setStore({ loggedUser: loginInfo });
      },

      logout: () => setStore({ loggedUser: null }),
    },
  };
};

export default getState;
