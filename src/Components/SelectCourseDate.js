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

    const colourStyles = {
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
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
          borderColor: 'hsl(0, 0%, 80%)'
        }),
      };

    return <Select options={courseDateOptions} onChange={onChange} value={text} styles={colourStyles} />;
};

export default SelectCourseDate;