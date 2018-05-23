class App extends React.Component {

    constructor() {
        super();

        this.state = {
            currentForm: '',
            formArray: ['checkout','address','ccinfo']
        }
        this.nextStep.bind(this);
    }

    nextStep() {
        if (this.state.currentForm === '') {
            this.setState({
                currentForm: this.state.formArray[0]
            })
        } else {
            var index = this.state.formArray.indexOf(this.state.currentForm);
            this.setState({
                currentForm: this.state.formArray[index + 1]
            })
        }
    } 

    render() {

        const checkout = this.state.currentForm === 'checkout' ? (<Checkout nextStep={this.nextStep} />) : (null);
        const address = this.state.currentForm === 'address' ? (<Address nextStep={this.nextStep} />) : (null);
        const ccinfo = this.state.currentForm === 'ccinfo' ? (<Ccinfo nextStep={this.nextStep} />) : (null);

        return (
            <div>
                <button onClick={() => this.nextStep()}>Checkout</button>
                {checkout}
                {address}
                {ccinfo}
            </div>
        )
    }
}

const Checkout = (props) => {
    return (
        <form id="checkout">
            <h1>Checkout</h1>
            Name:<input type="text"></input>
            Email:<input type="text"></input>
            Password:<input type="password"></input>
            <button type="button" onClick={() => props.nextStep()}>On to Shipping Address!</button>
        </form>
    )
}

const Address = (props) => {
    return (
        <form id="address">
            <h1>Address</h1>
            Address Line 1:<input type="text"></input>
            Address Line 2:<input type="text"></input>
            City:<input type="text"></input>
            State:<input type="text"></input>
            Zipcode:<input type="text"></input>
            <button type="button" onClick={() => props.nextStep()}>On to Credit Card Info!</button>
        </form>
    )
}

const Ccinfo = (props) => {
    return (
        <form id="ccInfo">
            <h1>Credit Card Info</h1>
            Credit Card Number:<input type="text"></input>
            Expiry Date:<input type="date"></input>
            CVV:<input type="text"></input>
            Billing ZIPCode:<input type="text"></input>
        </form>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

