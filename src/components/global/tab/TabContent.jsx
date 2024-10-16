const TabContent = ({isActive, children}) => {
    console.log(isActive, children);
    return (
        <div className={"tab-content " + (isActive ? "" : "hidden")} >
            {children}
        </div>
    );
}

export default TabContent;