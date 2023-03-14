import React from "react";

interface ErrorProps {
  error: any;
}

const ErrorComponent: React.FC<ErrorProps> = ({ error }) => {
  const reloadPage = () => {
    window.location.reload();
  };
  return (
    <div
      style={{ width: "100%", textAlign: "center", backgroundColor: "#fff" }}
    >
      <span>An error occurred:</span>
      <span>{error}</span>
      <button onClick={reloadPage}>reload</button>
    </div>
  );
};

export default ErrorComponent;
