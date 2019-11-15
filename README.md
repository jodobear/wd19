# Web Dev Chris Hawkes 2019

## Advance React

### Adding Variables to Course Component

Instead of having the course data hardcoded in html, we add `data` variable with course data in json, like so:

    export default class Course extends React.Component {
        render() {
            let data = {
                title: "Web Development in 2019 - From Start to Finish",
                discription: "In this course ...",
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

Next we converted the data json into an array (by adding [] over the object), like so:

    let data = [{ title: ....}, {title: ....}]

And rendered it by iterating over the data array, like so:

    return (
        <div>
            {data.map((obj, key) => {
                return (
                    <div className="resume-item d-flex flex-column flex-md-row mb-5">
                        <div className="resume-content mr-auto">
                            <h3 className="mb-0">{obj.title}</h3>
                        <div className="subheading mb-3">{obj.level}</div>
                            <p>{obj.discription}</p>
                        </div>
                        <div className="resume-date text-md-right">
                            <a href={obj.link}><span className="text-primary">View More</span></a>
                        </div>
                    </div>
                )
            })}
