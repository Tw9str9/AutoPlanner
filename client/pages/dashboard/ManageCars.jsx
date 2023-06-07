import { Add } from "@mui/icons-material";
import Link from "next/link";

export default function ManageCars() {
  return (
    <div className="cars">
      <h1>Occasions beheren</h1>
      <Link href="dashboard/add">
        <Add />
      </Link>
    </div>
  );
}
