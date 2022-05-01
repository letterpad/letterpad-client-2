import Script from 'next/script';

const UmamiScript = ({ id }) => {
  return (
    <>
      <Script
        async
        defer
        data-website-id={id}
        src="https://umami.example.com/umami.js" // Replace with your umami instance
      />
    </>
  );
};

export default UmamiScript;
