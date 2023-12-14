import { useState, useCallback, useEffect, useRef} from 'react'

function App() {
  const [length , setlength] = useState(8)
  const [numberAllowed , setNumberAllowed] = useState(false)
  const [characterAllowed , setCharacterAllowed] = useState(false)
  const [Password,setPassword] = useState("")

  //useRef hook
  const passRef = useRef(null)

  let passwordGenerator = useCallback(() => {
    let pass =""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+="0123456789"
    if(characterAllowed) str+= "!# $%&()*+,-./:;<=>?@[]^_{|}~"

    for(let i = 1; i <= length;i++){
      let char = Math.floor(Math.random()*str.length+1)
      pass += str[char]
    }

    setPassword(pass)

  } ,[length,numberAllowed,characterAllowed,setPassword]) 

  const copyPassToClick = useCallback(() => {
    passRef.current?.select()
    window.navigator.clipboard.writeText(Password)
  },[Password])



  useEffect(() => {
    passwordGenerator()
  },[length,numberAllowed,characterAllowed,setPassword])
  return (
   <>
   <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-8 text-orange-500 bg-gray-700 mt-20 border-2px'>
    <h1 className='text-white text-center text-lg align-middle mb-8'>Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input type="text" 
        value={Password}
        className="outline-none w-full py-1 px-3"
        placeholder='Password'
        readOnly
        ref={passRef}
        />
        <button 
        onClick={copyPassToClick}
        className='bg-orange-400 py-2 px-3 text-black hover:bg-orange-500'>Copy</button>
      </div>
      <div>
        <div>
          <input 
          type="range"
          min={6}
          max={100}
          value={length}
          className = 'cursor-pointer' 
          onChange={ (e) => {setlength(e.target.value)}}
          />
          <label className='pl-3 text-orange-200'>Length : {length}</label>
        </div>

        <div className='flex items-center gap-x-1'>
            <input type="checkbox" 
            defaultChecked = {numberAllowed}
            id = "numberInput"
            onChange={ () => {setNumberAllowed((prev) => !prev)}}
            />
            <label className = 'pl-2 text-orange-200' htmlFor="numberInput">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
            <input type="checkbox" 
            defaultChecked = {characterAllowed}
            id = "characterInput"
            onChange={ () => {setCharacterAllowed((prev) => !prev)}}
            />
            <label className = 'pl-2 text-orange-200' htmlFor="characterInput">Character</label>
        </div>
      </div>
   </div>
   </>
  )
}

export default App