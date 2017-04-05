import React from 'react';
import ReactDOM from 'react-dom';
import {
  Row,
  Col,
  Grid,
  Icon,
  Button,
  ButtonToolbar,
  ButtonGroup,
  DropdownButton,
  DropdownHoverButton,
  MenuItem,
  Form,
  FormControl,
  FormGroup,
  ControlLabel
} from '@sketchpixy/rubix';

export class Script extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    // var htmlInput = "<";
    // var htmlToReactParser = new Parser();
    // var reactElement = htmlToReactParser.parse(htmlInput);
    // console.log(reactElement);
  }

  handleChange(key, e) {
  }

  render(){
    let htmlContent="<FinalDraft DocumentType='Script' Template='No' Version='2'>					                  <Content>					                    <Paragraph Type='General'>					                      <Text>FADE IN:</Text>					                    </Paragraph>					                    <Paragraph Number='1' Type='Scene Heading'>					                      <SceneProperties Length='3 1/8' Page='1' Title=''>					                        <SceneArcBeats>					                          <CharacterArcBeat Name='BERT\'S VOICE'></CharacterArcBeat>					                          <CharacterArcBeat Name='CLARENCE\'S VOICE'></CharacterArcBeat>					                          <CharacterArcBeat Name='ERNIE\'S VOICE'></CharacterArcBeat>					                          <CharacterArcBeat Name='FRANKLIN\'S VOICE'></CharacterArcBeat>					                          <CharacterArcBeat Name='GOWER\'S VOICE'></CharacterArcBeat>					                          <CharacterArcBeat Name='JANIE\'S VOICE'></CharacterArcBeat>					                          <CharacterArcBeat Name='JOSEPH\'S VOICE'></CharacterArcBeat>					                          <CharacterArcBeat Name='MARTINI\'S VOICE'></CharacterArcBeat>					                          <CharacterArcBeat Name='MARY\'S VOICE'></CharacterArcBeat>					                          <CharacterArcBeat Name='MRS. BAILEY\'S VOICE'></CharacterArcBea t>					                          <CharacterArcBeat Name='ZUZU\'S VOICE'></CharacterArcBeat>					                        </SceneArcBeats>					                      </SceneProperties>					                      <Text>NIGHT SEQUENCE</Text>					                    </Paragraph>					                    <Paragraph Type='Action'>					                      <Text>Series of <span class='hlt'>shots</span> of various <span class='hlt'>streets</span> and <span class='hlt'>buildings</span> in the <span class='hlt'>town</span> of Bedford Falls, somewhere in New York State. The <span class='hlt'>streets</span> are deserted, and <span class='hlt'>snow</span> is falling. It is Christmas Eve. Over the above <span class='hlt'>scenes</span> we hear voices praying:</Text>					                    </Paragraph>					                    <Paragraph Type='Character'>					                      <Text>GOWER\'S VOICE</Text>					                    </Paragraph>					                    <Paragraph Type='Dialogue'>					                      <Text>I owe everything to George Bailey. Help him, dear Father.</Text>					                    </Paragraph>					                    <Paragraph Type='Character'>					                      <Text>MARTINI\'S VOICE</Text>					                    </Paragraph>					                    <Paragraph Type='Dialogue'>					                      <Text>Joseph, Jesus and Mary. Help my friend Mr. Bailey.</Text>					                    </Paragraph>					                    <Paragraph Type='Character'>					                      <Text>MRS. BAILEY\'S VOICE</Text>					                    </Paragraph>					                    <Paragraph Type='Dialogue'>					                      <Text>Help my son George tonight.</Text>					                    </Paragraph>					                    <Paragraph Type='Character'>					                      <Text>BERT\'S VOICE</Text>					                    </Paragraph>					                    <Paragraph Type='Dialogue'>					                      <Text>He never thinks about himself, God; that\'s why he\'s in trouble.</Text>					                    </Paragraph>					                    <Paragraph Type='Character'>					                      <Text>ERNIE\'S VOICE</Text>					                    </Paragraph>					                    <Paragraph Type='Dialogue'>					                      <Text>George is a good guy. Give him a break, God.</Text>					                    </Paragraph>					                    <Paragraph Type='Character'>					                      <Text>MARY\'S VOICE</Text>					                    </Paragraph>					                    <Paragraph Type='Dialogue'>					                      <Text>I love him, dear Lord. Watch over him tonight.</Text>					                    </Paragraph>					                    <Paragraph Type='Character'>					                      <Text>JANIE\'S VOICE</Text>					                    </Paragraph>					                    <Paragraph Type='Dialogue'>					                      <Text>Please, God. Something\'s the matter with Daddy.</Text>					                    </Paragraph>					                    <Paragraph Type='Character'>					                      <Text AdornmentStyle='-1' Background='#FFFFFFFFFFFF' Color='#000000000000' Font='Courier Final Draft' RevisionID='0' Size='12' Style='AllCaps'>ZUZU\'S</Text>					                      <Text> VOICE</Text>					                    </Paragraph>					                    <Paragraph Type='Dialogue'>					                      <Text>Please bring Daddy back.</Text>					                    </Paragraph>					                    <Paragraph Type='Action'>					                      <Text>CAMERA PULLS UP from the Bailey <span class='hlt'>home</span> and travels up through the <span class='hlt'>sky</span> until it is above the falling <span class='hlt'>snow</span> and moving slowly toward a <span class='hlt'>firmament</span> full of <span class='hlt'>stars</span>. As the <span class='hlt'>camera</span> stops we hear the following heavenly <span class='hlt'>voices</span> talking, and as each <span class='hlt'>voice</span> is heard, one of the <span class='hlt'>stars</span> twinkles brightly:</Text>					                    </Paragraph>					                    <Paragraph Type='Character'>					                      <Text>FRANKLIN\'S VOICE</Text>					                    </Paragraph>					                    <Paragraph Type='Dialogue'>					                      <Text>Hello, Joseph, trouble?</Text>					                    </Paragraph>					                    <Paragraph Type='Character'>					                      <Text>JOSEPH\'S VOICE</Text>					                    </Paragraph>					                    <Paragraph Type='Dialogue'>					                      <Text>Looks like we\'ll have to send someone down – a lot of people are asking for help for a man named George Bailey.</Text>					                    </Paragraph>					                    <Paragraph Type='Character'>					                      <Text>FRANKLIN\'S VOICE</Text>					                    </Paragraph>					                    <Paragraph Type='Dialogue'>					                      <Text>George Bailey. Yes, tonight\'s his crucial night. You\'re right, we\'ll have to send someone down immediately. Whose turn is it?</Text>					                    </Paragraph>					                    <Paragraph Type='Character'>					                      <Text>JOSEPH\'S VOICE</Text>					                    </Paragraph>					                    <Paragraph Type='Dialogue'>					                      <Text>That\'s why I came to see you, sir. It\'s that clock-maker\'s turn again.</Text>					                    </Paragraph>					                    <Paragraph Type='Character'>					                      <Text>FRANKLIN\'S VOICE</Text>					                    </Paragraph>					                    <Paragraph Type='Dialogue'>					                      <Text>Oh – Clarence. Hasn\'t got his wings yet, has he? We\'ve passed him up right along.</Text>					                    </Paragraph>					                    <Paragraph Type='Character'>					                      <Text>JOSEPH\'S VOICE</Text>					                    </Paragraph>					                    <Paragraph Type='Dialogue'>					                      <Text>Because, you know, sir, he\'s got the </Text>					                      <Text AdornmentStyle='-1' Background='#FFFFFFFFFFFF' Color='#000000000000' Font='Courier Final Draft' RevisionID='0' Size='12' Style=''>I.Q</Text>					                      <Text>. </Text>					                      <Text AdornmentStyle='-1' Background='#FFFFFFFFFFFF' Color='#000000000000' Font='Courier Final Draft' RevisionID='0' Size='12' Style=''>of</Text>					                      <Text> a rabbit.</Text>					                    </Paragraph>					                    <Paragraph Type='Character'>					                      <Text>FRANKLIN\'S VOICE</Text>					                    </Paragraph>					                    <Paragraph Type='Dialogue'>					                      <Text>Yes, but he\'s got the faith of a child – simple. Joseph, send for Clarence.</Text>					                    </Paragraph>					                    <Paragraph Type='Action'>					                      <Text>A small <span class='hlt'>star</span> flies in from left of <span class='hlt'>screen</span> and stops. It twinkles as Clarence speaks:</Text>					                    </Paragraph>					                  </Content>					                </FinalDraft>"; 
    return (
      <div className="page-script">
        <Form className='frm_script'>
          <ButtonToolbar className="toolbar">
            <ButtonGroup sm>
              <Button bsStyle='info' inverse>
                <Icon glyph={'icon-fontello-box'} />&nbsp;Hide Elements
              </Button>
              <Button bsStyle='info' inverse>
                <Icon glyph={'icon-fontello-bicycle'} />&nbsp;Hide Nouns
              </Button>
            </ButtonGroup>
          </ButtonToolbar>          
        </Form>
        <div className='script-container'>
          <div dangerouslySetInnerHTML={ {__html: htmlContent} } />
        </div>
      </div>
    );
  }
}