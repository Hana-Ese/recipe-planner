type ButtonProps = {
    label: string;
    onClick: () => void;
    variant?: "solid" | "outline";
};

const Button = ({ label, onClick, variant = "solid" }: ButtonProps) => {
    const base = "px-4 py-2 rounded-md text-sm font-semibold";
    const styles =
        variant === "solid"
            ? `${base} bg-[var(--color-secondary)] text-white hover:bg-[var(--color-hover-secondary)]`
            : `${base} text-[var(--color-text-primary)] bg-transparent hover:text-[var(--color-secondary)]`;

    return (
        <button className={styles} onClick={onClick}>
            {label}
        </button>
    );
};
export default Button;