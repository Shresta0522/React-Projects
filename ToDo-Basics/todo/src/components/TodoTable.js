import React from 'react'

function TodoTable(props) {
    return (
        <div>
            <table className='table w-full table-fixed border-2 border-green-800 rounded-md'>
                <thead>
                    <tr className='table-row border-b-2 border-green-800 p-14 '>
                        <th className='table-cell  text-xl italic text-center border-green-800 border-r-2' >No.</th>
                        <th className=' table-cell text-xl italic text-center'>Task</th>
                    </tr>
                </thead>
                <tbody>
                    {props.todos.map((todo, index) =>
                       
                            <tr className='table-row w-full border-b-2 border-green-800 p-8' key={index}>
                                <th className='table-cell text-center border-green-800 border-r-2'>{index + 1}</th>
                                <th className='table-cell text-center'>{todo}</th>
                            </tr>

                       )}
                </tbody>
            </table>
        </div>
    )
}

export default TodoTable
