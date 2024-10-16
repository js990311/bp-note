const TabTitle = ({title, isActive, onClick, onDelete}) => {

    return (
        <div 
            className={"tab-header " + (isActive ? "active-tab" : "")}
            onClick={onClick}
        >
            <p>{title}</p>
            <button onClick={onDelete}>X</button>
        </div>
    );
}

export default TabTitle;