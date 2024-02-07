import { useEffect, useState } from "react";

const MyMessage = ({ message, chat }) => {

  const [formattedDate, setFormattedDate] = useState('');

  const chatDate = chat.people[0].chat_updated


  useEffect(() => {
    if (chatDate) {
      const date = new Date(chatDate);
      setFormattedDate(date.toLocaleString());
    }
  }, [chatDate]);

  // The conditional statement here is if the message.attachments is greater than 0, that means what we are having is an image and not actually a text. So this runs and if it's not an image, the other return runs.
  if (message.attachments && message.attachments.length > 0) {
    return (
          <img
            src={message.attachments[0].file}
            alt="message-attachment"
            className="message-image"
            style={{ float: "right" }}
          />
         
    );
  }

  // console.log(chat)

  // const chatDate = chat.people[0]

  // console.log(chatDate)

  // const people = chat.map(people =>{
  //   if(people.person === localStorage.getItem('username')){
  //     return 
  //   }
  // })

  return (
    <div
      className="message my-message"
      style={{
        float: "right",
        marginRight: "18px",
        color: "white",
        backgroundColor: "#3B2A50"
      }}>
      <span className="my-message-text">{message.text}</span>
      <span className="date">{formattedDate}</span>
    </div>
  );
};

export default MyMessage;
