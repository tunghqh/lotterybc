import veri from '../assets/img/veri.png'
import {FaTimes,FaGithub,FaUserCheck,FaCog} from 'react-icons/fa'
import './Modal.css'
function Modal({closeModal}){

    return (
        <>
             <div className="modal modal-active">
                <div className="modal__overlay">
                    <div className="modal-body">
                       
                        <div class="auth-form">
                            <div class="auth-form__container">
                                 <button className="close-modal" onClick={()=>closeModal(false)}><FaTimes /></button>
                                <div class="auth-form__header">
                                    <span class="auth-form__heading">Ethex Smart Contracts</span>
                                    <img src={veri} className="img-veri" />
                                </div>
                                <div class="auth-form__form">
                                <div class="auth-form__group">
                                        <span className='wallet-text'>Wallet</span>                    
                                    </div>
                                    <div class="auth-form__group">
                                        <FaCog />
                                        <span className='id-wallet'>0x8F5fa4F27Be4AC3B3971FE862794Fa0572f30282</span>                              
                                    </div>

                                    <div class="auth-form__group">
                                        <span className="auth-rules">
                                            During the event, choose a random number from 1 to 9, please fill in the blanks as prescribed,
                                            do not choose the same number to buy tickets
                                            After purchasing your ticket, wait for your next turn to claim your prize if you win .<br/>
                                            GOOD LUCK !
                                        </span>
                                    </div>
                                    <div className="social-link">
                                        
                                            <FaGithub className='icon-modal' />
                                            <a href='#' className="showcode">Source code</a>                          
                                            <FaUserCheck className='icon-modal icon-modal-veri'/>
                                            <a href='#' className="verified">Verified on Etherscan</a>          
                                    </div>
                                    <div className="total-money">  
                                    <span className="Total-wallet">Total Money In Wallet:
                                    </span> 
                                    <span className='money'>4.66 ETH</span> 
                                    </div>
                                </div>

                                

                                
                            </div>

                        </div> 
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Modal