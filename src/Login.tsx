function MyPlaceholder({ title }: { title: string }) {
    return (
        <label className=" text-2xl font-readex-pro font-optical-sizing-auto font-normal font-<weight>">{title}</label>
    );
}
function MyInput({ title }: { title: string }) {
    return (
        <input className="border border-gray-300 rounded-md p-2 mb-2 w-full bg-indigo-100" placeholder={title}/>
    );
}

function MyButton({ title }: { title: string }) {
    return (
        <>
            <button type='button' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">{title}</button>
        </>
    );
}

function UsernameAndInputText() {
    return (
        <div className="flex flex-col space-y-4 items-center">
            <MyPlaceholder title="Username" />
            <MyInput title="Username" />
            <MyPlaceholder title="Password" />
            <MyInput title="Password" />
            <MyButton title="Submit" />
        </div>
    );
}

export default UsernameAndInputText;