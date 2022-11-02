export default function PageFadeWrapper({ children }) {
  return (
    <div className="animate__animated animate__delay-1s animate__fadeIn ">
      {children}
    </div>
  );
}
