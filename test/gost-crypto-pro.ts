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

describe('GOST Crypto pro', () => {
	var g:gost.Gost = null;
	beforeEach(() => g = new gost.Gost(true));

	function repeat(chr:string, cnt:number):string {
		return (new Array(cnt + 1)).join(chr);
	}

	it('This is message, length=32 bytes', () => {
		var hash = g.hashString('This is message, length=32 bytes');
		assert.equal(hash, '2CEFC2F7B7BDC514E18EA57FA74FF357E7FA17D652C75F69CB1BE7893EDE48EB');
	});

	it('Suppose the original message has length = 50 bytes', () => {
		var hash = g.hashString('Suppose the original message has length = 50 bytes');
		assert.equal(hash, 'C3730C5CBCCACF915AC292676F21E8BD4EF75331D9405E5F1A61DC3130A65011');
	});

	it('empty', () => {
		var hash = g.hashString('');
		assert.equal(hash, '981E5F3CA30C841487830F84FB433E13AC1101569B9C13584AC483234CD656C0');
	});

	it('a', () => {
		var hash = g.hashString('a');
		assert.equal(hash, 'E74C52DD282183BF37AF0079C9F78055715A103F17E3133CEFF1AACF2F403011');
	});

	it('abc', () => {
		var hash = g.hashString('abc');
		assert.equal(hash, 'B285056DBF18D7392D7677369524DD14747459ED8143997E163B2986F92FD42C');
	});

	it('message digest', () => {
		var hash = g.hashString('message digest');
		assert.equal(hash, 'BC6041DD2AA401EBFA6E9886734174FEBDB4729AA972D60F549AC39B29721BA0');
	});

	it('The quick brown fox jumps over the lazy dog', () => {
		var hash = g.hashString('The quick brown fox jumps over the lazy dog');
		assert.equal(hash, '9004294A361A508C586FE53D1F1B02746765E71B765472786E4770D565830A76');
	});

	it('128 symbols "U"', () => {
		var hash = g.hashString(repeat('U', 128));
		assert.equal(hash, '1C4AC7614691BBF427FA2316216BE8F10D92EDFD37CD1027514C1008F649C4E8');
	});
});