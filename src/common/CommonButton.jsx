const CommonButton = ({ text, className }) => {
    return (
        <button className={`text-base leading-custom-lg pp-telegraf-normal text-white hover:bg-gradient-to-r hover:from-[#085BF7] hover:to-[#6494EE] bg-gradient-to-r from-[#6494EE] to-[#085BF7] duration-300 ease-in-out rounded-[10px] ${className}`}>{text}</button>)
}
export default CommonButton;