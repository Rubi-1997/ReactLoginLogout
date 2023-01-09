import React from 'react'
import "./Tablelist.css"



const Tablelist = ({ data, handleTableList }) => {


  



    return (
        <div className='tablediv'>
            <table>
                <thead>
                    <td><h3>Breeds List</h3></td>
                </thead>

                <ol>

                    <tr className='tablerow' >
                        {
                            data.map((list, index) => {

                                return (


                                    <td className='show_detail'>

                                        <li className='item'>{list}</li>
                                        <button className='showbutton' onClick={()=>handleTableList(index)}>Show Data</button>
                                    </td>





                                )
                            })

                        }

                    </tr>
                </ol>

            </table>
        </div>
    )
}

export default Tablelist
