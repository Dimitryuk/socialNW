import s from './Profile.module.css'

const MyPosts = () => {
  return (
    <div className={s.content}>
      <div>
        <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" />
      </div>
      <div> ava+descr</div>
      <div>My Posts</div>
      <div>New Post</div>
      <div className={s.posts}>
        <div className={s.item}>Post 1</div>
        <div className={s.item}>post 2</div>
      </div>
    </div>
  );
};

export default MyPosts;
