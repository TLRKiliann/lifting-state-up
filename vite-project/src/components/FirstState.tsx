type ChildProps = {
    mox: {
        id: number,
        text: string
    }[]
}

export default function FirstState({mox}: ChildProps) {
    return (
        <div>
            <p>
                FirstState: {mox.map((m) => m.id + " " + m.text)}
            </p>
        </div>
    )
}
