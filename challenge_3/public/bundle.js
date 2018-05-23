'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

        _this.state = {
            currentForm: 'home',
            formArray: ['home', 'userInfo', 'address', 'ccinfo', 'confirmation'],
            form1: {},
            form2: {},
            wholeForm: {}
        };
        return _this;
    }

    _createClass(App, [{
        key: 'f1Function',
        value: function f1Function(obj) {
            this.setState({
                form1: obj
            });
        }
    }, {
        key: 'f2Function',
        value: function f2Function(obj) {
            this.setState({
                form2: obj
            });
        }
    }, {
        key: 'f3Function',
        value: function f3Function(obj) {
            var newObj = {};
            Object.assign(newObj, this.state.form1, this.state.form2, obj);

            this.setState({
                wholeForm: newObj
            });
        }
    }, {
        key: 'prevStep',
        value: function prevStep() {
            var index = this.state.formArray.indexOf(this.state.currentForm);

            this.setState({
                currentForm: this.state.formArray[index - 1]
            });
        }
    }, {
        key: 'nextStep',
        value: function nextStep() {
            var index = this.state.formArray.indexOf(this.state.currentForm);
            if (index + 1 === this.state.formArray.length) {
                this.setState({
                    currentForm: 'home'
                });
            } else {
                this.setState({
                    currentForm: this.state.formArray[index + 1]
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            // const checkoutButton = this.state.currentForm === 'home' ? (<button onClick={() => this.nextStep()}>Checkout</button>) : (null);
            // const userInfo = this.state.currentForm === 'userInfo' ? (<Checkout prevStep={this.prevStep.bind(this)} nextStep={this.nextStep.bind(this)} sendState={this.f1Function.bind(this)} />) : (null);
            // const address = this.state.currentForm === 'address' ? (<Address prevStep={this.prevStep.bind(this)} nextStep={this.nextStep.bind(this)} sendState={this.f2Function.bind(this)} />) : (null);
            // const ccinfo = this.state.currentForm === 'ccinfo' ? (<Ccinfo prevStep={this.prevStep.bind(this)} nextStep={this.nextStep.bind(this)} sendState={this.f3Function.bind(this)} />) : (null);
            // const confirmation = this.state.currentForm === 'confirmation' ? (<Confirmation prevStep={this.prevStep.bind(this)} nextStep={this.nextStep.bind(this)} form={this.state.wholeForm}/>) : (null);

            return React.createElement(
                'div',
                null,
                this.state.currentForm === 'home' ? React.createElement(
                    'button',
                    { onClick: function onClick() {
                            return _this2.nextStep();
                        } },
                    'Checkout'
                ) : null,
                React.createElement(Checkout, { currentForm: this.state.currentForm,
                    prevStep: this.prevStep.bind(this),
                    nextStep: this.nextStep.bind(this),
                    sendState: this.f1Function.bind(this) }),
                React.createElement(Address, { currentForm: this.state.currentForm, prevStep: this.prevStep.bind(this), nextStep: this.nextStep.bind(this), sendState: this.f2Function.bind(this) }),
                React.createElement(Ccinfo, { currentForm: this.state.currentForm, prevStep: this.prevStep.bind(this), nextStep: this.nextStep.bind(this), sendState: this.f3Function.bind(this) }),
                React.createElement(Confirmation, { currentForm: this.state.currentForm, prevStep: this.prevStep.bind(this), nextStep: this.nextStep.bind(this), form: this.state.wholeForm })
            );
        }
    }]);

    return App;
}(React.Component);

var Checkout = function (_React$Component2) {
    _inherits(Checkout, _React$Component2);

    function Checkout(props) {
        _classCallCheck(this, Checkout);

        var _this3 = _possibleConstructorReturn(this, (Checkout.__proto__ || Object.getPrototypeOf(Checkout)).call(this, props));

        _this3.state = {
            name: '',
            email: '',
            pass: ''
        };
        return _this3;
    }

    _createClass(Checkout, [{
        key: 'onInputChange',
        value: function onInputChange(field, value) {
            this.setState(_defineProperty({}, field, value));
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            if (this.props.currentForm === 'userInfo') {
                return React.createElement(
                    'form',
                    { id: 'userInfo' },
                    React.createElement(
                        'h1',
                        null,
                        'User Info'
                    ),
                    'Name:',
                    React.createElement('input', { type: 'text',
                        onChange: function onChange(e) {
                            return _this4.onInputChange('name', e.target.value);
                        },
                        value: this.state.name }),
                    'Email:',
                    React.createElement('input', { type: 'text', onChange: function onChange(e) {
                            return _this4.onInputChange('email', e.target.value);
                        }, value: this.state.email }),
                    'Password:',
                    React.createElement('input', { type: 'password', onChange: function onChange(e) {
                            return _this4.onInputChange('pass', e.target.value);
                        }, value: this.state.pass }),
                    React.createElement(
                        'button',
                        { type: 'button', onClick: function onClick() {
                                return _this4.props.prevStep();
                            } },
                        'Back Home'
                    ),
                    React.createElement(
                        'button',
                        { type: 'button', onClick: function onClick() {
                                _this4.props.nextStep();
                                _this4.props.sendState(_this4.state);
                            } },
                        'On to Shipping Address!'
                    )
                );
            } else {
                return null;
            }
        }
    }]);

    return Checkout;
}(React.Component);

var Address = function (_React$Component3) {
    _inherits(Address, _React$Component3);

    function Address(props) {
        _classCallCheck(this, Address);

        var _this5 = _possibleConstructorReturn(this, (Address.__proto__ || Object.getPrototypeOf(Address)).call(this, props));

        _this5.state = {
            ad1: '',
            ad2: '',
            city: '',
            state: '',
            shipZip: '',
            phone: ''
        };
        return _this5;
    }

    _createClass(Address, [{
        key: 'onInputChange',
        value: function onInputChange(field, value) {
            this.setState(_defineProperty({}, field, value));
        }
    }, {
        key: 'render',
        value: function render() {
            var _this6 = this;

            if (this.props.currentForm === 'address') {
                return React.createElement(
                    'form',
                    { id: 'address' },
                    React.createElement(
                        'h1',
                        null,
                        'Address'
                    ),
                    'Address Line 1:',
                    React.createElement('input', { type: 'text', onChange: function onChange(e) {
                            return _this6.onInputChange('ad1', e.target.value);
                        }, value: this.state.ad1 }),
                    'Address Line 2:',
                    React.createElement('input', { type: 'text', onChange: function onChange(e) {
                            return _this6.onInputChange('ad2', e.target.value);
                        }, value: this.state.ad2 }),
                    'City:',
                    React.createElement('input', { type: 'text', onChange: function onChange(e) {
                            return _this6.onInputChange('city', e.target.value);
                        }, value: this.state.city }),
                    'State:',
                    React.createElement('input', { type: 'text', onChange: function onChange(e) {
                            return _this6.onInputChange('state', e.target.value);
                        }, value: this.state.state }),
                    'Zipcode:',
                    React.createElement('input', { type: 'text', onChange: function onChange(e) {
                            return _this6.onInputChange('shipZip', e.target.value);
                        }, value: this.state.shipZip }),
                    'Phone Number:',
                    React.createElement('input', { type: 'text', onChange: function onChange(e) {
                            return _this6.onInputChange('phone', e.target.value);
                        }, value: this.state.phone }),
                    React.createElement(
                        'button',
                        { type: 'button', onClick: function onClick() {
                                return _this6.props.prevStep();
                            } },
                        'Back to User Info'
                    ),
                    React.createElement(
                        'button',
                        { type: 'button', onClick: function onClick() {
                                _this6.props.nextStep();
                                _this6.props.sendState(_this6.state);
                            } },
                        'On to Credit Card Info!'
                    )
                );
            } else {
                return null;
            }
        }
    }]);

    return Address;
}(React.Component);

var Ccinfo = function (_React$Component4) {
    _inherits(Ccinfo, _React$Component4);

    function Ccinfo(props) {
        _classCallCheck(this, Ccinfo);

        var _this7 = _possibleConstructorReturn(this, (Ccinfo.__proto__ || Object.getPrototypeOf(Ccinfo)).call(this, props));

        _this7.state = {
            ccNum: '',
            expiry: '',
            cvv: '',
            billZip: ''
        };
        return _this7;
    }

    _createClass(Ccinfo, [{
        key: 'onInputChange',
        value: function onInputChange(field, value) {
            this.setState(_defineProperty({}, field, value));
        }
    }, {
        key: 'render',
        value: function render() {
            var _this8 = this;

            if (this.props.currentForm === 'ccinfo') {
                return React.createElement(
                    'form',
                    { id: 'ccInfo' },
                    React.createElement(
                        'h1',
                        null,
                        'Credit Card Info'
                    ),
                    'Credit Card Number:',
                    React.createElement('input', { type: 'text', onChange: function onChange(e) {
                            return _this8.onInputChange('ccNum', e.target.value);
                        }, value: this.state.ccNum }),
                    'Expiry Date:',
                    React.createElement('input', { type: 'month', onChange: function onChange(e) {
                            return _this8.onInputChange('expiry', e.target.value);
                        }, value: this.state.expiry }),
                    'CVV:',
                    React.createElement('input', { type: 'text', onChange: function onChange(e) {
                            return _this8.onInputChange('cvv', e.target.value);
                        }, value: this.state.cvv }),
                    'Billing ZIPCode:',
                    React.createElement('input', { type: 'text', onChange: function onChange(e) {
                            return _this8.onInputChange('billZip', e.target.value);
                        }, value: this.state.billZip }),
                    React.createElement(
                        'button',
                        { type: 'button', onClick: function onClick() {
                                return _this8.props.prevStep();
                            } },
                        'Back to Address'
                    ),
                    React.createElement(
                        'button',
                        { type: 'button', onClick: function onClick() {
                                _this8.props.nextStep();
                                _this8.props.sendState(_this8.state);
                            } },
                        'Summary'
                    )
                );
            } else {
                return null;
            }
        }
    }]);

    return Ccinfo;
}(React.Component);

var Confirmation = function Confirmation(props) {
    if (props.currentForm === 'confirmation') {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'h1',
                null,
                'Confirmation Page'
            ),
            React.createElement(
                'div',
                null,
                React.createElement(
                    'div',
                    null,
                    'Name: ',
                    props.form.name
                ),
                React.createElement(
                    'div',
                    null,
                    'Email: ',
                    props.form.email
                ),
                React.createElement(
                    'div',
                    null,
                    'Password: ',
                    props.form.pass
                )
            ),
            React.createElement(
                'div',
                null,
                React.createElement(
                    'div',
                    null,
                    'Address Line 1: ',
                    props.form.ad1
                ),
                React.createElement(
                    'div',
                    null,
                    'Address Line 2: ',
                    props.form.ad2
                ),
                React.createElement(
                    'div',
                    null,
                    'City: ',
                    props.form.city
                ),
                React.createElement(
                    'div',
                    null,
                    'State: ',
                    props.form.state
                ),
                React.createElement(
                    'div',
                    null,
                    'Zip: ',
                    props.form.shipZip
                ),
                React.createElement(
                    'div',
                    null,
                    'Phone Number: ',
                    props.form.phone
                )
            ),
            React.createElement(
                'div',
                null,
                React.createElement(
                    'div',
                    null,
                    'Credit Card #: ',
                    props.form.ccNum
                ),
                React.createElement(
                    'div',
                    null,
                    'Expiry Date: ',
                    props.form.expiry
                ),
                React.createElement(
                    'div',
                    null,
                    'CVV: ',
                    props.form.cvv
                ),
                React.createElement(
                    'div',
                    null,
                    'Billing ZIP Code: ',
                    props.form.billZip
                )
            ),
            React.createElement(
                'button',
                { type: 'button', onClick: function onClick() {
                        return props.nextStep();
                    } },
                'Purchase'
            )
        );
    } else {
        return null;
    }
};

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
