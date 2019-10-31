import React from 'react';
import PropTypes from 'prop-types';
import { Twemoji  } from 'react-emoji-render';
import App from "../App";

class MessageItem extends React.Component {
    render() {
        return <Twemoji   text={(this.props.content  || '').toString()} />;
    }
}
MessageItem.propTypes = {
    content: PropTypes.string
};
export default MessageItem;