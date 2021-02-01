import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

function Participant(props) {

    const AddParticipant = () => {
        props.setParticipantNo(props.totalLength + 1);
    };

    let inputNames =
    {
        participantName: props.participantNo + "_name",
        participantPhone: props.participantNo + "_phone",
        participantEmail: props.participantNo + "_email"
    }

    return (
        <div>
            <div className="row">
                <h4 className="mb-3 mt-2"><b>Participant #{props.participantNo}</b></h4>
            </div>
            <div className="row">
                <div className="w-100">
                    <div className="form-row">
                        <div className="col-md-12">
                            <label>NAME*</label>
                            <InputGroup className="mb-2">
                                <FormControl ref={props.register({ required: true })} name={inputNames.participantName} type="text" />
                            </InputGroup>
                            {props.errors[inputNames.participantName] && (
                                <div role="alert" className="alert-danger-custom pl-1">This field is required</div>
                            )
                            }
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-6">
                            <label>PHONE*</label>
                            <InputGroup className="mb-2">
                                <FormControl ref={props.register({ required: true })} name={inputNames.participantPhone} type="text" />
                            </InputGroup>
                            {props.errors[inputNames.participantPhone] && (
                                <div role="alert" className="alert-danger-custom pl-1">This field is required</div>
                            )
                            }
                        </div>
                        <div className="col-md-6">
                            <label>EMAIL*</label>
                            <InputGroup className="mb-2">
                                <FormControl ref={props.register({ required: true })} name={inputNames.participantEmail} type="email" />
                            </InputGroup>
                            {props.errors[inputNames.participantEmail] && (
                                <div role="alert" className="alert-danger-custom pl-1">This field is required</div>
                            )
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="form-row mb-4 w-100">
                    <div className="col-md-6">
                        <Button variant="default" size="lg" className="participant-button" onClick={AddParticipant}>
                            Add a participant
                            </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Participant;