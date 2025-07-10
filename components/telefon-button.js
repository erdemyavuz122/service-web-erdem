export default function TelefonButton() {
  return (
    <a
      href="tel:05555555555"
      className="btn btn-success shadow-lg"
      style={{
        position: "fixed",
        bottom: 24,
        right: 20,
        zIndex: 1031,
        borderRadius: "50%",
        width: 62,
        height: 62,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 28,
      }}
      aria-label="Bizi arayın"
    >
      <i className="bi bi-telephone-fill"></i>
    </a>
  );
}
