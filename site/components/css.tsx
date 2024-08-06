export const Css: JSX.Component<{ src: string }> = (attrs) => {
  return <link href={attrs.src} rel='stylesheet' />;
};
