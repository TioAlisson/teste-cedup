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
            <div className="bg-zinc-950/80 py-28 pt-[270px] ">
                <h1 className="text-center text-white text-5xl font-bold uppercase">{title}</h1>
            </div>
        </div>
    );
}
