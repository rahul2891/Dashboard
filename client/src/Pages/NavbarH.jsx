import { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
//import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './NavbarH.css';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons'
import Google from '../Pages/google.png'
const NavbarH = () => {
 const [sidebar, setSidebar] = useState(false);

   const showSidebar = () => setSidebar(!sidebar);


return (
<>
	<IconContext.Provider value={{ color: '#fff' }}>
	<div className="navbar" id='mySidenav'>
	<Link to="#" className="menu-bars">
	<FaIcons.FaBars onClick={showSidebar} />
	</Link>
    <a class="navbar-brand" href="#">
        <img src={Google} alt="Avatar Logo" className='photo'></img>
    </a>
	</div>
	<nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
	<ul className="nav-menu-items">
	{SidebarData.map((item, index) => {
return (
	<li className = {item.cName}>
	<Link to={item.path}>
		{item.icon}
	<span>{item.title}</span>
	</Link>
	</li>
	);
	})}
	</ul>
	</nav>
	</IconContext.Provider>
    <div className={sidebar ? 'main active' : 'main'}>
      <div className='btn_heading'>
		<h1>Rahul</h1>
    <button className='btn'>Show Table</button>
    </div>
		<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
	  </div>
</>
);
}

export default NavbarH