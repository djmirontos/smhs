import Image from "next/image";

type LogoProps = {
  className?: string;
  priority?: boolean;
};

export default function Logo({ className = "h-10 w-10", priority = false }: LogoProps) {
  return (
    <Image
      src="/images/school-logo.png"
      alt="St. Michael's High School Official Seal"
      width={500}
      height={500}
      priority={priority}
      className={`shrink-0 object-contain ${className}`}
    />
  );
}
