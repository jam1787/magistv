export const AccordionAnimation = ({accordionOpen}) => {
return (
    <svg
        className="shrink-0 ml-2 "
        width="16"
        height="16"
        xmlns="http://www.w3.org/2000/svg"
        fill="white"
    >
        <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-300 ease-out ${
                accordionOpen && "!rotate-180"
            }`}
        />
        <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-300 ease-out ${
                accordionOpen && "!rotate-180"
            }`}
        />
    </svg>
)
}