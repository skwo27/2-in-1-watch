import './pointer.css';

function Pointer(props: { e: number[]; }) {
    const e = props.e
    
    const a: number = e[0]
    const b: number = e[1]
    const d: number = e[2]
    const l: number = e[3]
    
    const c: number = a*d //d = 30 or 6
    const text: string[] = Array(l).fill(a)
    const dummyText = Array(l+1).fill("A")
    
    return (
        <div className="time" style={{zIndex:`${b}`}}>
            <div className="time-container" style={{transform: `rotate(${c}deg)`}}>
                {text.map((s,i) => (
                    <p key={`a-${i}`} style={{transform: `rotate(${-c}deg)`}} className="text">{s}</p>
                ))}
                {dummyText.map((s,i) => (
                    <p key={`b-${i}`} style={{transform: `rotate(${-c}deg)`}} className="dummyText">{s}</p>
                ))}
            </div>
        </div>
    )
}
export default Pointer;