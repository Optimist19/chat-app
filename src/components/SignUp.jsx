// import { useState } from "react";
// import Login from "./LoginForm";
// import axios from "axios";

// const Modal = () => {
// //   const [showLogin, setShowLogin] = useState(false);
//   const [userDetails, setUserDetails] = useState({
//     username: "",
//     password: "",
//     firstName: "",
//     lastName: "",
//     custom_json: {}
//   });


//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const authObject = {
//       "PRIVATE-KEY": "cf6a2919-96c2-4dbe-b343-172350dfe0bb"
//     }

//     try {
//       await axios.post("https://api.chatengine.io/chats", {

//         headers: authObject,
//         body: JSON.stringify(userDetails)
//       });

//       setUserDetails({
//         ...userDetails,
//         username: "",
//         password: "",
//         firstName: "",
//         lastName: "",
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   function handleChange(e) {
//     setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
//   }
//   console.log(userDetails);

// //   if (showLogin) {
// //     return <Login />;
// //   }

//   return (
//     <div className="wrapper">
//       <div className="form">
//         <h1 className="title">Chat Application</h1>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="username"
//             value={userDetails.username}
//             onChange={handleChange}
//             className="input"
//             placeholder="Username"
//             required
//           />
//           <input
//             type="password"
//             name="password"
//             value={userDetails.password}
//             onChange={handleChange}
//             className="input"
//             placeholder="Password"
//             required
//           />
//           <input
//             type="text"
//             name="firstName"
//             value={userDetails.firstName}
//             onChange={handleChange}
//             className="input"
//             placeholder="First Name"
//             required
//           />
//           <input
//             type="text"
//             name="lastName"
//             value={userDetails.lastName}
//             onChange={handleChange}
//             className="input"
//             placeholder="Last Name"
//             required
//           />
//           <div align="center">
//             <button type="submit" className="button">
//               <span>Sign up</span>
//             </button>
//           </div>
//         </form>
//         <h1>{userDetails.error}</h1>
//       </div>
//     </div>
//   );
// };

// export default Modal;
