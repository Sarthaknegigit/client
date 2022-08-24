import './topbar.css'

export default function TopBar() {
  return (
      <div className="top">
        <div className="topLeft">
            <i className="topIcon fa-brands fa-square-facebook"></i>
            <i className="topIcon fa-brands fa-square-twitter"></i>
            <i className="topIcon fa-brands fa-square-instagram"></i>
            <i className="topIcon fa-brands fa-square-pinterest"></i>
        </div>

        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">HOME</li>
                <li className="topListItem">ABOUT</li>
                <li className="topListItem">CONTACT</li>
                <li className="topListItem">LOGOUT</li>
            </ul>
        </div>

        <div className="topRight">
            <img src="https://images.pexels.com/photos/3106026/pexels-photo-3106026.jpeg"
             alt="img" 
             className="topImg" />
             <i className=" topSearchIcon fa-solid fa-magnifying-glass"></i>

        </div>
      </div>
  )
}

