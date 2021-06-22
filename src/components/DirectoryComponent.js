import { div } from 'prelude-ls';
import React, { Component } from 'react';
import CampsiteInfo from './CampsiteInfoComponent';
import {Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';

class Directory extends Component{
    constructor(props){
        super(props);
        this.state = {
         selectedCampsite: null,

        };
    }

            onCampsiteSelect(campsite){
                this.setState({selectedCampsite: campsite});
            }

        
    render(){

        const directory = [
            this.props.campsites.map(campsite => {
                return (
                    <div key={campsite.id} className='col-md-5 m-1'>
                        <Card onClick={()=> this.onCampsiteSelect(campsite)}>
                            <CardImg src={campsite.image} alt={campsite.name} />
                            <CardImgOverlay>
                                <CardTitle>{campsite.name}</CardTitle>
                            </CardImgOverlay>
                        </Card>
                    </div>
                );
            })
        ];

        return (
            <div className='container'>
                <div className='row'>
                    { directory }
                </div>
                <CampsiteInfo campsite={this.state.selectedCampsite} />
            </div>
        );
    }

}

//remove 58 - 62. Add CampsiteInfo component instead. Pass this.state.selectedCampsite, in through props under 
// the attribute 'campsite'. Make sure to import CampsiteInfo to this file.
export default Directory;