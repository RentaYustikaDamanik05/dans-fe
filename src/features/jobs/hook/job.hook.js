import { useDispatch, useSelector } from 'react-redux';
import { jobsGetAll, jobsGetDetail } from '../store/job.asyncAction';
import { jobs_action } from '../store/job.slice';

export const useJob = () => {
  const state = useSelector(
    /**
     * @param {ReturnType<typeof import('../../../redux/rootStore').rootStore.getState>} state
     */
    (state) => state.features.jobs
  );

  const dispatch = useDispatch();

  const resetState = () => {
    dispatch(jobs_action.resetState());
  };

  /**
   * @param {Object} param
   * @param {string} param.username
   * @param {string} param.password
   */
  const getAll = (param) => {
    dispatch(jobsGetAll(param));
  };

  /**
   * @param {Object} param
   * @param {string} param.id
   */
  const getDetail = (id) => {
    dispatch(jobsGetDetail(id));
  };

  return {
    state,
    resetState,
    getAll,
    getDetail,
  };
};
