import { Button, Nav, NavItem } from "reactstrap";
import Logo from "../../logo/Logo";
import Link from "next/link";
import { useRouter } from "next/router";

const navigation = [
  {
    title: "Dashboard",
    href: "/",
    icon: "bi bi-speedometer2",
  },
  {
    title: "Cameras",
    href: "/cameras",
    icon: "bi bi-camera-video",
  },
  {
    title: "Alerts",
    href: "/ui/alerts",
    icon: "bi bi-bell",
  },
  {
    title: "Criminal Detection",
    href: "/criminalDetection",
    icon: "bi bi-person-bounding-box",
  },
  {
    title: "Accident Detection",
    href: "/accidentDetection",
    icon: "bi bi-truck",
  },
  {
    title: "Fire Detection",
    href: "/fireDetection",
    icon: "bi bi-exclamation-triangle",
  },
  {
    title: "Theft detection",
    href: "/theftDetection",
    icon: "bi bi-bicycle",
  },
  {
    title: "Public violence",
    href: "/publicViolence",
    icon: "bi bi-emoji-angry",
  },
  
];

const Sidebar = ({ showMobilemenu }) => {
  let curl = useRouter();
  const location = curl.pathname;

  return (
    <div className="p-3">
      <div className="d-flex align-items-center">
        <Logo />
        <Button
          close
          size="sm"
          className="ms-auto d-lg-none"
          onClick={showMobilemenu}
        ></Button>
      </div>
      <div className="pt-4 mt-2">
        <Nav vertical className="sidebarNav">
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <Link href={navi.href}>
                <a
                  className={
                    location === navi.href
                      ? "text-primary nav-link py-3"
                      : "nav-link text-secondary py-3"
                  }
                >
                  <i className={navi.icon}></i>
                  <span className="ms-3 d-inline-block">{navi.title}</span>
                </a>
              </Link>
            </NavItem>
          ))}
           <Button
            color="danger"
            tag="a"
            outline
            className="mt-3"
            disabled
          >
            Test mode
          </Button>
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
