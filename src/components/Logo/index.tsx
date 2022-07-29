import s from "./Logo.module.scss";

interface LogoProps {
    className: string;
}

const Logo = ({ className }: LogoProps) => {
    return (
        <div className={s.title}>
            <h2 className={className}>
                Pro<span>Sharaga</span>
            </h2>
        </div>
    );
};

export default Logo;
