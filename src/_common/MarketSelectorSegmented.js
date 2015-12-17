import React, { PropTypes } from 'react';
import { SegmentedControl } from '../_common';

const MarketSelector = ({ markets, selected, prefixRoute }) => {
	const marketLinks = markets.map(market => ({
		href: prefixRoute + market.toLowerCase(),
		text: market,
	}));
	const marketFromRouteIdx = markets.indexOf(m => m.toLowerCase() === selected);

	return (
		<SegmentedControl segments={marketLinks} activeIndex={marketFromRouteIdx} />
	);
};

MarketSelector.propTypes = {
	markets: PropTypes.array.isRequired,
	selected: PropTypes.string,
};

MarketSelector.defaultProps = {
	markets: [],
	selected: 'favorites',
};

export default MarketSelector;