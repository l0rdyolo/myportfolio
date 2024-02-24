
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { PlayButton } from '../PlayButton/PlayButton';
import "./HomePage.scss"

export const HomePage = ( {setDisplayMainMenu} ) => {
    return (
        <div className="position-absolute top-50 start-50 translate-middle container text-center ">
            <div className="row">
                <div className="col col-1"></div>
                <div className="left col col-4">
                   <h3>Omer Faruk Cinoglu</h3>
                   <h5>life-long learner</h5>
                   <h12>part-time coder</h12> 
                </div>
                <div className="mid col col-2">
                     <PlayButton setDisplayMainMenu={setDisplayMainMenu} />
                </div>
                <div className="right col col-4  d-flex justify-content-center">
                    <a href='#'>About   </a>
                    <a href='#'>Contact </a>
                    <a href='#'>Github  </a>
                </div>
                <div className="col col-1"></div>

            </div>
        </div>
    )
}
