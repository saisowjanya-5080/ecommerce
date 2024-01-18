import React, { useEffect, useState } from 'react'
import ShimmerBook from '../utils/ShimmerBook'

function Book() {
    const [book, setBook] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    useEffect(() => {
        if (searchTerm !== "") {
            getDataBook()
        }
    }, [searchTerm])
    async function getDataBook() {
        const data = await fetch(`https://openlibrary.org/search.json?title=${searchTerm}`)
        const json = await data.json()

        setBook(json.docs)
    }
    return (
        <div>
            <div className='flex justify-center items-center gap-3 mt-16'>
                <h1>Search</h1>
                <input placeholder='Book' onChange={(e) => { setSearchTerm(e.target.value) }} type="text" className='placeholder:text-black w-[400px] h-[40px] text-center rounded-xl border-2 border-green-800' />
                <h1>Here</h1>
            </div>

            <div className='flex flex-wrap justify-center gap-16 mt-14'>
                {console.log(book.slice(0, 17))}
                {
                    book.length === 0 ? <ShimmerBook /> : book.slice(0, 17).map((list) => (
                        <div className='border  border-red-900 px-3 py-3 rounded-xl shadow-xl'>
                            <h1 className='w-36 h-20'>{list.title}</h1>
                            <div
                                className="h-[260px] w-[200px] flex justify-center 
                                 rounded-md items-center  ">
                                <img className='w-44 h-60 hover:w-48 hover:h-64  hover:duration-500' src={`https://covers.openlibrary.org/b/id/${list.cover_i}-M.jpg`} alt="" />
                            </div>

                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default Book