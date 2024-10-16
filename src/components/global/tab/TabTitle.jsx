const TabTitle = ({title, isActive, onClick}) => {

    return (
        <div 
            className={"tab-header " + (isActive ? "active-tab" : "")}
            onClick={onClick}
        >
            <p>{title}</p>
        </div>
    );
}

export default TabTitle;