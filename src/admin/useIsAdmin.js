import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const useIsAdmin = () => {
  const navigate = useNavigate()
  async function checkAdmin() {
    try {
      let { data } = await axios.post(`${process.env.REACT_APP_BASEURL}/admin/`,
        {
          "token": localStorage.getItem("authtoken")
        }
      );
      console.log(data);
      if (data === true) {
        return true;
      } else {
        navigate('/login')
        return false
      }
    } catch (err) {
      console.log(err.message);
      return false;
    }
  }
  return checkAdmin
}
export default useIsAdmin