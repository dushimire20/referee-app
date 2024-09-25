type TooltipProps = {
    position: string;
    text: string;
};
const Tooltip = (
    {position, text}: TooltipProps
) => {
    return (
        <div className={`absolute ${position} bg-secondary-100 text-white text-sm rounded py-1 px-2 z-10`}>
            {text}
        </div>
    );
};

export default Tooltip;