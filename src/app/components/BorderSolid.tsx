interface BorderSolidProps {
    styleMargin?: string
}

export default function BorderSolid({ styleMargin }: BorderSolidProps) {
    return (
        <span className={`block w-28 h-[10px] mt-6 bg-sencodary-500 ${styleMargin}`}></span>
    )
}
