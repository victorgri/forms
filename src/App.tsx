import { InputLabel } from "./components/InputLabel"
import { InputText } from "./components/InputText"


function App() {


  return (
    <>
      <InputLabel labelFor="input" label='Input text' />
      <InputText id="input" />
    </>
  )
}

export default App
