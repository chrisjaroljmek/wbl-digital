export function Skill(props) {
  const { title, description } = props;

  return (
    <div className="border-t border-dark-grey w-full">
      <div className="flex my-16 mx-8">
        <div className="mr-8">
          <p className="text-[4vw] leading-none whitespace-nowrap">{title}</p>
          <div className="h-[2px] mt-0.5 bg-dark-grey"></div>
        </div>
        <p className="text-[2.8vw] text-dark-grey leading-none">
          {description}
        </p>
      </div>
    </div>
  );
}
