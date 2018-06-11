import { createSelector } from 'reselect';

export const authTokenSelector = state => state.getIn(['auth', 'authToken']);
const errorSelector = state => state.getIn(['auth', 'error']);

const isAuthSelector = createSelector(
  authTokenSelector,
  errorSelector,
  (authToken, error) => !!(authToken && !error)
);

export default isAuthSelector;
