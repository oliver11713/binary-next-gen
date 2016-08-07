import { expect } from 'chai';
import rawContract from 'binary-test-data/contractsForR50';
import changeDurationUnit from '../changeDurationUnit';
import { contractsPerSymbol } from '../../TradeParamsSelector';
import { allTimeRelatedFieldValid } from '../../TradeParamsValidation';

const mockTickTrade = {
    showAssetPicker: false,
    tradeCategory: 'risefall',
    symbolName: 'Volatility 100 Index',
    duration: 5,
    amount: 50,
    durationUnit: 't',
    symbol: 'R_100',
    pipSize: 2,
    type: 'CALL',
    disabled: false,
    basis: 'stake',
};
const mockEndsInTrade = {
    showAssetPicker: false,
    tradeCategory: 'endsinout',
    symbolName: 'Volatility 100 Index',
    barrierType: 'relative',
    duration: 2,
    barrier: 49.87,
    amount: 50,
    durationUnit: 'm',
    symbol: 'R_100',
    pipSize: 2,
    type: 'EXPIRYMISS',
    barrier2: -49.67,
    disabled: false,
    basis: 'stake',
};
const mockedContract = contractsPerSymbol(rawContract);

describe('changeDurationUnit', () => {
    it('should update durationUnit ', () => {
        const updateDurationUnit = changeDurationUnit('m', mockedContract, mockTickTrade);
        expect(updateDurationUnit.durationUnit).to.be.equal('m');
    });

    it('should update barrier for trade with barrier(s)', () => {
        const updateDurationUnit = changeDurationUnit('m', mockedContract, mockEndsInTrade);
        expect(updateDurationUnit.barrier).to.not.equal(mockEndsInTrade.barrier);
    });

    it('should pick a valid duration unit when passed duration unit is not allowed', () => {
        const { duration, durationUnit, dateStart, tradeCategory, type } =
            changeDurationUnit('ss', mockedContract, mockTickTrade);
        expect(durationUnit).to.not.equal('ss');
        expect(allTimeRelatedFieldValid(dateStart, duration, durationUnit, mockedContract[tradeCategory][type])).to.be.true;
    });

    it('should keep old duration if it is allowed', () => {
        const updated = changeDurationUnit('m', mockedContract, mockTickTrade);
        expect(updated.duration).to.be.equal(mockTickTrade.duration);
    });

    it('should change duration if old one is not allowed', () => {
        const updated = changeDurationUnit('s', mockedContract, mockTickTrade);
        expect(updated.duration).to.not.be.equal(mockTickTrade.duration);
    });
});
