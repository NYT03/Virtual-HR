import { useState } from "react";
function Home() {
  const [email,setemail]=useState('');
  const [password,setpassword]=useState('');
  const [meetingCode,setcode]=useState('');
  function printdata(e){
    e.preventDefault()
    console.log(email,password,meetingCode)
  }
  return (
    <form onSubmit={(e)=>printdata(e)}>
      <div className="flex flex-col bg-[url('src/assets/Images/christina-wocintechchat-com-LQ1t-8Ms5PY-unsplash.jpg')] bg-cover min-h-screen pt-11">
        <div className="flex relative flex-col self-center px-12 py-7 mt-3.5 mb-5 max-w-full bg-yellow-50 bg-opacity-70 rounded-[1.5vw] w-[30vw]">
          <div className="self-center text-3xl text-black">Join Interview</div>
          <div className="flex flex-row gap-3.5 items-center overflow-hidden">
              <img
                loading="lazy"
                src="src\assets\svgs\Email.svg"
                className="shrink-0 aspect-[1.25] fill-black fill-opacity-70 w-[2vw] mt-20"
              />
            <input className="flex overflow-hidden justify-left items-start px-4 py-6 mt-20 w-full whitespace-nowrap rounded-3xl shadow-sm bg-yellow-50 bg-opacity-70 max-md:pr-5 max-md:mt-10 gap-3 text-xl  text-black" placeholder="Email" value={email} onChange={(e)=>{
              setemail(e.target.value)}} />
          </div>
          <div className="flex flex-row gap-3.5 items-center overflow-hidden">
              <img
                loading="lazy"
                src="src\assets\svgs\Password.svg"
                className="shrink-0 aspect-[0.78] fill-black fill-opacity-80 w-[2vw] mt-20"
              />
              <input className="flex overflow-hidden justify-left items-start px-4 py-6 mt-20 w-full whitespace-nowrap rounded-3xl shadow-sm bg-yellow-50 bg-opacity-70 max-md:pr-5 max-md:mt-10 gap-3"placeholder="Password" value={password} onChange={(e)=>{
              setpassword(e.target.value)}}/>
            </div>
          <div className="flex flex-row gap-3.5 items-center overflow-hidden">
              <img
                loading="lazy"
                src="src\assets\svgs\Code.svg"
                className="shrink-0 aspect-[1.5vw] fill-black fill-opacity-80 mt-20"
              />
              <input className="flex overflow-hidden justify-left items-start px-4 py-6 mt-20 w-full whitespace-nowrap rounded-3xl shadow-sm bg-yellow-50 bg-opacity-70 max-md:pr-5 max-md:mt-10 gap-3" placeholder="Meeting code" value={meetingCode} onChange={(e)=>{
              setcode(e.target.value)}}/>
          </div>
            <button type="submit" className="justify-center self-center px-9 py-2.5 mt-20 text-3xl text-indigo-900 whitespace-nowrap rounded-3xl shadow-sm bg-stone-300 max-md:px-5 max-md:mt-10 hover:bg-stone-400 hover:text-indigo-50">Join</button>
        </div>
      </div>
      </form>
  );
}

export default Home;
