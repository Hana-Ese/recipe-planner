type ButtonProps = {
    label: string;
    onClick: () => void;
    variant?: "primary" | "ghost";
  };
  
  export const Button = ({ label, onClick, variant = "primary" }: ButtonProps) => {
    const base = "px-4 py-2 rounded-md text-sm font-semibold";
    const styles =
      variant === "primary"
        ? `${base} bg-blue-600 text-white hover:bg-blue-700`
        : `${base} text-gray-700 bg-transparent hover:text-blue-600`;
  
    return (
      <button className={styles} onClick={onClick}>
        {label}
      </button>
    );
  };
  