interface SingleBannerProps {
    title: string;
    backgroundImage?: string;
}

export default function SingleBanner({ title, backgroundImage }: SingleBannerProps) {
    return (
        <div
            className="bg-no-repeat bg-cover"
            style={{ backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined }}
        >
            <div className="bg-zinc-900/80 py-36 pt-72 ">
                <h1 className="text-center text-white text-5xl font-bold">{title}</h1>
            </div>
        </div>
    );
}
