import './sec.css';

function Sec(props) {
    const a = props.s
    const b = "A"
    return (
        <div className="Sec" >
            <div className="Sec-container" style={{transform: `rotate(${a*6}deg)`}}>
                <p>{a}</p>
                <p>{a}</p>
                <p>{a}</p>
                <p>{a}</p>
                <p>{a}</p>
                <p>{a}</p>
                <p>{a}</p>
                <p>{a}</p>
                <p>{a}</p>
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