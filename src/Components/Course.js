import { useState } from 'react';
import SelectCourse from './SelectCourse';
import SelectCourseDate from './SelectCourseDate';

function Course(props) {

    const [selectedCourseId, setSelectedCourseId] = useState(props.courses[0].id);

    return (
        <div>
            <div className="container">
                <div className="row">
                    <h2 className="mb-4 mt-4"><b>Course</b></h2>
                </div>
                <div className="row">
                    <div className="w-100">
                        <div className="form-row mb-3">

                            <div className="form-group col-md-6">
                                <label>NAME*</label>
                                <SelectCourse options={props.courses} setSelectedCourseId={setSelectedCourseId} setSelectedCourse={props.setSelectedCourse} setSelectedDate={props.setSelectedDate} />
                            </div>

                            <div className="form-group col-md-6">
                                <label>DATE*</label>
                                <SelectCourseDate options={props.courses} selectedCourseId={selectedCourseId} setSelectedDate={props.setSelectedDate} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Course;