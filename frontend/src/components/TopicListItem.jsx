import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = ({ id, label, link, onLoadTopic }) => (
  <div
    className="topic-list__item"
    onClick={() => onLoadTopic(id)}
  >
    <span href={link}>{label}</span>
  </div>
);

TopicListItem.defaultProps = {
  id: 1,
  label: "Nature",
};

export default TopicListItem;