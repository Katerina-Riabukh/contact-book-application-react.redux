import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/user/authFetch';
import { AVATAR, BUTTON, NAME, SETTINGS, WRAPER } from './userMenu.styled';
import user from './user.jpg';
import { userName } from 'redux/user/userSelectors';
import { FcServices } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.user.token);
  const name = useSelector(userName);
  const navigate = useNavigate();

  const handleLodOut = e => {
    dispatch(logOut(token))
      .unwrap()
      .then(() => {
        navigate('/');
        toast('We hope you come back soon 🙃', {
          color: 'gray',
          position: 'top-right',
          autoClose: 3000,
        });
      })
      .catch();
  };

  return (
    <WRAPER>
      <AVATAR src={user} alt="avatar" width={30} height={30} />
      <NAME>{name}</NAME>
      {/* <NAME>fghdfgstz</NAME> */}
      <BUTTON type="button" onClick={handleLodOut}>
        Log Out
      </BUTTON>
      <SETTINGS>
        {
          <FcServices
            style={{ width: '20px', height: '20px', margin: '0px' }}
          />
        }
      </SETTINGS>
    </WRAPER>
  );
};
