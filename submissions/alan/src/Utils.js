import {SITH_LORD_LIST} from './Constants';
export function emptyList(size = SITH_LORD_LIST) {
	return _.fill(Array(size), {isEmptyObject: true});
}