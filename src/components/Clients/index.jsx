export function Clients(props) {
  const { image, name, type, className } = props;

  return <img src={image} alt={name} />;
}
