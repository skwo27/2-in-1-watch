import './hour.css';

function Hour(props) {
    const a = props.h%12
    const b = "A"
    return (
        <div className="Hour">
            <div className="Hour-container" style={{transform: `rotate(${a*30}deg)`}}>
                <p className="a">{a}</p>
                <p className="a">{a}</p>
                <p className="a">{a}</p>
                <p className="a">{a}</p>
                <p className="b">{b}</p>
                <p className="b">{b}</p>
                <p className="b">{b}</p>

            </div>
        </div>
    )
}
export default Hour;