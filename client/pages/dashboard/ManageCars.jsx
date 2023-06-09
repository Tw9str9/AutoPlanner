import { AddBoxOutlined } from "@mui/icons-material";
import Link from "next/link";
import Car from "@/components/widgets/Car";

export default function ManageCars({ cars }) {
  return (
    <div className="cars">
      <h1>Occasions beheren</h1>
      <Link href="dashboard/add">
        <AddBoxOutlined />
      </Link>
      {cars?.map((car, i) => (
        <Car key={i} car={car} />
      ))}
    </div>
  );
}
