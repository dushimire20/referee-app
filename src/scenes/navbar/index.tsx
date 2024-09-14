import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import useMediaQuery from "@/hooks/useMediaQuery";
import Logo from "@/assets/Logo.png";

type Props = {
  isTopOfPage: boolean;
};

const Navbar = ({isTopOfPage}: Props) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const navbarBackground = isTopOfPage ? "bg-primary-100" : " drop-shadow bg-primary-100";
  
  return (
    <nav>
      <div
      className={`${flexBetween} fixed top-0 z-30 w-full py-[20px]`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* left side */}

            <p className="font-poppins font-bold text-[32px] leading-[35.2px]">ARAB.</p>

            {/* Right Side */}

            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                </div>
                <div className={`${flexBetween} gap-8`}>
                  <NavLink 
                  to="/"  
                  onClick={handleClick}                
                  >
                    Home

                  </NavLink>

                  <NavLink 
                  to="/goals"  
                  onClick={handleClick}                
                  >
                    Our Goal

                  </NavLink>

                  <NavLink 
                  to="/features" 
                  onClick={handleClick}                 
                  >
                    Key features

                  </NavLink>

                  <NavLink 
                  to="/login" 
                  onClick={handleClick}                 
                  >
                    Sign in

                  </NavLink>

                  <NavLink 
                  onClick={handleClick}
                  to="/signUp"                  
                  >
                    Join Now

                  </NavLink>

                </div>

              </div>

            ) : (

              <button
              className="rounded-full bg-secondary-100 p-2"
              onClick={ () => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-primary-100" />

              </button>

            )}


          </div>

        </div>

        {/* Mobile menu model */}

        {!isAboveMediumScreens && isMenuToggled && (
          <div className="fixed right-0 bottom-0 z-40 h-full w-[250px] bg-secondary-100 drop-shadow-xl">
            {/* {close Icon} */}
            <div className="flex justify-end p-12">
              <button onClick={ () => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-primary-100" />
              </button>

            </div>
            {/* {menu items} */}
            
            <div className="ml-[33%] flex  flex-col gap-10 text-2xl font-poppins " >
                  <NavLink 
                  to="/"                  
                  >
                    Home

                  </NavLink>

                  <NavLink 
                  to="/"                  
                  >
                    Our Goal

                  </NavLink>

                  <NavLink 
                  to="/"                  
                  >
                    Key features

                  </NavLink>

                  <NavLink 
                  to="/login"
                  onClick={handleClick}                  
                  >
                    Sign in

                  </NavLink>

                  <NavLink 
                  to="/signUp"                  
                  >
                    Join Now

                  </NavLink>
            </div>

          </div>
        )}

      </div>
    </nav>
  
  );
};

export default Navbar;