import React from "react";

export const ApprovalCard = () => {
  return (
    <div className="ui card">
      <div className="content">Are you sure?</div>
      <div className="extra content">
        <div className="ui two buttons">
          <div className="ui basic green button">Aprove</div>
          <div className="ui basic red button">Reject</div>
        </div>
      </div>
    </div>
  );
};
