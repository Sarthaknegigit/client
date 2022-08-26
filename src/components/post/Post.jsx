import './post.css'

export default function Post() {
  return (
    <div className='post'>
      <img
        src="https://images.pexels.com/photos/11022596/pexels-photo-11022596.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="postImage"
        className="postImg" 
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit, amet</span>
        <hr />
        <span className="postDate">1 Hour Ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente magnam, quibusdam iusto amet labore voluptate neque ipsa similique provident, excepturi esse eos, facere dolorum aspernatur! Earum, unde. Autem, dolores dolorem.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente magnam, quibusdam iusto amet labore voluptate neque ipsa similique provident, excepturi esse eos, facere dolorum aspernatur! Earum, unde. Autem, dolores dolorem.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente magnam, quibusdam iusto amet labore voluptate neque ipsa similique provident, excepturi esse eos, facere dolorum aspernatur! Earum, unde. Autem, dolores dolorem.
      </p>
    </div>
  )
}
