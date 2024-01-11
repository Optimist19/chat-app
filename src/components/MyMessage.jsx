const MyMessage = ({ message, formattedDate, chat, activeChat }) => {

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
