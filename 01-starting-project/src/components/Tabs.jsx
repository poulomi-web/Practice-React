export default function Tabs({ children, button, buttonContainer }) {
  const ButtonContainer = buttonContainer || "ul";
  return (
    <>
      <ButtonContainer>{button}</ButtonContainer>
      {children}
    </>
  );
}
