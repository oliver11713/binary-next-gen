import React from 'react';
import MarketsSelect from '../common/MarketsSelect';

export default class PricingTableFilter extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            contractType: 'higher',
            market: 'AUD',
            payoutCurrency: 'usd',
            step: '1',
            stepTerms: 'moneyness',
            from: '95',
            stepFreq: 'daily',
            fromDate: Date.now()
        };
    }

    render() {
        return (
            <form>
                <div className="row">
                    <fieldset>
                        <label for="pricingtable_bet_type">Contract Type:</label>
                        <select id="pricingtable_bet_type">
                            <option value="CALL" selected="selected">Higher</option>
                            <option value="PUT">Lower</option>
                            <option value="ONETOUCH">Touches</option>
                            <option value="NOTOUCH">Does not touch</option>
                            <option value="RANGE">Stays between</option>
                            <option value="UPORDOWN">Goes outside</option>
                            <option value="EXPIRYRANGE">Ends between</option>
                            <option value="EXPIRYMISS">Ends outside</option>
                        </select>
                    </fieldset>

                    <fieldset>
                        <label for="pricingtable_underlying">Market:</label>
                        <MarketsSelect id="pricingtable_underlying" />
                    </fieldset>

                    <fieldset>
                        <label for="pricingtable_currency">Payout Currency:</label>
                        <select id="pricingtable_currency">
                            <option value="USD">USD</option>
                            <option value="EUR">EUR</option>
                            <option value="GBP">GBP</option>
                            <option value="AUD">AUD</option>
                        </select>
                    </fieldset>

                    <fieldset>
                        <label for="low_strike">Low barrier:</label>
                        <input type="number" id="low_strike" value="86.022" />
                        <span>(Absolute barrier)</span>
                    </fieldset>

                    <fieldset>
                        <label>Horizontal:</label>
                        <label id="strike_label">Barrier</label>
                        <label id="high_strike_label">High barrier</label>
                    </fieldset>

                    <fieldset>
                        <label>From (%):</label>
                        <input type="number" value="95" />
                    </fieldset>

                    <fieldset>
                        <label>Vertical:</label>
                        <label>Expiry</label>
                    </fieldset>

                    <fieldset>
                        <label for="expiry_step">Step:</label>
                        <select id="expiry_step">
                            <option value="Daily">Daily</option>
                            <option value="Weekly">Weekly</option>
                            <option value="Monthly">Monthly</option>
                            <option value="Standard expiry">Standard expiry</option>
                        </select>
                    </fieldset>

                    <fieldset>
                        <label for="from_expiry">From:</label>
                        <input type="date" id="from_expiry" value="2015-07-31" />
                    </fieldset>

                    <fieldset class="strike-step">
                        <label for="strike_step">Step (%):</label>
                        <div class="row">
                            <div>
                                <input type="number" value="1" />
                            </div>
                            <div>
                                <select>
                                    <option value="Moneyness terms">Moneyness terms</option>
                                    <option value="Barrier terms">Barrier terms</option>
                                </select>
                            </div>
                        </div>
                    </fieldset>
                </div>

                <p>
                    <button>Calculate</button>
                </p>
            </form>
        );
    }
}
