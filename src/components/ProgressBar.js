import NextNprogress from "nextjs-progressbar";

const ProgressBar = () => (
  <NextNprogress
    color="#29BF9F"
    startPosition={0.3}
    stopDelayMs={200}
    height={3}
    options={{ showSpinner: false }}
  />
);

export default ProgressBar;
