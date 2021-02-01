import Course from './Course';
import Company from './Company';
import Participants from './Participants';
import Loader from './Loader';
import { useAxiosGet } from '../Hooks/AxiosGet';
import Button from 'react-bootstrap/Button';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
toast.configure();

function CourseApplication() {

    const { register, handleSubmit, errors } = useForm();
    const courses = useAxiosGet("https://localhost:44358/v1/Courses");
    let content = (<div></div>);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [disableButton, setdisableButton] = useState(false);

    const onSubmit = (data) => {
        setdisableButton(true);
        let courseId = selectedCourse;
        let dateId = selectedDate;

        if (selectedDate == null || selectedCourse == null) {
            courseId = courses.data[0].id
            dateId = courses.data[0].courseDates[0].id;
        }

        let objectKeys = Object.keys(data);
        let objectValues = Object.values(data);
        let participants = [];
        let nameSet = false, emailSet = false, phoneSet = false;
        let jsonObject = {};

        for (let index = 0; index < objectKeys.length; index++) {
            let element = objectKeys[index];
            let splitElement = element.split('_');

            if (splitElement.length > 0) {
                switch (splitElement[1]) {
                    case "email":
                        jsonObject["email"] = objectValues[index];
                        emailSet = true;
                        break;
                    case "name":
                        jsonObject["name"] = objectValues[index];
                        nameSet = true;
                        break;
                    case "phone":
                        jsonObject["phone"] = objectValues[index];
                        phoneSet = true;
                        break;
                }

                if (nameSet === true && emailSet === true && phoneSet === true) {
                    console.log(jsonObject)
                    participants.push(jsonObject);
                    nameSet = false;
                    emailSet = false;
                    phoneSet = false;
                    jsonObject = {};
                }
            }
        }

        let payload = {
            courseId: courseId,
            dateId: dateId,
            companyName: data.companyName,
            companyEmail: data.companyEmail,
            companyPhone: data.companyPhone,
            participants: participants
        };

        axios.post("https://localhost:44358/v1/CourseApplication", payload,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => {
                console.log(response);
                toast.success(response.data.result, { position: toast.POSITION.TOP_CENTER });
                setdisableButton(false);                
            }).catch(error => {
                toast.error("An error occurred", { position: toast.POSITION.TOP_CENTER });
                setdisableButton(false);
            });
    };

    if (courses.loading) {
        content = (<div>
            <Loader />
        </div>);
    }

    if (courses.error) {
        content = (<div>
            <p>Check if API is running...</p>
        </div>);
    }

    let buttonContent = (<div></div>);

    if (disableButton === true) {
        buttonContent = <Button variant="default" size="lg" className="participant-button w-100" disabled>
            Processing...
                        </Button>
    }
    else {
        buttonContent = <Button variant="default" size="lg" className="participant-button w-100" type="submit">
            Submit application
                        </Button>
    }

    if (courses.data) {
        content = (
            <form onSubmit={handleSubmit(onSubmit)}>
                <Course courses={courses.data} setSelectedCourse={setSelectedCourse} setSelectedDate={setSelectedDate} />
                <Company register={register} errors={errors} />
                <Participants register={register} errors={errors} />
                <div className="container mt-3">
                    <div className="row">
                        <div className="form-row mb-3 w-100">
                            <div className="col-md-12">
                                {buttonContent}
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        )
    }

    return content;
}

export default CourseApplication;