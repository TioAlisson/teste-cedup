import ImageFacebook from "@/public/icon/icon-facebook-white.svg";
import InfoFooterContact from "./InfoFooterContact";

const data = {
    Footer: {
        contact: [
            { id: 1, link: "https://www.linkedin.com/in/exemplo1", image: ImageFacebook, title: "ENDEREÇO", paragraph: "123 Lages SC, Souls, Blood" },
        ]
    },
};

export default function FooterContact() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 place-items-center">
            {/* {data.Footer.contact.map((field, index) => (
                
            ))} */}
            <InfoFooterContact
                image={ImageFacebook}
                alt="teste"
                title="ENDEREÇO"
                paragraph="123 Lages SC, Souls, Blood"
            />
            <InfoFooterContact
                image={ImageFacebook}
                alt="teste"
                title="ENDEREÇO"
                paragraph="123 Lages SC, Souls, Blood"
            />
            <InfoFooterContact
                image={ImageFacebook}
                alt="teste"
                title="ENDEREÇO"
                paragraph="123 Lages SC, Souls, Blood"
            />
        </div>
    );
}
