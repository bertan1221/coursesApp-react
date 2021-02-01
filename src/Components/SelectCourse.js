import React, { useState } from "react";
import Select from "react-select";

const SelectCourse = props => {

  const courseOptions = props.options.map((course, index) => {
    return { value: course.id, label: course.name }
  });

  const [text, setText] = useState(courseOptions[0]);

  const onChange = selectedOption => {
    setText(selectedOption);
    props.setSelectedCourseId(selectedOption.value);
    props.setSelectedCourse(selectedOption.value);
    let selectedCourse = props.options.filter(x => x.id === selectedOption.value)[0];
    props.setSelectedDate(selectedCourse.courseDates[0].id);
  };

  return <Select options={courseOptions} onChange={onChange} value={text} />;
};

export default SelectCourse;