import React from 'react'
import "./Congrets.css"
const Congrets = () => {
    return (
        <div>
            <div className="popup_creat">
                <div className=" pop_cong">
                    <p className='cong'>Congrats your Quiz is
                        <br />
                        Published!</p>
                    <div className='link_copy_cong'>

                    
                    <input
                        type="text"
                        placeholder='your link is here'
                        className='congrets_input'
                    />
                    </div>
                    <div className='share_btn_cong_div'>

                  
                        <button className='share_btn_cong'>Share</button>
                        </div>
                </div>
            </div>


        </div>
    )
}

export default Congrets