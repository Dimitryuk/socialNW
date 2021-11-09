import s from './MyPosts.module.css'
import Post from './Post/Post'



const MyPosts = (props) => {
//   const posts =[
//     {message: 'Hi.how are you?', id:1, likesCount :18},
//     {message: 'Its my first post', id:2, likesCount : 15},
   
// ]

let postsElements = props.posts.map((p)=><Post message = {p.message} likesCount={p.likesCount}/>)
console.log(props);
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
        {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;
