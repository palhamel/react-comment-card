import React from "react";
import ReactDOM from "react-dom";
import faker from 'faker'

import { CommentDetail } from './components/CommentDetail'

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Sam"/>
      <CommentDetail author="Kit"/>
      <CommentDetail author="Jane"/>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
