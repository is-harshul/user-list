import React, { useReducer } from 'react';
import "./index.scss";
import { Modal } from 'antd';

const AddUserModal = (props) => {
  const initialState = {
    name: "",
    email: "",
    phone: "",
    // address: "",
    // assistant: "",
    // groups: "",
    // organization: "",
  };

  // State change managed
  const reducer = (state, action) => ({ ...state, [action.type]: action.payload });

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleOk = () => {
    console.log("Adding User...");
    // console.table(state);
    const phone = [{
      "label": "work",
      "value": state.phone,
      "primary": true
    }];
    const email = [{
      "label": "work",
      "value": state.email,
      "primary": true
    }];

    const payload = { ...state, phone, email };
    props.addNewUser(payload);
    props.hideModal();
  };

  const handleCancel = () => {
    props.hideModal();
  };

  const handleInputChange = (e) => {
    // console.log(e.target.name, e.target.value)
    // State change managed handed over to reducer
    dispatch({ type: e.target.name, payload: e.target.value });
  }

  return (
    <>
      <Modal
        title="Add new Person"
        visible={props.isOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Add"
        cancelText="Cancel"
      >
        <div className="add-user-modal">
          <input type="text" name="name" placeholder="Name" className="add-user-input-field" onChange={(e) => handleInputChange(e)} />
          <input type="email" name="email" placeholder="Email" className="add-user-input-field" onChange={(e) => handleInputChange(e)} />
          <input type="number" max={11} name="phone" placeholder="Phone" className="add-user-input-field" onChange={(e) => handleInputChange(e)} />
          {/* <input type="address" name="address" placeholder="Address" className="add-user-input-field" onChange={(e) => handleInputChange(e)} />
          <input type="text" name="assistant" placeholder="Assistant" className="add-user-input-field" onChange={(e) => handleInputChange(e)} />
          <input type="text" name="groups" placeholder="Groups" className="add-user-input-field" onChange={(e) => handleInputChange(e)} />
          <input type="text" name="organization" placeholder="Organization" className="add-user-input-field" onChange={(e) => handleInputChange(e)} /> */}
        </div>
      </Modal>
    </>
  );
};

export default AddUserModal;
