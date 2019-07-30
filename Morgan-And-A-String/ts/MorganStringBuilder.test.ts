import { MorganStringBuilder } from './MorganStringBuilder';
import { expect } from 'chai';

describe('MorganStringBuilder.solveProblem', () => {

    it('should return 4', () => {
        expect(MorganStringBuilder.buildMorganString('JACK', 'DANIEL')).to.equal('DAJACKNIEL')
        expect(MorganStringBuilder.buildMorganString('ABACABA', 'ABACABA',)).to.equal('AABABACABACABA')
    })

})