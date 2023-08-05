const useAuth = () => {
  if (localStorage.userIsLoggedIn == 'true') {
    return true;
  }
  return false;
};

export default useAuth;
