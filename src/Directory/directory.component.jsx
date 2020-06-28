import React from 'react';


import './directory.styles.scss';
import MenuItem from '../MenuItem/menuItem.component';
import { connect } from 'react-redux';
import { selectSections } from '../redux/directory/directorySelector';

class Directory extends React.Component {

  render() {
    return (
      <div className='directory-menu'>
        {this.props.sections.map(({id, ...otherSectionProps }) => (
           <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return {
    sections:selectSections(state)
  }
}
export default connect(mapStateToProps)(Directory);