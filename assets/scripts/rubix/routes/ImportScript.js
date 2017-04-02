import React from 'react';
import ReactDOM from 'react-dom';

import {
  Row,
  Col,
  Grid,
  Form,
  Panel,
  PanelBody,
  PanelHeader,
  FormControl,
  PanelContainer,
} from '@sketchpixy/rubix';

export default class ImportScript extends React.Component {
  componentDidMount() {
    $('#my-awesome-dropzone').dropzone({
      paramName: "file", // The name that will be used to transfer the file
      maxFilesize: 2, // MB
      accept: (file, done) => {
        done();
      }
    });
  }

  render() {
    return (
        <Grid>
            <PanelContainer controls={false}>
                <Panel>              
                    <PanelBody>
                        <Grid>                    
                            <div className='page-importscript'>
                                <div className='controlpanel'>
                                    <div className='left'>
                                        <h4>Import your Final Draft Script</h4>
                                    </div>
                                </div>
                                <div className='page-content'>
                                    <h5>1. Select schedule</h5>
                                    <div>
                                        Would you like to import the script into a new schedule or update an existing one?
                                        <div className='schedules'>
                                            <FormControl componentClass="select" placeholder="select">
                                                <option value='0'>Into a new schedule</option>
                                                <option value='101'>Locked White</option>
                                                <option value='102'>Prelim Blue Draft</option>
                                                <option value='103'>Locked Blue</option>
                                            </FormControl>
                                        </div>
                                    </div>
                                    <h5>2. Upload script</h5>
                                    <div>
                                        Drag and drop your <b>Final Draft</b> script on the area below and it will be imported into the above schedule.<br/>
                                        The script must be in <b>.FDX format</b>.
                                        <Form action='/api/file-upload'
                                            className='dropzone'
                                            id='my-awesome-dropzone'>
                                        </Form>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    </PanelBody>
                </Panel>
            </PanelContainer>
        </Grid>
    );
  }
}
