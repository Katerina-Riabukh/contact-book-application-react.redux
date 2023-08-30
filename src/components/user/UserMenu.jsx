import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/user/authFetch';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.user.token);

  const handleLodOut = e => {
    dispatch(logOut(token));
  };
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img src="" alt="" width={20} height={20} />
      <p>mango@mail.com</p>
      <button type="button" onClick={handleLodOut}>
        Logout
      </button>
    </div>
  );
};
