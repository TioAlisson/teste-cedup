import FooterContact from "../components/FooterContact";
import FooterSocial from "../components/FooterSocial";
import Signature from "../components/Signature";

export default function Footer() {
    return (
        <footer className="bg-primary-color">
            <div className="py-24">
                <FooterSocial />
                <FooterContact />
            </div>
            <Signature />
        </footer>
    )
}
