
export const Button = ({ name, link, children }) => {
    const styleCornerLeft = `after:content-[''] after:hover:duration-1000 after:hover:absolute after:hover:h-4 after:hover:w-7 after:hover:top-0 after:hover:left-0 after:hover:border-[#362c248b] after:hover:border-l after:hover:border-t`
    const styleCornerright = `before:content-[''] before:hover:duration-1000 before:hover:absolute before:hover:h-4 before:hover:w-7 before:hover:bottom-0 before:hover:right-0 before:hover:border-[#362c248b] before:hover:border-r before:hover:border-b`

    return (
        <a href={link} className={`py-2 px-5 relative ${styleCornerLeft} ${styleCornerright}`} >
            {children}
            {name ? name : ''}
        </a>
    )
}
