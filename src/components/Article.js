import React, {PureComponent} from 'react';

class Article extends PureComponent {
    // state = {
    //     isOpen: this.props.defaultOpen
    // }

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    componentWillMount() {
    }

    // componentWillReceiveProps(nextProps) {
    //     if (nextProps.defaultOpen !== this.props.defaultOpen) this.setState({
    //         isOpen: nextProps.defaultOpen
    //     })
    // }

    componentWillUpdate(nextProps, nextState) {
        console.log('---','componentWillUpdate');
    }

    // shouldComponentUpdate is realized in PureComponent
    // shouldComponentUpdate(nextProps, nextState) {
    //     return this.state.isOpen !== nextState.isOpen
    // }

    render() {
        const {article, isOpen, onButtonClick} = this.props
        const body = isOpen && <section className="card-text">{article.text}</section>
        return (
            <div className="card mx-auto" style={{width:'50%'}}>
                <div className="card-header">
                    <h2 onClick = {this.incrementCounrer}>
                        cliked {this.state.count}
                        {article.title}
                        <button onClick={onButtonClick} className="btn btn-primary btn-sm float-right">{isOpen ? 'close' : 'open'}</button>
                    </h2>
                </div>
                <div className="card-body">
                    <h6 className="card-sutitle text-muted">created at: {(new Date(article.date)).toDateString()}</h6>
                    {body}
                </div>
            </div>
        )
    }

    incrementCounrer = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
}

export default Article
