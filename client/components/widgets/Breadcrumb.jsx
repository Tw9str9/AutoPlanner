import { ArrowBack, ChevronRight, Home } from "@mui/icons-material";
import Link from "next/link";
import { useRouter } from "next/router";

const Breadcrumb = ({ make, slug }) => {
  const router = useRouter();
  const pathSegments = router.asPath
    .split("/")
    .filter((segment) => segment !== "");
  const shouldRenderBreadcrumb = router.pathname !== "/";
  return (
    shouldRenderBreadcrumb && (
      <div className="breadcrumb">
        <nav>
          <ul>
            <li>
              <button aria-label="Terug" onClick={() => router.back()}>
                <ArrowBack />
              </button>
            </li>
            <li>
              <Link aria-label="Homepage" href="/">
                <Home />
              </Link>
            </li>
            {pathSegments.map((segment, index) => {
              const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
              {
                slug === segment ? (segment = make) : segment;
              }
              if (segment.includes("?sort=")) return;

              const formattedSegment = () => {
                if (segment.includes("#")) return segment.split("#")[0];
                return segment.replace(/-/g, " ");
              };

              return (
                <li key={index}>
                  <ChevronRight />
                  <span>
                    <Link href={path}>
                      {formattedSegment().charAt(0).toUpperCase() +
                        formattedSegment().slice(1)}
                    </Link>
                  </span>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    )
  );
};

export default Breadcrumb;
