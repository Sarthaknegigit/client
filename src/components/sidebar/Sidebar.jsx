import './sidebar.css'

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img
            src="https://images.pexels.com/photos/1154610/pexels-photo-1154610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut impedit deserunt provident modi repellendus ad illo libero sapiente, facere ex obcaecati veritatis, rem iure. Pariatur earum modi id quia deserunt.
            </p>
        </div>

        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Sports</li>
                <li className="sidebarListItem">Fashion</li>
                <li className="sidebarListItem">Travel</li>
                <li className="sidebarListItem">Technology</li>
                <li className="sidebarListItem">Movies</li>
            </ul>
        </div>

        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
                <i className="sidebarIcon fa-brands fa-square-facebook"></i>
                <i className="sidebarIcon fa-brands fa-square-twitter"></i>
                <i className="sidebarIcon fa-brands fa-square-instagram"></i>
                <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
            </div>
        </div>

    </div>
  )
}
