import React,{useState} from 'react'

const SubCat = () => {
    const [val, setval] = useState([]);
    const handleAdd = (e) => {
        e.preventDefault();
        const abc = [...val, []]
        setval(abc)
    }
    const handleDelete = (e, i) => {
        e.preventDefault();
        const deleteVal = [...val]
        deleteVal.splice(i, 1)
        setval(deleteVal)
    }
    const handleChange = (onChangevalue, i) => {
        const inputData = [...val]
        inputData[i] = onChangevalue.target.value
        setval(inputData);
    }
    console.log(val, "Data");

    return (
        <>
            <div className="m-5">
                <section className="max-w-4xl p-6 mx-auto rounded-md shadow hover:shadow-lg">
                    <h1 className="text-xl font-bold capitalize dark:">Account settings</h1>
                    <form>

                        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                            <div className="col-span-2">
                                {val.map((data, i) => {
                                    return (
                                        <div >
                                            <label htmlFor="username">Username</label>
                                            <input value={data} onChange={e => handleChange(e, i)} id="username" type="text" className="block w-full px-4 py-2 mt-2 border rounded-md   focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                                            <div className="flex justify-end mt-6">
                                                <button onClick={(e) => handleDelete(e, i)} className="px-3 py-2 leading-5 text-white transition-colors duration-200 transform bg-red-500 rounded-md hover:bg-red-700 focus:outline-none">Remove field</button>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>

                        </div>
                        <div className="flex justify-end mt-6">
                            <button onClick={(e) => handleAdd(e)} className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-green-500 rounded-md hover:bg-green-700 focus:outline-none">Add field</button>
                        </div>
                    </form>
                </section>

            </div>




        </>
    )
}

export default SubCat