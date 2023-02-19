import { useDispatch, useSelector } from 'react-redux';
import { authCheckMe, authLogin } from '../store/auth.asyncAction';
import { auth_actions } from '../store/auth.slice';

export const useAuth = () => {
  const state = useSelector(
    /**
     * @param {ReturnType<typeof import('../../../redux/rootStore').rootStore.getState>} state
     */
    (state) => state.features.auth
  );

  const dispatch = useDispatch();

  const resetState = () => {
    dispatch(auth_actions.resetState());
  };

  /**
   * @param {Object} param
   * @param {string} param.username
   * @param {string} param.password
   */
  const login = (param) => {
    console.log(param);
    dispatch(authLogin(param));
  };

  const checkMe = () => {
    dispatch(authCheckMe());
  };

  const logout = () => {
    dispatch(auth_actions.logout());
  };

  return {
    state,
    resetState,
    login,
    checkMe,
    logout,
  };
};
