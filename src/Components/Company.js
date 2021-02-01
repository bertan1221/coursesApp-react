import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

function Company(props) {
    return (
        <div className="company-color">
            <div className="container">
                <div className="row">
                    <h2 className="mb-4 mt-3"><b>Company</b></h2>
                </div>
                <div className="row">
                    <div className="w-100">
                        <div className="form-row">
                            <div className="col-md-12">
                                <label>NAME*</label>
                                <InputGroup className="mb-3">
                                    <FormControl name="companyName" ref={props.register({ required: true })} type="text" />
                                </InputGroup>

                                {props.errors.companyName && (
                                    <div role="alert" className="alert-danger-custom pl-1">This field is required</div>
                                )
                                }
                            </div>
                        </div>

                        <div className="form-row mb-2">
                            <div className="col-md-6">
                                <label className="mt-2">PHONE*</label>
                                <InputGroup className="mb-3">
                                    <FormControl name="companyPhone" ref={props.register({ required: true })} type="text" />
                                </InputGroup>

                                {props.errors.companyPhone && (
                                    <div role="alert" className="alert-danger-custom pl-1">This field is required</div>
                                )
                                }
                            </div>
                            <div className="col-md-6">
                                <label className="mt-2">EMAIL*</label>
                                <InputGroup className="mb-3">
                                    <FormControl name="companyEmail" ref={props.register({ required: true })} type="email" />
                                </InputGroup>

                                {props.errors.companyEmail && (
                                    <div role="alert" className="alert-danger-custom pl-1">This field is required</div>
                                )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Company;