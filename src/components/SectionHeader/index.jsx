import classnames from "classnames";

export function SectionHeader(props) {
  const { className } = props;
  return (
    <div className={classnames("underline", className)}>SectionHeader</div>
  );
}
