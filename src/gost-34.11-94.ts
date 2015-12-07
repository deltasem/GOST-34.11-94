/**
 * Copyright 2014 Semen Kiryushin
 *
 * License: Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Created by Semen Kiryushin on 16.08.2015.
 */

export class Gost {
	constructor(isCryptoPro:boolean) {
	}

	hashString(input:string):string {
		return null;
	}
}

export function gostString(input:string):string {
	var g = new Gost(false);
	return g.hashString(input);
}

export function gostStringCryptoPro(input:string):string {
	var g = new Gost(true);
	return g.hashString(input);
}
