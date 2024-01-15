// in src/MyMenu.js
import { Menu, Title, TitlePortal } from "react-admin";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { TreeView, TreeItem } from "@mui/x-tree-view";
import BandIcon from "./BandIcon";
import StudioIcon from "./StudioIcon";
import { useNavigate } from "react-router-dom";

export const MyMenu = () => {
  const navigate = useNavigate();
  const handleClick = (text: string) => {
    let element = document.querySelector(".css-12qcmes-MuiDrawer-docked-RaSidebar-root");

    // If the first class is not found, try to find the element with the second class
    if (!element) {
      element = document.querySelector(".css-1plqj3i-MuiDrawer-docked-RaSidebar-root");
    }

    // Check if the element is found
    if (element) {
      // Do something with the element, for example, toggle classes
      element.classList.toggle("css-12qcmes-MuiDrawer-docked-RaSidebar-root");
      element.classList.toggle("css-1plqj3i-MuiDrawer-docked-RaSidebar-root");
    }

    return (
      <div onClick={() => navigate(`/${text}`)}>
        {text
          .split("_")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")}
      </div>
    );
  };
  return (
    <Menu>
      {/* <Menu.Item to="posts" primaryText="Miscellaneous" /> */}
      <TreeView
        aria-label="file system navigator"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        sx={{ height: "auto", flexGrow: 1, maxWidth: 400, overflowY: "auto", textWrap: "nowrap" }}
      >
        <TreeItem nodeId="0" label={handleClick("cool_show_band")} icon={<BandIcon />}>
          {/* FIXME Title on app bar fix me for COOL SHOW BAND  */}
          {/* <TitlePortal variant="body2" component="h3" /> */}
          {/* <Title title="My Custom Page" /> */}

          <Menu.ResourceItem name="posts" />
          <Menu.ResourceItem name="team_band" />
          <Menu.ResourceItem name="team_band" />
          <Menu.ResourceItem name="partners_band" />
          <Menu.ResourceItem name="hero_band" />
          <Menu.ResourceItem name="event_images" />
          <Menu.ResourceItem name="event_band" />
          <Menu.ResourceItem name="contacts_band" />
          <Menu.ResourceItem name="collaborations_band" />
          <Menu.ResourceItem name="about_us_band" />
        </TreeItem>
        <TreeItem nodeId="2" label={handleClick("cool_studio")} icon={<StudioIcon />}>
          {/* Title on app bar fix me for COOL SHOW BAND  */}
          {/* <TitlePortal variant="body2" component="h3" /> */}
          {/* <Title title="My Custom Page" /> */}
          <Menu.ResourceItem name="student_success_studio" />
          <Menu.ResourceItem name="student_success_studio" />
          <Menu.ResourceItem name="hero_studio" />
          <Menu.ResourceItem name="st_teachers" />
          <Menu.ResourceItem name="st_student_reviews" />
          <Menu.ResourceItem name="event_studio_images" />
          <Menu.ResourceItem name="event_studio" />
          <Menu.ResourceItem name="direction" />
          <Menu.ResourceItem name="about_us" />
        </TreeItem>
      </TreeView>
    </Menu>
  );
};
