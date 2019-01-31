import React from 'react';
import { Link } from 'react-router-dom';
import Osbourne from './Images/osborne.jpg';
 
export default function PhotoGalleryIOW() {
  return (
    <div>
      <h1 className="title">Isle Of White</h1>
      <p className="text">Situated on the South coast of the UK, the Isle of White boasts walks, beaches and good pubs alike.
        Famous for Osbourne House and Tennison Down, the Isle of White holds host to numerous historical sites to
        vist. For me, Osbourne House is a particularly interesting place to visit since it was the house of Queen
        Victoria and rebuilt by Prince Albert as a wedding present. Osbourne includes Indian and Swiss influences to its
        design and decor.
        As well as history, the IOW hosts the IOW festival each year in it's largest town of Newport.
        Whatever the age, interest or season, the IOW offers entertainments for everyone.
      </p>
      <br />
      <br />
      <img src={Osbourne} alt="osbourne"/>
      <br />
      <br />
      <Link to="/" className="text">Home</Link>
    </div>
  );
}