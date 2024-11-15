const Heading = ({ text, className }) => {
    return (
        <h1 className={` text-white font-extrabold lg:text-custom4xl text-custom3xl leading-8 sm:text-3xl lg:leading-custom-6xl ${className}`}>{text}</h1>
    )
}
export default Heading
// const Heading = ({
//     reduceBelow = 1024,
//     maxFontSize = 42,
//     minFontSize = 28,
//     className = '',
//     children,
//     ...props
// }) => {
//     const sizeReducer = (100 / reduceBelow) * maxFontSize;

//     return (
//         <h3 {...props} style={{ fontSize: `clamp(${minFontSize}px, ${sizeReducer}vw, ${maxFontSize}px)` }} className={`${className} font-extrabold leading-[139.52%] text-white -tracking-xl`}>
//             {children}
//         </h3>
//     );
// };

// export default Heading;