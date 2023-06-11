import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import ContactInfo from "../widgets/ContactInfo";
import { Menu, Close, LocationOn, PhoneInTalk } from "@mui/icons-material";

export default function Header() {
  const [isMenuVisible, setMenuVisible] = useState(false);

  function handleMenuToggle() {
    setMenuVisible(!isMenuVisible);
  }

  const router = useRouter();
  return (
    <header>
      <div className="header-top">
        <div className="container">
          <ContactInfo time address />
        </div>
      </div>
      <div className="header-bottom">
        <div className="container">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Autoplannernederland Logo"
              width={200}
              height={80}
            />
          </Link>
          <nav>
            <div className="contact">
              <Link
                href="https://goo.gl/maps/sLNV5CeqcpGTNWjY7"
                target="_blank"
              >
                <LocationOn />
              </Link>
              <Link href="tel:+31172255475">
                <PhoneInTalk />
              </Link>
            </div>
            <button aria-label="Menu aan" onClick={handleMenuToggle}>
              {isMenuVisible ? <Close /> : <Menu />}
            </button>
            <ul className={isMenuVisible ? "visible" : ""}>
              <li>
                <Link
                  href="/"
                  className={router.pathname === "/" ? "active" : ""}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/occasions"
                  className={router.pathname === "/ocassions" ? "active" : ""}
                >
                  Occasions
                </Link>
              </li>
              <li>
                <Link
                  href="/diensten"
                  className={router.pathname === "/diensten" ? "active" : ""}
                >
                  Diensten
                </Link>
              </li>
              <li>
                <Link
                  href="/over-ons"
                  className={router.pathname === "/over-ons" ? "active" : ""}
                >
                  Over Ons
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={router.pathname === "/contact" ? "active" : ""}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
