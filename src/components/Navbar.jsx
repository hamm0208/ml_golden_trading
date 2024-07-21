import {React,  useEffect,  useState, useRef } from "react"
import {Link} from "react-router-dom"
import {navLinks} from '../constants'
import {company_square, menu, close} from "../assets"
  

const Navbar = () => {
  //Active links
  const [active, setActive] = useState("")
  
  //Toggle sidebar menu
  const [toggle,setToggle] = useState(false)
  
  //Reference to sidebar
  const sidebarRef = useRef(null);
  
  //The useEffect hook is used to set up a media query listener that triggers a callback function whenever the screen width changes.
  useEffect(()=>{
    //Sets the minimum width to trigger the callback function
    const mediaQuery = window.matchMedia('(min-width:768px)')
    const handleMediaQueryChange = (event) =>{
      if(event.matches){
        setToggle(false)
      }
    }

    
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    // Clean up the listener on component unmount
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, [])
  
  useEffect(() => {
    const handleOutsideSidebackClick = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setToggle(false);
      }
    };

    // Add event listener for clicks on the document
    document.addEventListener('mousedown', handleOutsideSidebackClick);

    // Clean up the listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleOutsideSidebackClick);
    };
  }, [sidebarRef]);
  
  const handleNavClick = (event, link) => {
    event.preventDefault(); // Prevent the default anchor click behavior
    setActive(link.title);

    const element = document.getElementById(link.id);
    if (element) {
      const yOffset = -100; // Adjust this value to set the offset
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`w-full flex-items-center py-5  fixed top-0 z-50 bg-primary`}>
      <div className='w-full flex justify-between items-center  max-w-7xl mx-auto'>
        <div className='flex justify-center items-center mr-5 md:w-60 w-full '>
          <Link 
              to="/"
              className='flex items-center' 
              onClick={()=>{
                setActive("");
                window.scrollTo(0,0)
              }}
            >
              <img src={company_square} alt="Logo" className="w-32 object-contain"/>
            </Link>
        </div>
          <ul className='list-none hidden md:flex flex-row '>
            {
              navLinks.map((link) =>(
                <li
                  key={link.id}
                  className={`
                    ${active === link.title ? "text-secondary" : "text-white"} 
                    hover:text-secondary
                    transition duration-300 
                    text-[15px] lg:text-[20px]
                    font-medium cursor-pointer mx-6
                  `}
                  onClick={(event) => handleNavClick(event, link)}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))
            }
          </ul>
          <div ref={sidebarRef}>
            <div  className="md:hidden absolute right-5 top-5 z-30" >
                <img src={toggle? close: menu} alt="menu" className="w-[28px] h-[28px] object-contain cursor-pointer " onClick={()=>setToggle(!toggle)} />
            </div>
            <div  className = {`${!toggle? 'hidden' : 'flex'} p-6 bg-zinc-500 absolute top-0 h-screen right-0 w-1/2 min-w[140px] z-10 rounded-xl`}>
              <ul className='list-none flex items-start flex-col gap-4 mt-10'>
                  {navLinks.map((link) =>(
                    <li key={link.id} className={`${
                      active === link.title? "text-secondary" : "text-black" 
                    } font-medium text-[20px] cursor-pointer hover:text-secondary`
                    } 
                    onClick={(event)=>
                    {
                      setToggle(!toggle)
                      handleNavClick(event, link)
                    }
                    }>
                      <a href={`#${link.id}`}>{link.title}</a>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
      </div>
      <hr className="mt-5"/>
    </nav>
    
)
}

export default Navbar