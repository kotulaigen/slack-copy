import React from "react";
import ChatItem from "./ChatListItem/";

const ChatPanelList = (props) => {
    const { socket, usersList, activeChat, me, handleRoomClick, unreadMessages } = props;
    console.log(me)
    return (
        <div className="channels">
            <p>Direct Messages</p>
            {Object.keys(usersList).map(key => {
                if (key !== me.user)
                    return (
                        <ChatItem
                            unreadMessages={unreadMessages}
                            handleRoomClick={handleRoomClick}
                            active={activeChat}
                            name={key}
                            key={usersList[key]}
                            socket={socket}
                            socketId={usersList[key]}
                        />
                    );
            })}
        </div>
    );
};

export default ChatPanelList