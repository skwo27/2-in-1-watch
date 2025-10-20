import './hour.css';

function Hour(props) {
    const a = props.h%12
    const b = "A"
    const c = -a*30
    return (
        <div className="Hour">
            <div className="Hour-container" style={{transform: `rotate(${-c}deg)`}}>
                <p className="a" style={{transform: `rotate(${c}deg)`}}>{a}</p>
                <p className="a" style={{transform: `rotate(${c}deg)`}}>{a}</p>
                <p className="a" style={{transform: `rotate(${c}deg)`}}>{a}</p>
                <p className="b">{b}</p>
                <p className="b">{b}</p>
                <p className="b">{b}</p>
                <p className="b">{b}</p>
            </div>
        </div>
    )
}
export default Hour;