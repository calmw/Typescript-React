function Square({value, onClick, index}) {
    return (
        <div className="square" onClick={() => {
            onClick(index)
        }}>{value}</div>
    )
}

export default Square