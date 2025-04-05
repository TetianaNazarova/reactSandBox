export default function BillPrice({ value, onSetValue }) {
  function handleBillValue(event) {
    onSetValue(event.target.value);
  }

  return (
    <div className="bill">
      <p>How much was the bill?</p>
      <input
        type="number"
        placeholder="Bill value"
        value={value}
        onChange={handleBillValue}
      />
    </div>
  );
}
