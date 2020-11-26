import { usersReducer, initialState } from './user.reducer';

describe('User Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = usersReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
