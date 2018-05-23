class App extends React.Component {

    constructor() {
        super();

        this.state = {
            currentForm: 'home',
            formArray: ['home','userInfo','address','ccinfo', 'confirmation'],
            form1: {},
            form2: {},
            wholeForm: {}
        }
    }

    f1Function(obj) {
        this.setState({
            form1: obj
        })
    }

    f2Function(obj) {
        this.setState({
            form2: obj
        })
    }

    f3Function(obj) {
        var newObj = {}
        Object.assign(newObj, this.state.form1, this.state.form2, obj);

        this.setState({
            wholeForm: newObj
        })
    }

    prevStep() {
        var index = this.state.formArray.indexOf(this.state.currentForm);

        this.setState({
            currentForm: this.state.formArray[index - 1]
        })
    }

    nextStep() {
        var index = this.state.formArray.indexOf(this.state.currentForm);
        if (index + 1 === this.state.formArray.length) {
            this.setState({
                currentForm: 'home'
            })
        } else {
            this.setState({
                currentForm: this.state.formArray[index + 1]
            })
        }
    } 

    render() {

        // const checkoutButton = this.state.currentForm === 'home' ? (<button onClick={() => this.nextStep()}>Checkout</button>) : (null);
        // const userInfo = this.state.currentForm === 'userInfo' ? (<Checkout prevStep={this.prevStep.bind(this)} nextStep={this.nextStep.bind(this)} sendState={this.f1Function.bind(this)} />) : (null);
        // const address = this.state.currentForm === 'address' ? (<Address prevStep={this.prevStep.bind(this)} nextStep={this.nextStep.bind(this)} sendState={this.f2Function.bind(this)} />) : (null);
        // const ccinfo = this.state.currentForm === 'ccinfo' ? (<Ccinfo prevStep={this.prevStep.bind(this)} nextStep={this.nextStep.bind(this)} sendState={this.f3Function.bind(this)} />) : (null);
        // const confirmation = this.state.currentForm === 'confirmation' ? (<Confirmation prevStep={this.prevStep.bind(this)} nextStep={this.nextStep.bind(this)} form={this.state.wholeForm}/>) : (null);

        return (
            <div>
                {this.state.currentForm === 'home' ? (<button onClick={() => this.nextStep()}>Checkout</button>) : (null)}
                <Checkout currentForm={this.state.currentForm} 
                          prevStep={this.prevStep.bind(this)} 
                          nextStep={this.nextStep.bind(this)} 
                          sendState={this.f1Function.bind(this)} />
                <Address currentForm={this.state.currentForm} prevStep={this.prevStep.bind(this)} nextStep={this.nextStep.bind(this)} sendState={this.f2Function.bind(this)} />
                <Ccinfo currentForm={this.state.currentForm} prevStep={this.prevStep.bind(this)} nextStep={this.nextStep.bind(this)} sendState={this.f3Function.bind(this)} />
                <Confirmation currentForm={this.state.currentForm} prevStep={this.prevStep.bind(this)} nextStep={this.nextStep.bind(this)} form={this.state.wholeForm}/>
            </div>
        )
    }
}

class Checkout extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            pass: ''
        }
    }

    onInputChange(field, value) {
        this.setState({
            [field]: value
        });
    }

    render() {
        if (this.props.currentForm === 'userInfo') {
            return (
                <form id="userInfo">
                    <h1>User Info</h1>
                    Name:<input type="text" 
                                onChange={(e) => this.onInputChange('name', e.target.value)}
                                value={this.state.name}></input>
                    Email:<input type="text" onChange={(e) => this.onInputChange('email', e.target.value)} value={this.state.email}></input>
                    Password:<input type="password" onChange={(e) => this.onInputChange('pass', e.target.value)} value={this.state.pass}></input>
                    <button type="button" onClick={() => this.props.prevStep()}>Back Home</button>
                    <button type="button" onClick={() => {
                        this.props.nextStep()
                        this.props.sendState(this.state);
                    }}>On to Shipping Address!</button>
                </form>
            )
        } else {
            return null;
        }
    }
}

class Address extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            ad1: '',
            ad2: '',
            city: '',
            state: '',
            shipZip: '',
            phone: ''
        }
    }

    onInputChange(field, value) {
        this.setState({
            [field]: value
        });
    }

    render() {
        if (this.props.currentForm === 'address') {
            return (
                <form id="address">
                    <h1>Address</h1>
                    Address Line 1:<input type="text" onChange={(e) => this.onInputChange('ad1', e.target.value)} value={this.state.ad1}></input>
                    Address Line 2:<input type="text" onChange={(e) => this.onInputChange('ad2', e.target.value)} value={this.state.ad2}></input>
                    City:<input type="text" onChange={(e) => this.onInputChange('city', e.target.value)} value={this.state.city}></input>
                    State:<input type="text" onChange={(e) => this.onInputChange('state', e.target.value)} value={this.state.state}></input>
                    Zipcode:<input type="text" onChange={(e) => this.onInputChange('shipZip', e.target.value)} value={this.state.shipZip}></input>
                    Phone Number:<input type="text" onChange={(e) => this.onInputChange('phone', e.target.value)} value={this.state.phone}></input>
                    <button type="button" onClick={() => this.props.prevStep()}>Back to User Info</button>
                    <button type="button" onClick={() => {
                        this.props.nextStep()
                        this.props.sendState(this.state);
                    }}>On to Credit Card Info!</button>
                </form>
            )
        } else {
            return null;
        }
    }
}

class Ccinfo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            ccNum: '',
            expiry: '',
            cvv: '',
            billZip: ''
        }
    }

    onInputChange(field, value) {
        this.setState({
            [field]: value
        });
    }

    render() {
        if (this.props.currentForm === 'ccinfo') {
            return (
                <form id="ccInfo">
                    <h1>Credit Card Info</h1>
                    Credit Card Number:<input type="text" onChange={(e) => this.onInputChange('ccNum', e.target.value)} value={this.state.ccNum}></input>
                    Expiry Date:<input type="month" onChange={(e) => this.onInputChange('expiry', e.target.value)} value={this.state.expiry}></input>
                    CVV:<input type="text" onChange={(e) => this.onInputChange('cvv', e.target.value)} value={this.state.cvv}></input>
                    Billing ZIPCode:<input type="text" onChange={(e) => this.onInputChange('billZip', e.target.value)} value={this.state.billZip}></input>
                    <button type="button" onClick={() => this.props.prevStep()}>Back to Address</button>
                    <button type="button" onClick={() => {
                            this.props.nextStep();
                            this.props.sendState(this.state);
                    }}>Summary</button>
                </form>
            )
        } else {
            return null;
        }
    }
}

const Confirmation = (props) => {
    if (props.currentForm === 'confirmation') {
        return (
            <div>
                <h1>Confirmation Page</h1>
                <div>
                    <div>Name: {props.form.name}</div>
                    <div>Email: {props.form.email}</div>
                    <div>Password: {props.form.pass}</div>
                </div>
                <div>
                    <div>Address Line 1: {props.form.ad1}</div>
                    <div>Address Line 2: {props.form.ad2}</div>
                    <div>City: {props.form.city}</div>
                    <div>State: {props.form.state}</div>
                    <div>Zip: {props.form.shipZip}</div>
                    <div>Phone Number: {props.form.phone}</div>
                </div>
                <div>
                    <div>Credit Card #: {props.form.ccNum}</div>
                    <div>Expiry Date: {props.form.expiry}</div>
                    <div>CVV: {props.form.cvv}</div>
                    <div>Billing ZIP Code: {props.form.billZip}</div>
                </div>
                <button type="button" onClick={() => props.nextStep()}>Purchase</button>
            </div>
        )
    } else {
        return null;
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

