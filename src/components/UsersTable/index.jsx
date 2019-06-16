import React from 'react';
import PropTypes from 'prop-types';
import {
  FormGroup,
  FormControl,
  Button,
  Grid,
  Row,
  Col,
  Glyphicon,
  ButtonToolbar,
  ButtonGroup,
  InputGroup,
  Form
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import Tick1x from '../../assets/images/check.png';
import Tick2x from '../../assets/images/check@2x.png';
import Tick3x from '../../assets/images/check@3x.png';

require('./styles.scss');

export default class UsersTable extends React.Component {
  static propTypes = {
    users: PropTypes.array,
    isFetching: PropTypes.bool,
    showMinimal: PropTypes.bool,
    canDelete: PropTypes.bool,
    deleteFunc: PropTypes.func
  };

  renderTick(type, user) {
    if (
      (type === 'member' && user.isMember === false) ||
      (type === 'user' && user.isMember === true)
    ) {
      return (
        <img
          alt="tick-check-box"
          src={Tick1x}
          srcSet={`${Tick2x}, ${Tick3x}`}
          className="check"
        />
      );
    }
  }

  renderTableBody() {
    const { isFetching, users, showMinimal, canDelete } = this.props;
    if (isFetching)
      return (
        <div className="lds-rolling">
          <div />
        </div>
      );
    return (
      <tbody>
        {users.map((user, i) => {
          let userType = 'users';
          if (user.isMember === true) userType = 'members';
          return (
            <tr key={user.phone} className="user-item-row">
              <td className="user-list-avatar-box">
                {this.renderProfileImage(user)}
              </td>
              <td>
                <p className="user-name">{user.englishName}</p>
                <p className="user-role">{user.englishPosition}</p>
              </td>
              {!showMinimal && (
                <td className="tick-box">{this.renderTick('user', user)}</td>
              )}
              {!showMinimal && (
                <td className="tick-box">{this.renderTick('member', user)}</td>
              )}
              {!showMinimal && (
                <td>
                  <Link
                    className="user-item-edit"
                    to={`/${userType}/${user.id}`}
                  >
                    Edit
                  </Link>
                </td>
              )}
              {canDelete && (
                <td
                  className="tick-box delete-pointer"
                  onClick={() => this.props.deleteFunc(user.id)}
                >
                  ✖
                </td>
              )}
            </tr>
          );
        })}
      </tbody>
    );
  }

  renderProfileImage(user) {
    if (!user.avatarUrl || user.avatarUrl === '') {
      const names = user.englishName.split(' ');
      let initials = '';
      for (let i = 0; i < names.length; i++) initials += names[i][0];
      return (
        <div className="media-left media-middle">
          <div
            className="user__photo"
            style={{
              color: 'white',
              backgroundColor: 'rgb(3,185, 86)',
              textAlign: 'center',
              lineHeight: '58px',
              fontSize: '21px'
            }}
          >
            {initials.toUpperCase()}
          </div>
        </div>
      );
    }
    return (
      <div className="media-left media-middle">
        <div
          className="user__photo"
          style={{
            backgroundImage: `url(${user.avatarUrl})`
          }}
        />
      </div>
    );
  }

  render() {
    const { showMinimal, canDelete } = this.props;
    return (
      <table style={{ width: '100%' }} className="userList">
        <thead>
          <tr className="user-head-row">
            <th style={{ width: '50px' }} className="invheader">
              Avatar
            </th>
            <th>Name, position</th>
            {!showMinimal && (
              <th style={{ width: '150px', textAlign: 'center' }}>Member</th>
            )}
            {!showMinimal && (
              <th style={{ width: '150px', textAlign: 'center' }}>User</th>
            )}
            {!showMinimal && <th className="invheader">Edit</th>}
            {canDelete && <th className="invheader">Delete</th>}
          </tr>
        </thead>
        {this.renderTableBody()}
      </table>
    );
  }
}
