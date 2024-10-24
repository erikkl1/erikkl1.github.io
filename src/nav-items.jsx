import { HomeIcon, FolderIcon, FileTextIcon } from "lucide-react";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import Resume from "./pages/Resume.jsx";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Home />,
  },
  {
    title: "Projects",
    to: "/projects",
    icon: <FolderIcon className="h-4 w-4" />,
    page: <Projects />,
  },
  {
    title: "Resume",
    to: "/resume",
    icon: <FileTextIcon className="h-4 w-4" />,
    page: <Resume />,
  },
];