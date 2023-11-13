import { NavLink } from "react-router-dom";
import links from "../utils/links";
import { useDashboardContext } from "../pages/DashBoardLayout";

const NavLinks = ({ isBigSidebar }) => {
  const { toggleShowSidebar, user } = useDashboardContext();
  return (
    <>
      {" "}
      {links.map((link) => {
        const { text, path, icon } = link;
        return (
          <NavLink
            to={path}
            key={text}
            className="nav-link"
            onClick={isBigSidebar ? null : toggleShowSidebar}
            end
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </>
  );
};

export default NavLinks;
