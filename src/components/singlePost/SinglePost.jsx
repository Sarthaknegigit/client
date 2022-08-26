import './singlePost.css'

export default function SinglePost() {
  return (
    <div className='singlePost'>
      <div className="singlePostWrapper">
        <img
            src="https://images.pexels.com/photos/11022596/pexels-photo-11022596.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="SinglePostImage"
            className="singlePostImg"
        />
        <h1 className="singlePostTitle">
            Lorem ipsum dolor sit amet.
            <div className="singlePostEdit">
            <i class="singlePostIcon fa-regular fa-trash-can"></i>
            <i class="singlePostIcon fa-regular fa-pen-to-square"></i>
            </div>
        </h1>
        <div className="singlePostInfo">
            <span className="singlePostAuthor">Author: <b>Sarthak</b></span>
            <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className='singlePostDesc'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore corrupti excepturi vel, cumque magni mollitia ratione culpa aspernatur minima, tempore, facilis sunt quis odit veritatis repellat incidunt nobis aliquam.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore corrupti excepturi vel, cumque magni mollitia ratione culpa aspernatur minima, tempore, facilis sunt quis odit veritatis repellat incidunt nobis aliquam.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore corrupti excepturi vel, cumque magni mollitia ratione culpa aspernatur minima, tempore, facilis sunt quis odit veritatis repellat incidunt nobis aliquam.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore corrupti excepturi vel, cumque magni mollitia ratione culpa aspernatur minima, tempore, facilis sunt quis odit veritatis repellat incidunt nobis aliquam.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore corrupti excepturi vel, cumque magni mollitia ratione culpa aspernatur minima, tempore, facilis sunt quis odit veritatis repellat incidunt nobis aliquam. 
        </p>

      </div>
    </div>
  )
}
