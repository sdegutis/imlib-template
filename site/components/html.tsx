export const Html: JSX.Component<{ title: string }> = (attrs, children) => {
  return <>
    {`<!DOCTYPE html>`}
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{attrs.title}</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  </>;
};
