import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
  return (

    <div className={s.postsBlock}>
     <h3>My Posts</h3>
      
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
           <button>Add post</button>
         </div>
        
       </div>
      <div className={s.posts}>
        <Post message = 'Hi.how are you?' likesCount='18'/>
        <Post message = 'Its me first message' likesCount='23'/>
      </div>
    </div>
  );
};

export default MyPosts;
