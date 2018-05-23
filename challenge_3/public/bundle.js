'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

        _this.state = {
            currentForm: '',
            formArray: ['checkout', 'address', 'ccinfo']
        };
        _this.nextStep.bind(_this);
        return _this;
    }

    _createClass(App, [{
        key: 'nextStep',
        value: function nextStep() {
            if (this.state.currentForm === '') {
                this.setState({
                    currentForm: this.state.formArray[0]
                });
            } else {
                var index = this.state.formArray.indexOf(this.state.currentForm);
                this.setState({
                    currentForm: this.state.formArray[index + 1]
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var checkout = this.state.currentForm === 'checkout' ? React.createElement(Checkout, { nextStep: this.nextStep }) : null;
            var address = this.state.currentForm === 'address' ? React.createElement(Address, { nextStep: this.nextStep }) : null;
            var ccinfo = this.state.currentForm === 'ccinfo' ? React.createElement(Ccinfo, { nextStep: this.nextStep }) : null;

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    { onClick: function onClick() {
                            return _this2.nextStep();
                        } },
                    'Checkout'
                ),
                checkout,
                address,
                ccinfo
            );
        }
    }]);

    return App;
}(React.Component);

var Checkout = function Checkout(props) {
    return React.createElement(
        'form',
        { id: 'checkout' },
        React.createElement(
            'h1',
            null,
            'Checkout'
        ),
        'Name:',
        React.createElement('input', { type: 'text' }),
        'Email:',
        React.createElement('input', { type: 'text' }),
        'Password:',
        React.createElement('input', { type: 'password' }),
        React.createElement(
            'button',
            { type: 'button', onClick: function onClick() {
                    return props.nextStep();
                } },
            'On to Shipping Address!'
        )
    );
};

var Address = function Address(props) {
    return React.createElement(
        'form',
        { id: 'address' },
        React.createElement(
            'h1',
            null,
            'Address'
        ),
        'Address Line 1:',
        React.createElement('input', { type: 'text' }),
        'Address Line 2:',
        React.createElement('input', { type: 'text' }),
        'City:',
        React.createElement('input', { type: 'text' }),
        'State:',
        React.createElement('input', { type: 'text' }),
        'Zipcode:',
        React.createElement('input', { type: 'text' }),
        React.createElement(
            'button',
            { type: 'button', onClick: function onClick() {
                    return props.nextStep();
                } },
            'On to Credit Card Info!'
        )
    );
};

var Ccinfo = function Ccinfo(props) {
    return React.createElement(
        'form',
        { id: 'ccInfo' },
        React.createElement(
            'h1',
            null,
            'Credit Card Info'
        ),
        'Credit Card Number:',
        React.createElement('input', { type: 'text' }),
        'Expiry Date:',
        React.createElement('input', { type: 'date' }),
        'CVV:',
        React.createElement('input', { type: 'text' }),
        'Billing ZIPCode:',
        React.createElement('input', { type: 'text' })
    );
};

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
