import useLink from "hooks/useLink";
import useScript from "hooks/useScript";
import "./_app.css";

export default function MyApp({ Component, pageProps }: any) {
  const flavorcss = useScript("/static/flavorcss.js");
  const font = useScript("//at.alicdn.com/t/font_1872911_kd304mu78oj.js");

  return (
    <>
      <title>My page title</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, minimal-ui, viewport-fit=cover"
      />
      {/* <link rel="icon" href="/poet.ico" /> */}
      <style type="text/css">
        {`.icon {
            width: 1em; height: 1em;
            vertical-align: -0.15em;
            fill: currentColor;
            overflow: hidden;
          }`}
      </style>
      {flavorcss}

      <div className="full">
        <Component {...pageProps} />
      </div>
      {font}
    </>
  );
}
