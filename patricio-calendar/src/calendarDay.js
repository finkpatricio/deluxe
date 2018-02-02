
import React from 'react';

class CalendarDay extends React.Component {  
    constructor(props) {
        super(props);
        this.manageClick = this.manageClick.bind(this);
    }

    manageClick(description) {
        this.props.props.selectDay(this.props.day)
        this.props.props.selectTask(description)
        this.props.setUpdateValue(description);
        this.props.props.changeModalState(!this.props.props.content.modalOpen);      
    }

    render(){
        const { calendar } = this.props.props.content;
        let dayTasks = [];
        dayTasks = calendar.filter(c => c.day === this.props.day);
        return (
            <div className={'calendarDay'} >
                <a tabIndex='0' title='Create task' onClick={() => this.manageClick('')} className={'calendarNumber'}>{this.props.day}</a>
                <div>
                    {
                        dayTasks.map((task, index) => (
                            <button className={'taskDescription'} onClick={() => this.manageClick(task.description)} key={'t' + this.props.day + index}>{task.description}</button>
                        ))
                    }
                </div>
            </div>
        );
    };
}

export default CalendarDay