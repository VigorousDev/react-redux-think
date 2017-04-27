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
  DropdownHoverButton,
  MenuItem,
  Form,
  FormControl,
  FormGroup,
  ControlLabel
} from '@sketchpixy/rubix';

export class BreakdownElements extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){

  }
  render(){
    return (
      <div className='elements-category'>
        <div className="bde-columns">
          <div className="bde-category">
            <span>Cast</span>
            <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <Icon glyph={'icon-fontello-sort'} /> </a>
                  <ul className="dropdown-menu">
                      <li><i className="fa fa-check"> </i> 1. George</li>
                      <li><i className="fa fa-check"> </i> 2. Mary</li>
                      <li><i className="fa fa-check"> </i> 3. Harry</li>
                      <li><i className="fa fa-check"> </i> 4. Uncle Billy</li>
                      <li><i className="fa fa-check"> </i> 5. Mr. Potter</li>
                      <li><i className="fa"> </i> 6. Mr. Gower</li>
                      <li><i className="fa"> </i> 7. Ernie</li>
                      <li><i className="fa"> </i> 8. Bert</li>
                      <li><i className="fa"> </i> 9. Joe</li>
                      <li><i className="fa"> </i> 10. Clarence</li>
                      <li><i className="fa"> </i> 11. Violet</li>
                      <li><i className="fa"> </i> 12. Ma Bailey</li>
                      <li><i className="fa"> </i> 13. Mrs. Hatch</li>
                      <li><i className="fa"> </i> 14. Mr. Martini</li>
                      <li><i className="fa"> </i> 15. Cousin Tilly</li>
                      <li><i className="fa"> </i> 16. Annie</li>
                      <li><i className="fa"> </i> 17. Peter Bailey</li>
                      <li><i className="fa"> </i> 18. Cousin Eustace</li>
                      <li><i className="fa"> </i> 19. Ruth</li>
                      <li><i className="fa"> </i> 20. Pete Bailey</li>
                      <li><i className="fa"> </i> 21. Goon</li>
                      <li><i className="fa"> </i> 22. Carter</li>
                      <li><i className="fa"> </i> 23. Marty</li>
                      <li><i className="fa"> </i> 24. Sam Wainwright</li>
                      <li><i className="fa"> </i> 25. Maria Martini</li>
                      <li><i className="fa"> </i> 26. Ed</li>
                      <li><i className="fa"> </i> 27. Freddie</li>
                      <li><i className="fa"> </i> 28. Nick</li>
                      <li><i className="fa"> </i> 29. Tommy Bailey</li>
                      <li><i className="fa"> </i> 30. Janie Bailey</li>
                      <li><i className="fa"> </i> 31. Charlie</li>
                      <li><i className="fa"> </i> 32. Tom</li>
                      <li><i className="fa"> </i> 33. Zuzu Bailey</li>
                      <li><i className="fa"> </i> 34. Dr. Campbell</li>
                      <li><i className="fa"> </i> 35. Mr. Carter</li>
                      <li><i className="fa"> </i> 36. Principal</li>
                      <li><i className="fa"> </i> 37. Grumpy Old Man</li>
                      <li><i className="fa"> </i> 38. Jane Wainwright</li>
                      <li><i className="fa"> </i> 39. Tollkeeper</li>
                      <li><i className="fa"> </i> 40. Mickey</li>
                      <li><i className="fa"> </i> 41. Lawyer</li>
                      <li><i className="fa"> </i> 42. Real Estate Salesman</li>
                      <li><i className="fa"> </i> 43. Insurance Agent</li>
                      <li><i className="fa"> </i> 44. Suitor #1</li>
                      <li><i className="fa"> </i> 45. Suitor #2</li>
                      <li><i className="fa"> </i> 46. Passerby</li>
                      <li><i className="fa"> </i> 47. Randall</li>
                      <li><i className="fa"> </i> 48. Mrs. Thompson</li>
                      <li><i className="fa"> </i> 49. Poster Man</li>
                      <li><i className="fa"> </i> 50. Schultz</li>
                      <li><i className="fa"> </i> 51. Mr. Reineman</li>
                      <li><i className="fa"> </i> 52. Nurse</li>
                      <li><i className="fa"> </i> 53. Bank Teller</li>
                      <li><i className="fa"> </i> 54. Mr. Welch</li>
                      <li><i className="fa"> </i> 55. Owner</li>
                      <li><i className="fa"> </i> 56. Truck Driver</li>
                      <li><i className="fa"> </i> 57. House Owner</li>
                      <li><i className="fa"> </i> 58. Cop</li>
                      <li><i className="fa"> </i> 59. Sheriff</li>
                  </ul>
          </div>
          <ul className="bde-list">
            <li><a href="#">1. George</a> <Icon glyph={'icon-fontello-cancel-3'} /></li>
            <li><a href="#">2. Mary</a> <Icon glyph={'icon-fontello-cancel-3'} /></li>
            <li><a href="#">3. Harry</a> <Icon glyph={'icon-fontello-cancel-3'} /></li>
            <li><a href="#">4. Uncle Billy</a> <Icon glyph={'icon-fontello-cancel-3'} /></li>
                  <li><a href="#">5. Mr. Potter</a> <Icon glyph={'icon-fontello-cancel-3'} /></li>
          </ul>

          <div className="bde-category">
            <span>Background </span>
            <a data-toggle="dropdown" className="dropdown-toggle" href="#"> <Icon glyph={'icon-fontello-sort'} /> </a>
                  <ul className="dropdown-menu">
                      <li><i className="fa fa-check"> </i> 10 ND Patrons</li>
                      <li><i className="fa"> </i> 100 Dancers at Party</li>
                      <li><i className="fa fa-check"> </i> 2 Construction Managers</li>
                      <li><i className="fa fa-check"> </i> 2 Waitresses</li>
                      <li><i className="fa"> </i> 3 School Kids (k)</li>
                      <li><i className="fa"> </i> 5 ND Bakers</li>
                      <li><i className="fa"> </i> Bank Teller</li>
                      <li><i className="fa"> </i> Councilmember</li>
                      <li><i className="fa"> </i> Hot Headed Driver</li>
                      <li><i className="fa"> </i> Man in Derby</li>
                      <li><i className="fa fa-check"> </i> Short Order Cook</li>
                      <li><i className="fa"> </i> Woman with groceries</li>
                  </ul>
          </div>
          <ul className="bde-list">
            <li><a href="#">10 ND Patrons</a> <Icon glyph={'icon-fontello-cancel-3'} /></li>
            <li><a href="#">2 Waitresses</a> <Icon glyph={'icon-fontello-cancel-3'} /></li>
            <li><a href="#">2 Construction Managers</a> <Icon glyph={'icon-fontello-cancel-3'} /></li>
            <li><a href="#">Short Order Cook</a> <Icon glyph={'icon-fontello-cancel-3'} /></li>
          </ul>

          <div className="bde-category">
            <span>Vehicles </span>
            <a data-toggle="dropdown" className="dropdown-toggle" href="#"> <Icon glyph={'icon-fontello-sort'} /> </a>
                  <ul className="dropdown-menu">
                      <li><i className="fa fa-check"> </i> Ernie's Cab</li>
                      <li><i className="fa fa-check"> </i> Potter's Car</li>
                  </ul>
          </div>
          <ul className="bde-list">
            <li><a href="#">Ernie's Cab</a> <Icon glyph={'icon-fontello-cancel-3'} /></li>
            <li><a href="#">Potter's Car</a> <Icon glyph={'icon-fontello-cancel-3'} /></li>
          </ul>

          <div className="bde-category">
            <span>Stunts </span>
          </div>

          <div className="bde-category">
            <span>Special Effects </span>
          </div>

          <div className="bde-category">
            <span>Animals </span>
          </div>

          <div className="bde-category">
            <span>Set Dressing </span>
          </div>

          <div className="bde-category">
            <span>Props </span>
          </div>

          <div className="bde-category">
            <span>Costumes </span>
          </div>

          <div className="bde-category">
            <span>Makeup Hair </span>
          </div>

          <div className="bde-category">
            <span>Sound </span>
          </div>

          <div className="bde-category">
            <span>Playback </span>
          </div>

          <div className="bde-category">
            <span>Grip Electric </span>
          </div>

          <div className="bde-category">
            <span>Visual Effects </span>
          </div>

          <div className="bde-category">
            <span>Special Equipment</span>
          </div>

          <div className="bde-category">
            <span>Additional Labor </span>
          </div>

          <div className="bde-category">
            <span>Miscellaneous </span>
          </div>

          <div className="bde-category">
            <span>Notes </span>
          </div>		
        </div>
      </div>
    );
  }
}