import React from 'react';
import styles from './users.module.css';
let Users = props => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoUrl:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/548px-Dmitry_Nagiev_2017_4.jpg',
        followed: true,
        fullName: 'Dmitriy',
        status: 'I am a boss',
        location: { city: 'Minsk', country: 'Belarus' },
      },
      {
        id: 2,
        photoUrl:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/548px-Dmitry_Nagiev_2017_4.jpg',
        followed: false,
        fullName: 'Inna',
        status: 'I am a queen',
        location: { city: 'Cherkasy', country: 'Ukraine' },
      },
      {
        id: 3,
        photoUrl:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/548px-Dmitry_Nagiev_2017_4.jpg',
        followed: true,
        fullName: 'Sanya',
        status: 'I am a superhero',
        location: { city: 'Kiev', country: 'Ukraine' },
      },
    ]);
  }

  return (
    <div>
      {props.users.map(u => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.photoUrl} className={styles.userPhoto} />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  UnFollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
