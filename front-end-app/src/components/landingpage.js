import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl'

class Landing extends Component{
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <div className="banner-text">
                            <h1>Not-a-doctor</h1>
                            <hr/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        </div>

                    </Cell>
                </Grid>
            </div>
        )
    }

}
export default Landing;
