const TabTitle = ({title, isActive, onActive, onDelete}) => {

    return (
        <div 
            className={"tab-title " + (isActive ? "active-tab" : "")}
        >
            <p
                onClick={onActive}
            >{title}</p>
            <button onClick={onDelete}>X</button>
        </div>
    );
}

export default TabTitle;