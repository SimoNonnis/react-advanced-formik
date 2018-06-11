import { createStore, runSaga } from '@housesimple/redux';
import baseReducer from 'reducers/index';
import rootSaga from 'sagas/index';

const store = createStore(baseReducer);
runSaga(rootSaga);

export default store;
