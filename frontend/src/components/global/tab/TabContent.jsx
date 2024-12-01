const TabContent = ({isActive, children}) => {
    return (
        <div className={"tab-content " + (isActive ? "" : "hidden")} >
            {children}
        </div>
    );
}

export default TabContent;