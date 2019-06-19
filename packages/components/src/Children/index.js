// Allows passing props to children via a function rather than cloneElement.
// Some libraries use cloneElement to pass through additional props which does
// not work with children functions.
const Children = ({children, ...props}) => children(props);

export default Children;
