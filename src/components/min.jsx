import './min.css';

function Min(props) {
    const a = props.m
    const b = "A"
    return (
        <div className="Min">
            <div className="Min-container" style={{transform: `rotate(${a*6}deg)`}}>
                <p className="a">{a}</p>
                <p className="a">{a}</p>
                <p className="a">{a}</p>
                <p className="a">{a}</p>
                <p className="a">{a}</p>
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