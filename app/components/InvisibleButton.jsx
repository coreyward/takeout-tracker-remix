/**
 * The primary use case for this component is to wrap custom
 * interactive elements that have a click-handler that needs
 * to be triggerable by keyboard. Pass the `onClick` or
 * similar to the InvisibleButton instead of your component.
 */
const InvisibleButton = (props) => (
  <button
    css={{
      appearance: "none",
      padding: 0,
      margin: 0,
      background: "transparent",
      border: 0,
      fontSize: "inherit",
      fontWeight: "inherit",
      fontFamily: "inherit",
      color: "inherit",
      cursor: "pointer",
      textAlign: "inherit",
      lineHeight: "inherit",
    }}
    {...props}
  />
)

export default InvisibleButton
