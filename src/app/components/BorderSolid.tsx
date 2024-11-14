interface BorderSolidProps {
    styleMargin?: string
}

export default function BorderSolid({ styleMargin }: BorderSolidProps) {
    return (
        <div className={`w-24 h-[10px] mt-6 bg-red-700 ${styleMargin}`}>

        </div>
    )
}
