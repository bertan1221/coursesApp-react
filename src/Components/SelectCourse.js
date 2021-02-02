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

  const colourStyles = {
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      // const color = chroma(data.color);
      console.log({ data, isDisabled, isFocused, isSelected });
      return {
        ...styles,
        backgroundColor: isFocused ? "#721c24" : null,
        borderColor: '#721c24',
        color: isFocused ? "white" : 'black'
      };
    },
    control: (base, state) => ({
      ...base,
      '&:hover': { borderColor: 'gray' },
      boxShadow: state.isFocused ? '0 0 0 1px #721c24' : null,
      borderColor: 'hsl(0, 0%, 80%)',
    }),
  };

  return <Select options={courseOptions} onChange={onChange} value={text} styles={colourStyles} />;
};

export default SelectCourse;