import React, { useEffect, useState } from 'react';
import "./index.scss";

import UserDetailsModal from '../UserDataModal/UserDataModal';
import AddUserModal from '../AddUserModal/AddUserModal';

import { addUser, deleteUser, getAllUsers } from '../../utils/apis';

import Initials from "../Initials/Initials";
import Delete from "../../Assets/delete.svg";
import Corp from "../../Assets/corp.svg";

export default function UserList() {
  const [allUsers, setAllUsers] = useState([]);
  const [users, setUsers] = useState([]);
  const [isDetailsModalOpen, setDetailsModalVisible] = useState(false);
  const [isAddUserModalOpen, setAddUserModalVisible] = useState(false);
  const [userModalData, setUserModalData] = useState({});
  const [searchQuery, setSearchQuery] = useState("");

  const setUpdatedUsers = async () => {
    let data = await getAllUsers();
    setUsers(data.data);
    setAllUsers(data.data)
  }

  const _deleteUser = (id) => deleteUser(id).then(() => setUpdatedUsers()).catch((e) => console.log(e));

  const addNewUser = (payload) => addUser(payload).then(() => setUpdatedUsers()).catch((e) => console.log(e));

  useEffect(() => {
    setUpdatedUsers();
  }, []);

  const handleDelete = (e, id) => _deleteUser(id);

  const handleListItemClick = (e, user) => {
    e.stopPropagation();
    setDetailsModalVisible(true);
    setUserModalData(user);
  }

  const handleAddUserBtnClick = () => {
    setAddUserModalVisible(true);
  };

  const handleFilterChange = (e) => {
    console.log(e.target.value);
    setSearchQuery(e.target.value.toLowerCase());
  };

  useEffect(() => {
    // console.log({ searchQuery });
    const filteredUsers = allUsers.filter(user => user.name.toLowerCase().includes(searchQuery));
    // console.log({ filteredUsers });
    setUsers(filteredUsers);
  }, [allUsers, searchQuery]);

  const renderHead = () => {
    return (
      <div className="info-head">
        <div className="heading-info"><h5>People's List ({users.length})</h5></div>
        <div className="create-btn-container">
          <button className="add-new-user" onClick={handleAddUserBtnClick}>Add new User</button>
        </div>
        <div className="input-search-container">
          <input type='search' placeholder="Filter by name" onChange={handleFilterChange} />
        </div>
      </div>
    );
  };

  const renderUsers = () => {
    return (
      <div className="user-list-container">
        <ul className="list-container">
          {users.map((user, i) => {
            return (
              <li className="list-item-container" key={user.id} index={i} draggable>
                <div className="inner-li">
                  <div className="name-org_wrapper">
                    <div className="name-container" onClick={(e) => handleListItemClick(e, user)}>
                      {user.name}
                    </div>
                    <div className="org_name-container">
                      <img src={Corp} alt="profile" />
                      <span className="org_name">
                        {user.org_name}
                      </span>
                    </div>
                  </div>
                  <div className="right-profile-control-container">
                    <div className="profile-pic-container" onClick={(e) => handleListItemClick(e, user)}>
                      <Initials name={user.name} />
                    </div>
                    <div className="li-controls">
                      <img src={Delete} alt="delete" className="del-icon" onClick={(e) => handleDelete(e, user.id)} />
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  useEffect(() => {
    console.log({ isDetailsModalOpen });
  }, [isDetailsModalOpen]);

  return (
    <div className="user-list-head-wrapper">
      {renderHead()}
      <AddUserModal isOpen={isAddUserModalOpen} addNewUser={addNewUser} hideModal={() => setAddUserModalVisible(false)} />
      <UserDetailsModal isOpen={isDetailsModalOpen} user={userModalData} hideModal={() => setDetailsModalVisible(false)} />
      {renderUsers()}
    </div>
  );
};
