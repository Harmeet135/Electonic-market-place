import React from 'react';
import { MdDomain} from 'react-icons/md';
import { BsGithub} from 'react-icons/bs';

const Footer = () => {
  return (
    <div className="footer-container">
      <p> All rights reserverd</p>


      <p className="icons" >
        <a href="https://github.com/Harmeet135/Electronic-mart" target='_blank'>
        <BsGithub />
        </a>
        <a href="https://github.com/Harmeet135/Electronic-mart" target='_blank'>
          
        <MdDomain />
        </a>

      </p>
    </div>
  )
}

export default Footer