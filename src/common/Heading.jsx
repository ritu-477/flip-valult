const Heading = ({ text, className }) => {
    return (
        <h1 className={` text-white font-extrabold lg:text-custom4xl text-custom3xl leading-8 sm:text-3xl lg:leading-custom-6xl ${className}`}>{text}</h1>
    )
}
export default Heading
