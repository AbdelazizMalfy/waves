import React, { Component } from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';

class Paypal extends Component {
    render() {

        const onSuccess = (payment) => {

        }

        const onCancel = (data) => {

        }

        const onError = (errors) => {

        }

        let env='sandbox';
        let currency = 'USD';
        let total = this.props.toPay;

        const client = {
            sandbox: 'AbSvixWSuWQdH3ROnvoK9qW2lUDXGT2TlFOINMTHTbnf-qcfNM1qKrPrAnl0VeXmFAP1OfQs3EvubpGc',
            production:''
        }

        return (
            <div>
                <PaypalExpressBtn
                    env={env}
                    client={client}
                    currency={currency}
                    total={total}
                    onError={onError}
                    onSuccess={onSuccess}
                    onCancel={onCancel}
                    style={{
                        size:'large',
                        color:'blue',
                        shape:'rect',
                        label:'checkout'
                    }}
                />
            </div>
        )
    }
}

export default Paypal;