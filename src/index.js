import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

import { CommentDetail } from "./components/CommentDetail";
import { ApprovalCard } from "./components/ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure?
        </div>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author={faker.internet.userName()}
          timeAgo="Today at 5:45PM"
          textField="Nice blog post!"
          srcImage={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author={faker.internet.userName()}
          timeAgo="Today at 2:45AM"
          textField="Super!"
          srcImage={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author={faker.internet.userName()}
          timeAgo="Yesterday at 8:00PM"
          textField="No way?!"
          srcImage={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));

/*
      <CommentDetail
        author="Michel"
        timeAgo="Yesterday at 8:00PM"
        textField="No way?!"
        srcImage={faker.image.avatar()}
      />


*/
