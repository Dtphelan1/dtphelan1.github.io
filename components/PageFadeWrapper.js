export default function PageFadeWrapper({ children, className }) {
  return (
    <div
      className={`h-full w-full overflow-x-hidden overflow-y-auto animate__animated animate__delay-1s animate__fadeIn ${className}`}
    >
      {children}
    </div>
  );
}
