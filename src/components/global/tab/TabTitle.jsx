const TabTitle = ({title, isActive, onActive, onDelete}) => {

    return (
        <div 
            className={"tab-header " + (isActive ? "active-tab" : "")}
            onClick={onActive}
        >
            <p>{title}</p>
            <button onClick={onDelete}>X</button>
        </div>
    );
}

export default TabTitle;