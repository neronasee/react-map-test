export const emailIsValid = (email) => {
  return (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email));
};
