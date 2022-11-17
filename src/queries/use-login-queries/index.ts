// Modules
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query'

// Api
import { loginApi } from '../../api/login'

export default function useLoginQueries () {

  const navigate = useNavigate();
  
  function useLoginMutation () {
    return useMutation(loginApi, {
      onSuccess: ({ data }) => {
        localStorage.setItem('cis-token', data.token);
        navigate('/speakers');
      }
    });
  }

  return {
    useLoginMutation
  }

}
