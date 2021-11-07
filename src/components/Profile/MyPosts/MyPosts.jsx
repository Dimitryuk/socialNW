import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
  return (
    // <div className={s.content}>
    //   <div>
    //     <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" />
    //   </div>
    //   <div> ava+descr</div>
    //   <div>My Posts</div>
     <div> My Posts 
       <div>
         <textarea></textarea>
         <button>Add post</button>
       </div>
      <div className={s.posts}>
        <Post message = 'Hi.how are you?' likesCount='18'/>
        <Post message = 'Its me first message' likesCount='23'/>
      </div>
    </div>
  );
};

export default MyPosts;
