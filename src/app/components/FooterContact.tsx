import InfoFooterContact from "./InfoFooterContact";
import data from "@/data/dataFooter.json"

export default function FooterContact() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 place-items-center">
            {data.footer.address.map((field, index) => (
                <InfoFooterContact
                    key={index}
                    image={field.image}
                    alt={field.alt}
                    title={field.title}
                    paragraph={field.paragraph}
                />
            ))}
        </div>
    );
}
