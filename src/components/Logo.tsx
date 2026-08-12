type LogoProps = {
  size?: number;
  className?: string;
};

/**
 * Temporary placeholder mark (initials "SM" in a maroon/gold badge).
 * Swap this component's contents for an <Image src="/images/school-logo.png" .../>
 * once an official high-resolution school logo is available.
 */
export default function Logo({ size = 40, className = "" }: LogoProps) {
  return (
    <span
      className={`relative inline-flex shrink-0 items-center justify-center rounded-full bg-maroon ring-1 ring-gold/50 ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <span
        className="font-serif font-bold leading-none text-cream"
        style={{ fontSize: size * 0.38 }}
      >
        SM
      </span>
      <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-gold/30" />
    </span>
  );
}
