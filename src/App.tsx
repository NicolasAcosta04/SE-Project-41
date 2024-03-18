import UsernameAndInputText from "./Login";


export default function App() {
  return (
    <>
    <div className="bg-red-500">
      <div className=" flex justify-center text-3xl font-bold underline text-cyan-600">
      FDM Timesheet
      <h1>Welcome to my app</h1>
      </div>
      <br/>
      <div className="w-[1440px] h-[1024px] relative bg-white">
    <div className="w-[1200px] h-[800px] left-[120px] top-[112px] absolute bg-violet-400 shadow shadow-inner">
        <div className="w-[534px] h-[467px] left-[754px] top-[-67px] absolute bg-violet-400 rounded-full"></div>
        <div className="w-[534px] h-[467px] left-[754px] top-[-67px] absolute bg-pink-500 rounded-full blur-[150px]"></div>
        <img className="w-[1200px] h-[800px] left-0 top-0 absolute" />
        <div className="w-[241.72px] h-[241.72px] left-[735.84px] top-[147px] absolute origin-top-left rotate-[28.10deg] mix-blend-color-dodge bg-indigo-500 blur-[100px]"></div>
        <div className="w-[241.72px] h-[241.72px] left-[59px] top-[575.42px] absolute origin-top-left rotate-[-25.59deg] mix-blend-color-dodge bg-indigo-500 blur-[137px]"></div>
    </div>
    <div className="w-[502px] h-[351px] left-[453px] top-[-109px] absolute bg-blue-400 bg-opacity-80 rounded-full"></div>
    <div className="w-[600px] h-[800px] left-[720px] top-[112px] absolute bg-white bg-opacity-70"></div>
    <div className="w-[381px] h-[90px] left-[829px] top-[405px] absolute bg-indigo-100"></div>
    <div className="w-[381px] h-[90px] left-[829px] top-[583px] absolute bg-indigo-100"></div>
    <div className="left-[973px] top-[758px] absolute text-white text-2xl font-normal font-readex-pro">Confirm</div>
    <div className="left-[856px] top-[355px] absolute text-black text-2xl font-normal font-readex-pro">Username</div>
    <div className="left-[860px] top-[537px] absolute text-black text-2xl font-normal font-readex-pro">Password</div>
    <div className="left-[889px] top-[182px] absolute text-black text-8xl font-normal font-readex-pro">Login</div>
    <div className="w-[579px] h-[293px] left-[179px] top-[259px] absolute text-white text-8xl font-normal font-['Readex Pro']">Welcome Back!</div>
</div>
      <div className="flex justify-center text-black text-3xl font-normal font-mono p-[40px]">Login
      </div>
      <div className='flex justify-center items-center'>
      <div className='flex justify-center items-center bg-white bg-opacity-70 rounded-2xl p-[15px] w-[250px] h-[300px]'>
      <UsernameAndInputText/>
      </div>
      </div>
        
      
    </div>
    </>
  );
}
