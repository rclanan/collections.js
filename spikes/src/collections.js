'use strict';

// What defines a collection?
//
// It can be iterated through.
// it holds stuff- but in some cases it only holds the idea of stuff existing
// Example: a query. you can build a query, it can act like a collection, but it may not actually
// contain data until you try to access it. Until that point, it doesn't really contain stuff, just something describing what the stuff should be if it exists.
// or maybe where the stuff should be, if it exists.
//


// What else do we want from a collection?
// I think collection should work as a factory. It effectively applies iteration functions to the items iterator
// like "forEach", "map", "reduce", "filter", "where"
// it should also be a pub-sub repo for things that are collections, with some sort of built in mapping to a generic style.
// I am uncertain this is actually possible though, unless these items somehow were able to differentiate or force issues.
// maybe I could create a category? though doubtful I could actually covere every possible set
// example: streams- where data it constantly coming in.
// Or queries- where we are building something to retrieve the data and treating it like a collection.
// what about immutable collections?
// Function like "insert" work for things like arrays, lists, dictionaries, and trees. But what about other data structures
// that contain other terminology- like stacks and queues (push/pop)
// Facebook defines collection as something that is either Keyed, indexed, or a set.

// Lightbulb! maybe:
// so, right now arrayIterator is specific to arrays. What if I used that as the base for all iterators.
// I assume I'm using an array there, but I could make all collections have a base set of functionality to map to that
// The question after that would simply be: is there a way to make that not eat up cpu cycles??


// we should also have a collection be convertable. This can de done through pubsub maybe? all of these should implement as, but
// the user should not need to require() in collections, which means collections shouldn't exist like that because of side effects.
