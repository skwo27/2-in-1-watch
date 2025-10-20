import './min.css';

function Min(props) {
    const a = props.m
    const b = "A"
    const c = -a*6
    return (
        <div className="Min">
            <div className="Min-container" style={{transform: `rotate(${-c}deg)`}}>
                <p className="a" style={{transform: `rotate(${c}deg)`}}>{a}</p>
                <p className="a" style={{transform: `rotate(${c}deg)`}}>{a}</p>
                <p className="a" style={{transform: `rotate(${c}deg)`}}>{a}</p>
                <p className="a" style={{transform: `rotate(${c}deg)`}}>{a}</p>
                <p className="a" style={{transform: `rotate(${c}deg)`}}>{a}</p>
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
export default Min;