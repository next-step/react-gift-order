import { useNavigate } from 'react-router-dom';

const useNavigateBackOrHome = () => {
  const navigate = useNavigate();

  const navigateBackOrHome = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  return navigateBackOrHome;
};

export default useNavigateBackOrHome;
