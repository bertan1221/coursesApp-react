import { useState } from 'react';
import Participant from './Participant'

function Participants(props) {
    const [participantNo, setParticipantNo] = useState(1);
    const participants = []

    for (let index = 0; index < participantNo; index++) {
        participants.push(<Participant participantNo={index + 1}
            setParticipantNo={setParticipantNo}
            totalLength={participantNo}
            key={index + 1}
            register={props.register}
            errors={props.errors} />);
    }

    return (
        <div className="participant-color">
            <div className="container">
                <div className="row">
                    <h2 className="mb-1 mt-4"><b>Participants</b></h2>
                </div>
                {participants}
            </div>
        </div>
    );
}

export default Participants;