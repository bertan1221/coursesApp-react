import React, { useEffect, useState } from "react";
import Select from "react-select";

const SelectCourseDate = props => {

    let selectedCourse = props.options.filter(x => x.id === props.selectedCourseId)[0];

    let courseDateOptions = selectedCourse.courseDates.map((courseDate, index) => {
        return { value: courseDate.id, label: courseDate.date };
    });

    useEffect(() => {
        setText(courseDateOptions[0]);
    }, [props.selectedCourseId]);

    const [text, setText] = useState(courseDateOptions[0]);

    const onChange = selectedOption => {
        setText(selectedOption);
        props.setSelectedDate(selectedOption.value);
    };

    return <Select options={courseDateOptions} onChange={onChange} value={text} />;
};

export default SelectCourseDate;