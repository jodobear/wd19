import React from 'react';

export default class Course extends React.Component {
    render() {
        let data = {
            title: "Web Development in 2019 - From Start to Finish",
            discription: "In this course we will be looking at building a production level React UI project using the latest web development technologies. Upon completing this course you should have a solid understanding of the technologies used by a typical web developer in 2019. The course covers Webpack, Babel, SASS, CSS, HTML, JavaScript (ES6), React, Bootstrap and many other technologies and techniques.",
            level: "Beginner",
            link: "https://www.udemy.com/web-development-in-2019-from-start-to-finish/?couponCode=TENPERCENT"
        }
        return (
            <div className="resume-item d-flex flex-column flex-md-row mb-5">
                <div className="resume-content mr-auto">
                <h3 className="mb-0">{data.title}</h3>
                <div className="subheading mb-3">{data.level}</div>
                    <p>{data.discription}</p>
                </div>
            <div className="resume-date text-md-right">
                <a href={data.link}><span className="text-primary">View More</span></a>
            </div>
        </div>
        )
    }
}
