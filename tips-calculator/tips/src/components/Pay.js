export default function Pay({ bill, tips }) {
  return <div>{`You pay $${bill + tips} ($${bill} + $${tips} tip)`}</div>;
}
