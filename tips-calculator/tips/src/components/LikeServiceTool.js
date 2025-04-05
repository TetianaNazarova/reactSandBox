import { data } from "../data";

export default function LikeServiceTool({
  likeValue,
  onSetLikeValue,
  children,
}) {
  function handleLikeChange(event) {
    onSetLikeValue(event.target.value);
  }

  return (
    <div className="tool">
      <p>{children}</p>
      <select value={likeValue} onChange={handleLikeChange}>
        {data.map((item) => (
          <option value={item.value} key={item.value}>
            {item.text}
          </option>
        ))}
      </select>
    </div>
  );
}
