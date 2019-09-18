import React, { Component } from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faAngleDown from '@fortawesome/fontawesome-free-solid/faAngleDown';
import faAngleUp from '@fortawesome/fontawesome-free-solid/faAngleUp';


import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import Collapse from '@material-ui/core/Collapse';


class CollapseCheckbox extends Component {

    state = {
        open:false,
        checkedList: []
    }

    componentDidMount(){
        if(this.props.initState){
            this.setState({open:this.props.initState})
        }
    }


    toggle = ()=>{
        this.setState({open: !this.state.open})
    }


    renderList = () => (
        this.props.list ?
            this.props.list.map((item) => (
                <ListItem key={item._id} style={{padding: '5px 0'}}>
                    <ListItemText primary={item.name}   />
                    <ListItemSecondaryAction>
                        <Checkbox 
                            color='primary'
                            onChange={this.handleCheckbox(item._id)}
                            checked={ this.state.checkedList.indexOf(item._id) !== -1 }
                        />
                    </ListItemSecondaryAction>
                </ListItem>
            ))

        : null
    )


    handleCheckbox = itemId => () => {
        const { checkedList } = this.state
        const currentIndex = checkedList.indexOf(itemId)
        const newCheckedList = [...checkedList]

        if(currentIndex === -1) {
            newCheckedList.push(itemId)
        } else {
            newCheckedList.splice(currentIndex,1)
        }
        
        this.setState({
            checkedList: newCheckedList
        })
    }


    render() {
        return (
            <div className='collapse_items_wrapper'>
                <List style={{borderBottom: '1px solid #dbdbdb'}}>
                    <ListItem onClick={this.toggle} style={{padding:'10px 23px 10px 0'}}>
                        <ListItemText 
                            primary={this.props.title}
                            className='collapse_title'
                        />
                        {this.state.open ? 
                            <FontAwesomeIcon 
                            icon={faAngleUp}
                            className='icon'
                            /> 
                            : 
                            <FontAwesomeIcon 
                            icon={faAngleDown}
                            className='icon'
                            /> 
                        }
                    </ListItem>
                    <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            {this.renderList()}
                        </List>
                    </Collapse> 
                </List>
            </div>
        )
    }
}
export default CollapseCheckbox;
