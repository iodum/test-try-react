import React, {Component} from 'react';

class Article extends Component {
    // state = {
    //     isOpen: this.props.defaultOpen
    // }

    constructor(props) {
        super(props)

        this.state = {
            isOpen: props.defaultOpen
        }
    }

    componentWillMount() {
        console.log('componentWillMount');
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps');
        if (nextProps.defaultOpen !== this.props.defaultOpen) this.setState({
            isOpen: nextProps.defaultOpen
        })
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate');
    }

    render() {
        const {article} = this.props
        const body = this.state.isOpen && <section className="card-text">{article.text}</section>
        return (
            <div className="card mx-auto" style={{width:'50%'}}>
                <div className="card-header">
                    <h2>
                        {article.title}
                        <button onClick={this.handleClick} className="btn btn-primary btn-sm float-right">{this.state.isOpen ? 'close' : 'open'}</button>
                    </h2>
                </div>
                <div className="card-body">
                    <h6 className="card-sutitle text-muted">created at: {(new Date(article.date)).toDateString()}</h6>
                    {body}
                </div>
            </div>
        )
    }

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })

    }
}

export default Article
