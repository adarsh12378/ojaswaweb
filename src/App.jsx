import React ,{Suspense, lazy}from "react"
import { BrowserRouter,Route,Routes } from "react-router-dom"

const Home=lazy(()=>import("./pages/Home")) 
const About=lazy(()=>import("./pages/About")) 
const Event=lazy(()=>import("./pages/Event"))
const Team=lazy(()=>import("./pages/Team")) 
const Sponsor=lazy(()=>import("./pages/Sponsor")) 
const Contact=lazy(()=>import("./pages/Contact")) 
const Header=lazy(()=>import("./component/Header")) 
const Footer=lazy(()=>import("./component/Footer"))
const Collabration=lazy(()=>import("./sponser/collabration"))
const Upcomingevent=lazy(()=>import("./upcomingevent/Upcomingevent"))
const  App=()=>{
  return (
    <>
    <BrowserRouter>
    <Suspense>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/event" element={<Event/>}/>
      <Route path="/team" element={<Team/>}/>
      <Route path="/sponsor" element={<Sponsor/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/spire" element={<Upcomingevent/>}/>
      <Route path="/sponsorship-form" element={<Collabration/>}/>
    </Routes>
    <Footer/>
    </Suspense>
    </BrowserRouter>
    </>
  )
}

export default App
