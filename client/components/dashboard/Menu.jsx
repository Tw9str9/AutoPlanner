import {
  LogoutOutlined,
  HomeOutlined,
  CollectionsOutlined,
  ChatOutlined,
  ModeEditOutlineOutlined,
  DirectionsCarOutlined,
} from "@mui/icons-material/";
import { useRouter } from "next/router";
import styles from "@/styles/Dashboard.module.css";

export default function Menu({ setActive }) {
  const router = useRouter();
  return (
    <nav className={styles.sidebar}>
      <div>AutoPlanner</div>
      <ul>
        <span>Dashboard</span>
        <li>
          <button onClick={() => setActive("ManageContent")}>
            <ModeEditOutlineOutlined />
            <p>Inhoud bewerken</p>
          </button>
        </li>
        <li>
          <button onClick={() => setActive("ManageCars")}>
            <DirectionsCarOutlined />
            <p>Occasions</p>
          </button>
        </li>
        <li>
          <button onClick={() => setActive("ManageReviews")}>
            <ChatOutlined />
            <p>Reviews</p>
          </button>
        </li>
        <li>
          <button onClick={() => setActive("ManagePhotos")}>
            <CollectionsOutlined />
            <p>Foto's</p>
          </button>
        </li>
        <li>
          <button onClick={() => router.push("/")}>
            <HomeOutlined />
            <p>Homepagina</p>
          </button>
        </li>
        <li>
          <button>
            <LogoutOutlined />
            <p>Logout</p>
          </button>
        </li>
      </ul>
    </nav>
  );
}
