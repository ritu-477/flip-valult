const CommonButton = ({ text, className }) => {
    return (
        <button className={`text-base leading-custom-lg text-white bg-gradient-to-r from-[#6494EE] to-[#085BF7] rounded-[10px] ${className}`}>{text}</button>)
}
export default CommonButton;