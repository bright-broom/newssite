import Link from "next/link";

type ButtonProps = {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
  customClass?: string;
};

const Button = ({ href, label, variant = "primary", customClass = "" }: ButtonProps) => {
  const styles = {
    primary: "bg-gradient-to-r from-[#CB6CE6] to-[#2EECC6] text-white px-8 py-4 rounded-lg shadow-lg",
    secondary: "bg-gradient-to-r from-[#2E3192]/20 to-[#2EECC6]/20 backdrop-blur-md border border-[#2EECC6]/30 text-white px-8 py-4 rounded-lg shadow-lg",
  };

  return (
    <Link href={href}>
      <a className={`${styles[variant]} font-bold text-lg hover:scale-105 transition-transform duration-300 ${customClass}`}>
        {label}
      </a>
    </Link>
  );
};

export default Button; 