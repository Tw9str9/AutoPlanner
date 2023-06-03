import Image from "next/image";
import ContactInfo from "../widgets/ContactInfo";

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="container">
          <div className="partners">
            <div className="img-container">
              <Image src="/rdw.png" alt="rdw" fill />
            </div>
            <div className="img-container">
              <Image src="/vwe-logo.png" alt="vwe" fill />
            </div>
            <div className="img-container">
              <Image src="/sbb-beeldmerk-fc.gif" alt="sbb-beeldmerk-fc" fill />
            </div>
            <div className="img-container">
              <Image src="/erkend.png" alt="erkend" fill />
            </div>
            <div className="img-container">
              <Image src="/nap.png" alt="nap" fill />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="contact-info">
            <h1>
              Auto<span>Planner</span> NL
            </h1>
            <ContactInfo whatsapp email />
          </div>
        </div>
      </div>
    </footer>
  );
}
