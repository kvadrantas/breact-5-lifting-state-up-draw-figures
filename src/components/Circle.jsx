function Circle({text, color}) {
    return (

        <div className="circle" style={{
            background: color,
        }}>
            <p>{text + 1}</p>
        </div>

    )
};

export default Circle;