import React from "react";
import githubLogo from '../assets/githubLogo.svg';
import linkedinLogo from '../assets/linkedinLogo.svg';
import emailLogo from '../assets/email.svg'

export const Contact = React.forwardRef((_props, ref) => {
  return (
    <div className="contactContainer" ref={ref as React.RefObject<HTMLDivElement>}>
      <span style={{color: 'white'}}>Contact</span>
      <div className="contactInnerContainer">
        <div className="contactItem" onClick={() => {window.open('https://www.linkedin.com/in/jackie-he/', '_blank')?.focus();}}><img src={linkedinLogo} id="linkedIn" height="30px" width="30px"/><span>LinkedIn</span></div>
        <div className="contactItem" onClick={() => {window.open('https://github.com/Jckhe/', '_blank')?.focus();}}><img src={githubLogo} id="github" height="30px" width="30px"/><span>Github</span></div>
        <div className="contactItem" ><img src={emailLogo} id="email" height="30px" width="30px"/><span>contact@jckhe.com</span></div>
      </div>
    </div>
  )
})

