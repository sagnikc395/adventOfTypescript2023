/*
update CookieSurveyInput so that it will return a union of 
all the names of the various different cookies.

check from cookieInventory

*/
//making a generic function that takes in a object and
// returns a union type of all the keys of the object as strings.
type CookieSurveyInput<T> = Extract<keyof T,string>;
