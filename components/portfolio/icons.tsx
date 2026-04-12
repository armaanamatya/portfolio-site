import type { ComponentProps } from "react";

type IconProps = ComponentProps<"svg">;

export function ArrowUpRightIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden {...props}>
      <path d="M6.25 13.75 13.75 6.25" />
      <path d="M7.5 6.25h6.25v6.25" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden {...props}>
      <rect x="2.5" y="4.25" width="15" height="11.5" rx="1.75" />
      <path d="m3.75 6 6.25 5 6.25-5" />
    </svg>
  );
}

export function FileTextIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden {...props}>
      <path d="M6 2.5h5.5L15 6v11.5H6a2 2 0 0 1-2-2V4.5a2 2 0 0 1 2-2Z" />
      <path d="M11.5 2.5V6H15" />
      <path d="M7.5 9h5" />
      <path d="M7.5 12h5" />
    </svg>
  );
}

export function GithubIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden {...props}>
      <path d="M10 1.875a8.125 8.125 0 0 0-2.568 15.833c.406.075.556-.169.556-.381 0-.194-.013-.837-.013-1.519-2.175.4-2.738-.531-2.913-1.019-.1-.237-.519-1.019-.887-1.225-.3-.162-.731-.562-.012-.575.675-.012 1.156.619 1.319.875.769 1.294 1.994.931 2.488.706.075-.556.3-.931.544-1.144-1.906-.219-3.9-.956-3.9-4.231 0-.931.331-1.7.875-2.3-.087-.219-.381-1.094.081-2.275 0 0 .713-.225 2.337.875A7.95 7.95 0 0 1 10 5.956c.706 0 1.419.094 2.081.281 1.625-1.106 2.337-.875 2.337-.875.463 1.181.169 2.056.081 2.275.544.6.875 1.362.875 2.3 0 3.281-2 4.006-3.906 4.225.306.262.575.769.575 1.556 0 1.125-.013 2.031-.013 2.312 0 .212.15.463.556.381A8.128 8.128 0 0 0 10 1.875Z" />
    </svg>
  );
}

export function LinkedInIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden {...props}>
      <path d="M4.344 3.125a1.22 1.22 0 1 1 0 2.438 1.22 1.22 0 0 1 0-2.438ZM3.25 6.875h2.188v9.375H3.25V6.875Zm5 0h2.1v1.281h.03c.293-.556 1.012-1.144 2.082-1.144 2.225 0 2.638 1.463 2.638 3.363v5.875h-2.188v-5.206c0-1.244-.024-2.844-1.731-2.844-1.731 0-1.994 1.35-1.994 2.756v5.294H8.25V6.875Z" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden {...props}>
      <path d="m5 5 10 10" />
      <path d="M15 5 5 15" />
    </svg>
  );
}
