import React from 'react';
import {DB} from '../database/courses'

export default class Course extends React.Component {
    render() {
        let data = DB;
        return (
            <div>
                {data.courses.map((obj, index) => {
                    return (
                        <div className="resume-item d-flex flex-column flex-md-row mb-5" key={index}>
                            <div className="resume-content mr-auto" key={index}>
                                <h3 className="mb-0" key={index}>{obj.title}</h3>
                            <div className="subheading mb-3" key={index}>{obj.level}</div>
                                <p key={index}>{obj.discription}</p>
                            </div>
                            <div className="resume-date text-md-right" key={index}>
                                <a href={obj.link} key={index}><span className="text-primary" key={index}>View More</span></a>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}
