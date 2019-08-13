import React from 'react';

class UpdateAudition extends React.Component {

    

    render() {
        return (
            <div className="radio">
                <label>
                    <input type="checkbox" value="callback" checked="{false}" />
                    Received Callback
                </label>
                <label>
                    <input type="checkbox" value="booked" checked="{false}" />
                    Booked It!
                </label>
            </div>
        )
    }
}

export default UpdateAudition