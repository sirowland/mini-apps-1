class App extends React.Component {

    constructor() {
        super();

        this.state = {
            currentForm: 'home',
            formArray: ['home', 'userInfo', 'address', 'ccinfo', 'confirmation'],
            form1: {},
            form2: {},
            wholeForm: {}
        }
    }

    postToMongo(url, obj) {
        fetch(url, {
            body: JSON.stringify(obj),
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
        })
        .catch((err) => {
            console.log(err);
        });
    }

    saveF1(obj) {
        this.postToMongo('/users', obj);

        this.setState({
            form1: obj
        })
    }

    saveF2(obj) {
        var address = [];
        for (var key in obj) {
            if (key !== 'shipZip' && key !== 'phone') {
                if (obj[key]) {
                    address.push(obj[key]);
                    delete obj[key];
                } else {
                    delete obj[key];
                }
            }
        }
        address = address.join(',');
        obj['address'] = address;

        this.postToMongo('/addresses', obj);

        this.setState({
            form2: obj
        });
    }

    saveEntireForm(obj) {
        this.postToMongo('/ccinfo', obj);

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
        return (
            <div>
                {this.state.currentForm === 'home' ? (<button onClick={() => this.nextStep()}>Checkout</button>) : (null)}
                <Checkout currentForm={this.state.currentForm}
                    prevStep={this.prevStep.bind(this)}
                    nextStep={this.nextStep.bind(this)}
                    sendState={this.saveF1.bind(this)} />
                <Address currentForm={this.state.currentForm} prevStep={this.prevStep.bind(this)} nextStep={this.nextStep.bind(this)} sendState={this.saveF2.bind(this)} />
                <Ccinfo currentForm={this.state.currentForm} prevStep={this.prevStep.bind(this)} nextStep={this.nextStep.bind(this)} sendState={this.saveEntireForm.bind(this)} />
                <Confirmation currentForm={this.state.currentForm} prevStep={this.prevStep.bind(this)} nextStep={this.nextStep.bind(this)} form={this.state.wholeForm} />
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
            password: ''
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
                    Name:<input type="text" onChange={(e) => this.onInputChange('name', e.target.value)} value={this.state.name}></input>
                    Email:<input type="text" onChange={(e) => this.onInputChange('email', e.target.value)} value={this.state.email}></input>
                    Password:<input type="password" onChange={(e) => this.onInputChange('password', e.target.value)} value={this.state.password}></input>
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
                    <div>Password: {props.form.password}</div>
                </div>
                <div>
                    <div>Address: {props.form.address}</div>
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

