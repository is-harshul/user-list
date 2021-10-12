import "./index.scss"; import React from 'react';
import { Modal } from 'antd';
import "./index.scss";
import Initials from "../Initials/Initials";

const UserDetailsModal = (props) => {
  const handleOk = () => {
    props.hideModal();
  };

  const handleCancel = () => {
    props.hideModal();
  };

  return (
    <>{props.isOpen &&
      <Modal
        title="Person Information"
        visible={props.isOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        cancelText="Back"
        okButtonProps={{ style: { display: 'none' } }}
      >
        <div className="user-data-modal-container__inner">
          <div className="name-img-cont">
            <div className="img-cont">
              <Initials name={props.user?.name} />
            </div>
            <div className="name-cont">
              <span className="name-text">{props.user?.name}</span>
            </div>
            <div className="phone-cont">
              <span className="phone-text">+{props.user?.phone[0]?.value}</span>
            </div>
          </div>
          <hr />
          <div className="personal-info">
            <div className="left-field-heading">
              <span className="field-heading infoItem">Email</span>
              <span className="field-heading infoItem">Organization</span>
              <span className="field-heading infoItem">Assistant</span>
              <span className="field-heading infoItem">Groups</span>
              <span className="field-heading infoItem">Location</span>
            </div>
            <div className="right-field-value">
              <span className="field-value infoItem">{props.user?.email[0]?.value}</span>
              <span className="field-value infoItem">{props.user?.org_name}</span>
              <span className="field-value infoItem">{props.user?.ea360768b05872d5a019a6337aa2cf5c721892fa}</span>
              <span className="field-value infoItem">{props.user?.b8eb79ec1d8a6fdcdc292fd67c76379ad75a0b46}</span>
              <span className="field-value infoItem">{props.user["52fb6b2409ab4f43362a4d0409c853d9b5754b35"]}</span>
            </div>
          </div>
        </div>
      </Modal>}
    </>
  );
};

export default UserDetailsModal;