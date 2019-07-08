import React, { Component} from 'react';

class Save extends Component {
    constructor(props){
        super(props);
        this.state = {
            saved: false,
            numSaves: 0
        }

        this.handleSubmission = this.handleSubmission.bind(this);
    }

    handleSubmission(e){
        e.preventDefault(); 

        console.log('called')

        let saved = this.state.saved;
        let numSaves = this.state.numSaves;

        if(this.state.saved === false){
            saved = true;
            numSaves++;
        } else {
            if(numSaves > 0){
                numSaves--;
                saved = false;
            }
        }

        this.setState(
            {
                saved: saved,
                numSaves: numSaves
            }
        )

        console.log(this.state.numSaves);
    }

    render(){
        let submitText = 'Save';
        if(this.state.saved){
            submitText = 'Remove';
        }
        return (
            <div className='saves'>
                <form onSubmit={this.handleSubmission}>
                    <input type='submit' value={submitText}/>
                </form>
                {this.state.numSaves} times saved this.

            </div>
        );
    }
}

export default Save;