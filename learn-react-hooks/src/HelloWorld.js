const Label = ({ children }) => {
  return <span style={{ color: 'lightgreen'}}> {children} </span>
}

const HelloWorld = ({style}) => {
  return (
    <>
      <h1>Hello <span style={style}>World!!!</span></h1>
      <Label>custom label name</Label>
    </>
  )
}
export default HelloWorld