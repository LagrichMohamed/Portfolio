
    import logo1 from "../assets/ML Logo.png"    
    
    import {FaLinkedin} from "react-icons/fa"
    import {FaGithub} from "react-icons/fa"

    const NavBar = () => {
      return (
        <nav className=' mb-20 flex  items-center justify-between py-6'>
            <div className='flex flex-shrink-0 items-center'>
                <img className="mx-2 w-25" src={logo1} alt="logo" />
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                
                <a href="https://www.linkedin.com/in/mohamed-lagrich-04553a25b/"><FaLinkedin /></a>
                <a href="https://github.com/LagrichMohamed"> <FaGithub /></a>
                {/* <FaSquareXTwitter />
                <FaInstagram /> */}
            </div>
        </nav>
      )
    }
    
    export default NavBar