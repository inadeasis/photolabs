import React from "react";
import TopicListItem from './TopicListItem';
import "../styles/TopicList.scss";

const TopicList = (props) => {
  const { topics } = props

  const topicListItemArray = topics.map((topic) =>
    <div key={topic.id}><TopicListItem topic={topic} /></div>
  );

return (
  <div className="top-nav-bar__topic-list">
    {topics.map((topic) => <div key={topic.id}><TopicListItem topic={topic} /></div>)}
  </div>
);
};

export default TopicList;
