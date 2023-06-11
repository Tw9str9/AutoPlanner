import {
  LocationOn,
  PhoneInTalk,
  WhatsApp,
  AccessTime,
  Email,
} from "@mui/icons-material";
import Link from "next/link";

export default function ContactInfo({ time, whatsapp, email, address }) {
  return (
    <>
      {time && (
        <p>
          <AccessTime />
          Elke dag 09.00 - 19.00 uur
        </p>
      )}
      {address && (
        <Link href="https://goo.gl/maps/sLNV5CeqcpGTNWjY7" target="_blank">
          <LocationOn />
          <address>Goudsmid 39, 2461 LZ Ter Aar</address>
        </Link>
      )}
      <Link href="tel:+31172255475">
        <PhoneInTalk />
        0172-255475
      </Link>
      {whatsapp && (
        <Link href="https://wa.me/31681787861" target="_blank">
          <WhatsApp />
          +31 681787861
        </Link>
      )}
      {email && (
        <Link href="mailto:info@autoplannernederland.nl">
          <Email />
          info@autoplannernederland.nl
        </Link>
      )}
    </>
  );
}
