

import { LSidebar } from "./components/LSidebar";
import { bottomMenuData, menuData, workspaceData } from "./data/sidebarData";


export default function Home() {


  return (
    <>
 <LSidebar
            menuItems={menuData}
            workspaces={workspaceData}
            bottomItems={bottomMenuData}
            userInitials="AB"
          />
    </>
  );
}
