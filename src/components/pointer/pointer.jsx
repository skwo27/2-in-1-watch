import './pointer.css';

function Pointer(props) {
    const e = props.e
    
    const a = e[0]
    const b = e[1]
    const d = e[2]
    const l = e[3]
    
    const c = a*d //d = 30 or 6
    const text = Array(l).fill(a)
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