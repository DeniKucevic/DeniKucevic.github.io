let state = {
  token: null,
  id: null
};

const deleteToken = () => {
  return new Promise(resolve => {
    state.token = null;
    state.id = null;
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    resolve();
  });
};
const setToken = token => {
  state.token = token;
  localStorage.setItem("token", token);
};
const setId = id => {
  state.id = id;
  localStorage.setItem("id", id);
};
const isLogin = () => {
  // return true;
  return state.token || localStorage.getItem("token");
};
const getId = () => {
  const id = state.id
    ? state.id
    : localStorage.getItem("id")
    ? localStorage.getItem("id")
    : null;
  return id;
};

export { setToken, isLogin, deleteToken, setId, getId };
