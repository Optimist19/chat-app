import { useEffect, useState } from "react";

const TheirMessage = ({ lastMessage, message, chat }) => {
	
	// const [formattedDate, setFormattedDate] = useState('');


	// const chatDate = chat.people[0].chat_updated
	
	const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;
  

	// useEffect(() => {
	// 	if (chatDate) {
	// 	  const date = new Date(chatDate);
	// 	  setFormattedDate(date.toLocaleString());
	// 	}
	//   }, [chatDate]);


	return (
	  <div className="message-row">
		{isFirstMessageByUser && (
		  <div
			className="message-avatar"
			style={{ backgroundImage: message.sender && `url(${message.sender.avatar})` }}
		  />
		)}
		{message.attachments && message.attachments.length > 0
		  ? (
			<img
			  src={message.attachments[0].file}
			  alt="message-attachment"
			  className="message-image"
			  style={{ marginLeft: isFirstMessageByUser ? '4px' : '48px' }}
			/>
		  )
		  : (
			<div className="message  my-message" style={{ float: 'left', backgroundColor: '#CABCDC', marginLeft: isFirstMessageByUser ? '4px' : '48px' }}>
			<span className="my-message-text">{message.text}</span>
			{/* <span className="date">{formattedDate}</span> */}
			</div>
		  )}
	  </div>
	);
  };
  
  export default TheirMessage;
