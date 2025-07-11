export default function TelefonButton() {
  return (
    <a
      href="tel:05555555555"
      className="telefon-buton btn btn-success shadow-lg d-flex align-items-center justify-content-center"
      aria-label="Hemen Ara: 0555 555 55 55"
      style={{
        position: "fixed",
        left: "50%",
        bottom: "24px",
        transform: "translateX(-50%)",
        zIndex: 1031,
        borderRadius: "32px",
        minWidth: "220px",
        height: "54px",
        padding: "0 32px",
        fontSize: "22px",
        fontWeight: 700,
        boxShadow: "0 4px 16px #3335",
        letterSpacing: "1px",
      }}
    >
      <i className="bi bi-telephone-fill me-3" style={{ fontSize: 30 }}></i>
      <span>
        Hemen Ara: <span style={{ letterSpacing: "2px" }}>0555 555 55 55</span>
      </span>
    </a>
  );
}
