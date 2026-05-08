function StatusMessage({
  message,
  error,
}) {
  return (
    <>
      {message && (
        <p style={{ color: "green" }}>
          {message}
        </p>
      )}

      {error && (
        <p style={{ color: "red" }}>
          {error}
        </p>
      )}
    </>
  );
}

export default StatusMessage;
