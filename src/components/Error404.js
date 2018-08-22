import  React from 'react'
import { Segment, Header , Grid } from "semantic-ui-react";
 const Error404=()=>{
    return(
        <div>
            <Grid container textAlign='center' style={{ height: '100%',marginTop: '3em' }} verticalAlign='middle'>
                <Grid.Row >
                    <Grid.Column >
                        <Segment>
                            <Header as='h4' color='red' content='Erorr:404 Page not found'/>
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
export default Error404