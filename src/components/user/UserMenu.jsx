import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/user/authFetch';
import { AVATAR, NAME, WRAPER } from './userMenu.module';
import user from './user.jpg';
import { userName } from 'redux/user/userSelectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.user.token);
  const name = useSelector(userName);

  const handleLodOut = e => {
    dispatch(logOut(token));
  };
  return (
    <WRAPER>
      <AVATAR src={user} alt="avatar" width={30} height={30} />
      <NAME>{name}</NAME>
      {/* <NAME>fghdfgstz</NAME> */}
      <button type="button" onClick={handleLodOut}>
        Logout
      </button>
    </WRAPER>
  );
};
