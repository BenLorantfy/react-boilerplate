/**
 * Test store addons
 */

import configureStore from '../configureStore';

describe('configureStore', () => {
  it('should return a redux store', () => {
    const store = configureStore({});
    expect(typeof store).toBe('object');
  });
});

describe('configureStore params', () => {
  it('should call window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__', () => {
    /* eslint-disable no-underscore-dangle */
    const compose = jest.fn();
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ = () => compose;
    configureStore();
    expect(compose).toHaveBeenCalled();
    /* eslint-enable */
  });
});
