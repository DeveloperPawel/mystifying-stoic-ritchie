import Link from "next/link";
import React from "react";

interface DataType {
  id: number;
  status: string;
  img: string;
  name: string;
  last_chat: string;
}

const user_data:DataType[] = [
  {
    id: 1,
    status: "chat-unread",
    img: "/assets/img/bg-img/user1.png",
    name: "Designing World",
    last_chat: "Hello, Are you there?",
  },
  {
    id: 2,
    status: "",
    img: "/assets/img/bg-img/user2.png",
    name: "Mustafa Rabbi",
    last_chat: "How can I help you?",
  },
  {
    id: 3,
    status: "offline",
    img: "/assets/img/bg-img/user3.png",
    name: "Affan Islam",
    last_chat: "I want to buy your Affan template.",
  },
  {
    id: 4,
    status: "",
    img: "/assets/img/bg-img/user4.png",
    name: "Jannatun Lima",
    last_chat: "Affan - PWA Mobile HTML Template",
  },
  {
    id: 5,
    status: "",
    img: "/assets/img/bg-img/user2.png",
    name: "Waves Motion",
    last_chat: "affan-pwa-mobile.zip",
  },
  {
    id: 6,
    status: "offline",
    img: "/assets/img/bg-img/user1.png",
    name: "Samantha Sarah",
    last_chat: "Would you please provide a purchase link?",
  },
  {
    id: 7,
    status: "",
    img: "/assets/img/bg-img/user2.png",
    name: "Hasnain Ahmed",
    last_chat:
      "Sure, Here are the purchase link. Please click the purchase now button,then fill up your all payment info.",
  },
  {
    id: 8,
    status: "offline",
    img: "/assets/img/bg-img/user3.png",
    name: "Shaila Afrin",
    last_chat: "You are welcome 😍😍",
  },
];

const UserList = () => {
  return (
    <>
      {/* <!-- Element Heading --> */}
      <div className="element-heading">
        <h6 className="ps-1">Recent contacts</h6>
      </div>

      {/* <!-- Chat User List --> */}
      <ul className="ps-0 chat-user-list">

        {user_data.map((item, i) => (
          <li key={i} className={`p-3 ${item.status}`}>
            <Link className="d-flex" href="/chat">
              {/* <!-- Thumbnail --> */}
              <div className="chat-user-thumbnail me-3 shadow">
                <img
                  className="img-circle"
                  src={item.img}
                  alt={item.name}
                />
                <span className="active-status"></span>
              </div>
              {/* <!-- Info --> */}
              <div className="chat-user-info">
                <h6 className="text-truncate mb-0">{item.name}</h6>
                <div className="last-chat">
                  <p className="mb-0 text-truncate">
                    {item.last_chat}
                    {i === 0 && 
                    <span className="badge rounded-pill bg-primary"> 2</span>
                    }
                  </p>
                </div>
              </div>
            </Link>

            {/* <!-- Options --> */}
            <div className="dropstart chat-options-btn">
              <button
                className="btn dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-three-dots-vertical"></i>
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a href="#">
                    <i className="bi bi-mic-mute"></i>Mute
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bi bi-slash-circle"></i>Ban
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bi bi-trash"></i>Remove
                  </a>
                </li>
              </ul>
            </div>
          </li>
        ))}
 
      </ul>
    </>
  );
};

export default UserList;
