import InfoFooterContact from "./InfoFooterContact";

import data from "@/data/data.json"
export default function FooterContact() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 place-items-center">
            {data.Footer.endereco.map((field, index) => (
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
