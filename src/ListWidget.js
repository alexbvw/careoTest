import React from 'react'


const users = [
  { 
    name: 'Skylar', 
    lastName: 'Calzoni', 
    position: "Nurse, Manchester", 
    comments: 3, 
    attachments: 1 
  },{ 
    name: 'Alfredo', 
    lastName: 'Gousei', 
    position: "Nurse, Watford", 
    comments: 1, 
    attachments: 0 
  },
  {
    name: 'James',
    lastName: 'Carder',
    position: "Nurse, Milton Keynes",
    comments: 0,
    attachments: 1
  }

];

export default function ListWidget() {
  // const [activeTab, setActiveTab] = React.useState(0);

  return (
    <div className="listWidget">
      {users.map((user, index) => (
          <span
            key={index} 
            className={`card`}
          >
            <span className="cardTop">
              <span className="cardTopLeft">
                <span className='userAvatar'>
                  <h4> {user.name.slice(0,1)}{user.lastName.slice(0,1)}</h4> 
                </span>
                <span className='userInfo'>
                  <span> <h4> {user.name} {user.lastName}</h4></span>
                  <span><h5>{user.position}</h5></span>
                </span>
              </span>
            </span>
            <span className="cardBottom">
              <span className='infoIcons'>
                <span className='icon'>
                <img alt='' src='./comment.svg'></img>
                <p>{user.comments}</p>
                </span>
                <span className='icon'>
                <img alt='' src='./attachment.svg'></img>
                <p>{user.attachments}</p>
                </span>
              </span>
              <span className='action-icon'>
              <img alt='' src='./options.svg'></img>
              </span>
            </span>
          </span>
        ))}
    </div>
  );
}