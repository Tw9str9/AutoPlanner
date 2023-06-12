import {
  LogoutOutlined,
  HomeOutlined,
  CollectionsOutlined,
  ChatOutlined,
  ModeEditOutlineOutlined,
  DirectionsCarOutlined,
} from "@mui/icons-material/";
import styles from "@/styles/Dashboard.module.css";

export default function Menu({ setActive }) {
  return (
    <nav className={styles.sidebar}>
      <div>AutoPlanner</div>
      <ul>
        <span>Dashboard</span>
        <li>
          <a href="#" onClick={() => setActive("ManageContent")}>
            <ModeEditOutlineOutlined />
            <p>Inhoud bewerken</p>
          </a>
        </li>
        <li>
          <a href="#" onClick={() => setActive("ManageCars")}>
            <DirectionsCarOutlined />
            <p>Occasions</p>
          </a>
        </li>
        <li>
          <a href="#" onClick={() => setActive("ManageReviews")}>
            <ChatOutlined />
            <p>Reviews</p>
          </a>
        </li>
        <li>
          <a href="#" onClick={() => setActive("ManagePhotos")}>
            <CollectionsOutlined />
            <p>Foto's</p>
          </a>
        </li>
        <li>
          <a href="#">
            <HomeOutlined />
            <p>Homepagina</p>
          </a>
        </li>
        <li>
          <a href="#">
            <LogoutOutlined />
            <p>Logout</p>
          </a>
        </li>
      </ul>
    </nav>
  );
}
