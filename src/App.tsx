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
