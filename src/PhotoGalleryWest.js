import React from 'react';
import { Link } from 'react-router-dom';
import bath from './Images/bath.jpg';

export default function PhotoGalleryWest() {
    return (
        <div>
            <h1 className="title">The West Country</h1>
            <div className="text"> Even though the West Country is one of the wettest parts of the UK, it still offers a wide range of attractions
              that are definitely worth visiting.
                The Western cities of the UK are rife with history and culture. Some of these attractions include Stonehenge, the
              Roman Baths and Salisbury Cathedral.
                One of my favourite places to visit in the West Country is Bath. Bath is a university town close to Bristol. The city
                has a cathedral and the most intact Roman Baths in the British Isles.
            </div>
            <br/>
            <br/>
            <img className="touristpic"src={bath} alt="Bath" />
            <br/>
            <br/>
            <Link to="/" className="text">Home</Link>
        </div>
    );
}
