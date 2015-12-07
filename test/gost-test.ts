/**
 * Copyright 2015 Semen Kiryushin
 *
 * License: Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Created by Semen Kiryushin on 07.12.2015.
 */

/// <reference path='../defs/mocha/mocha.d.ts' />
/// <reference path='../defs/assert/assert.d.ts' />

import gost = require("../src/gost-34.11-94");
import assert = require("assert");

describe('GOST standart', () => {
	var g:gost.Gost = null;
	beforeEach(() => g = new gost.Gost(false));

	function repeat(chr:string, cnt:number):string {
		return (new Array(cnt + 1)).join(chr);
	}

	it('This is message, length=32 bytes', () => {
		var hash = g.hashString('This is message, length=32 bytes');
		assert.equal(hash, 'B1C466D37519B82E8319819FF32595E047A28CB6F83EFF1C6916A815A637FFFA');
	});

	it('Suppose the original message has length = 50 bytes', () => {
		var hash = g.hashString('Suppose the original message has length = 50 bytes');
		assert.equal(hash, '471ABA57A60A770D3A76130635C1FBEA4EF14DE51F78B4AE57DD893B62F55208');
	});

	it('empty', () => {
		var hash = g.hashString('');
		assert.equal(hash, 'CE85B99CC46752FFFEE35CAB9A7B0278ABB4C2D2055CFF685AF4912C49490F8D');
	});

	it('a', () => {
		var hash = g.hashString('a');
		assert.equal(hash, 'D42C539E367C66E9C88A801F6649349C21871B4344C6A573F849FDCE62F314DD');
	});

	it('abc', () => {
		var hash = g.hashString('abc');
		assert.equal(hash, 'F3134348C44FB1B2A277729E2285EBB5CB5E0F29C975BC753B70497C06A4D51D');
	});

	it('message digest', () => {
		var hash = g.hashString('message digest');
		assert.equal(hash, 'AD4434ECB18F2C99B60CBE59EC3D2469582B65273F48DE72DB2FDE16A4889A4D');
	});

	it('The quick brown fox jumps over the lazy dog', () => {
		var hash = g.hashString('The quick brown fox jumps over the lazy dog');
		assert.equal(hash, '77B7FA410C9AC58A25F49BCA7D0468C9296529315EACA76BD1A10F376D1F4294');
	});

	it('128 symbols "U"', () => {
		var hash = g.hashString(repeat('U', 128));
		assert.equal(hash, '53A3A3ED25180CEF0C1D85A074273E551C25660A87062A52D926A9E8FE5733A4');
	});
});