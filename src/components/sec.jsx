import './sec.css';

function Sec(props) {
    const a = props.s
    const b = "A"
    const c = -a*6
    return (
        <div className="Sec" >
            <div className="Sec-container" style={{transform: `rotate(${-c}deg)`}}>
                <p style={{transform: `rotate(${c}deg)`}}>{a}</p>
                <p style={{transform: `rotate(${c}deg)`}}>{a}</p>
                <p style={{transform: `rotate(${c}deg)`}}>{a}</p>
                <p style={{transform: `rotate(${c}deg)`}}>{a}</p>
                <p style={{transform: `rotate(${c}deg)`}}>{a}</p>
                <p style={{transform: `rotate(${c}deg)`}}>{a}</p>
                <p style={{transform: `rotate(${c}deg)`}}>{a}</p>
                <p className="b">{b}</p>
                <p className="b">{b}</p>
                <p className="b">{b}</p>
                <p className="b">{b}</p>
                <p className="b">{b}</p>
                <p className="b">{b}</p>
                <p className="b">{b}</p>
                <p className="b">{b}</p>
              </div>
        </div>
    )
}
export default Sec;