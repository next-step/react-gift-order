
function useUser() {

  function setId(id:string) {
    sessionStorage.setItem('userId',id);
  }

  function getId() {
    return sessionStorage.getItem('userId')?.split('@')[0] ?? '';
  }

  function removeId(id:string) {
    sessionStorage.removeItem('userId');
  }
  function setPw(pw:string) {
    sessionStorage.setItem('userPw',pw);
  }

  function getPw() {
    return sessionStorage.getItem('userPw')?.split('@')[0] ?? '';
  }

  function setEmail(email:string) {
    sessionStorage.setItem('userEmail',email);
  }
  function getEmail() {
    return sessionStorage.getItem('userId')
  }
  return { setId, getId, removeId , setPw, getPw, setEmail, getEmail}
}

export default useUser;


