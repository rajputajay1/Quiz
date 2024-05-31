import React, { useState } from 'react';
import "./Congrets.css";

const Congrets = ({ onClose }) => {
    const [showSharePopup, setShowSharePopup] = useState(false);

    const handleClose = () => {
        onClose();
    };

    const handleShare = () => {
        setShowSharePopup(true);
        setTimeout(handleSharePopupClose, 2000); 
    };

    const handleSharePopupClose = () => {
        setShowSharePopup(false);
    };

    return (
        <div className="popup_creat">
            <div className="pop_cong">
                <div className='cancle_share_btn_div'>
                    <img src="./cancle.svg" alt="" height={20} onClick={handleClose} />
                </div>
                <div className='cong_text_share'>
                    <p className='cong'>Congrats your Quiz is<br />Published!</p>
                    <input
                        type="text"
                        placeholder='your link is here'
                        className='congrets_input'
                        disabled
                    />
                    <div className='share_btn_cong_div'>
                        <button className='share_btn_cong' onClick={handleShare}>Share</button>
                    </div>
                </div>
            </div>

            {showSharePopup && (
                <div className="popup">
                    <div className="popup_share">
                        <div className='share_content'>
                            <span><img src="./sharetik.svg" alt="Share Icon" /></span>
                            <p className='popup_heading_share'>
                                Link copied to Clipboard
                                <span className="underline"></span>
                            </p>
                            <span className='cancel-btn' ><img src="./cancle.svg" alt="Cancel" /></span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Congrets;


