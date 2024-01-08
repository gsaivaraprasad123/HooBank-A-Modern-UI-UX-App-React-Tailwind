const Button = ({ styles }) => {
    return (
        <button type="button" className={`py-4 px-6 bg-blue-gradient font-medium font-poppins text-[18px] bg-primary outline-none
        ${styles} rounded-[10px]`}>
            Get Started
        </button>
    )
}

export default Button