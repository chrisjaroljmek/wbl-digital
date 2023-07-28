export function Clients(props) {
  const { image, name, type, className } = props;

  return (
    <div className="relative">
      <img className="w-48 object-cover" src={image} alt={name} />
      <div className="h-[256px] w-48 border border-red top-[24px] left-[24px] absolute"></div>
      <p>{name}</p>
      <p>{type}</p>
    </div>
  );
}
