function LoadingSpinner({ text = "Loading..." }) {
  return (
    <div className="loading-state" role="status">
      <div className="spinner"></div>
      <p>{text}</p>
    </div>
  );
}

export default LoadingSpinner;
