import * as fromUser from './user.actions';

describe('loadUsers', () => {
  it('should return an action', () => {
    expect(
      fromUser.searchUsersByFilterSearchText({filterSearchText:""}).type)
      .toBe('[User] Search Users by filter search text');
  });
});
