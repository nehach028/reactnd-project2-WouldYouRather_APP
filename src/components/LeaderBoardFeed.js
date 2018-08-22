/* @author: Neha Chaturvedi 8/14/2018
@discription:Stateless Component for LeaderBoard feed.
*/
import React  from 'react';
import PropTypes from 'prop-types';
import { Segment, Header ,Table,Grid,Image} from "semantic-ui-react";

const LeaderBoardFeed = (props)=>{
    const { name,avatarURL,ansQuestionCount,askedQuestionCount,score}=props.user
    return (
        <Segment>
        <Grid stackable columns='equal' divided >
                <Grid.Row >
                <Grid.Column >
                    <Image size='small'src={avatarURL} alt={name} />
                </Grid.Column>
                <Grid.Column textAlign='center'>
                    <Header  as='h2' color='teal'>{name} </Header>
                    <Table padded>
                    <Table.Body>
                        <Table.Row>
                           <Table.Cell>Answered Question</Table.Cell>
                           <Table.Cell>{ansQuestionCount}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                           <Table.Cell>Created Question</Table.Cell>
                           <Table.Cell>{askedQuestionCount}</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                    </Table>
                </Grid.Column>
                <Grid.Column>
                    <Table padded style={{width: 20, height: 20}}>
                        <Table.Header >
                            <Table.Row>
                                <Table.HeaderCell textAlign='center'>
                                    Score
                                </Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                        <Table.Row >
                            <Table.Cell >
                            <Segment circular inverted style={{width: 2, height: 2}} color ='teal'  >
                            <Header as='h2' inverted >
                                {score}
                            </Header>
                            </Segment>
                            </Table.Cell>
                        </Table.Row>
                        </Table.Body>
                    </Table>
                </Grid.Column>
                </Grid.Row>
                </Grid>
            </Segment>
    )
}
//Required PropTypes:
LeaderBoardFeed.propTypes = {
    user : PropTypes.object.isRequired,
}
export default LeaderBoardFeed