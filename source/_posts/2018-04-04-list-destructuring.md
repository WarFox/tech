---
title: "List Destructuring"
date: 2018-04-04 00:05:01
tags:
  - clojure
  - scala
  - ruby
  - python
  - javascript
---

I was reading the [Clojure for Brave and True](https://www.braveclojure.com/) book, when I stumbled upon [destructring](https://www.braveclojure.com/do-things/#Destructuring) feature in Clojure.

Clojure does it neatly! https://clojure.org/guides/destructuring

This example is taken directly from the book.

```clojure
(defn chooser
  [[first-choice second-choice & unimportant-choices]]
  (println (str "Your first choice is: " first-choice))
  (println (str "Your second choice is: " second-choice))
  (println (str "We're ignoring the rest of your choices. "
                "Here they are in case you need to cry over them: "
                (clojure.string/join ", " unimportant-choices))))

(chooser ["Marmalade", "Handsome Jack", "Pigpen", "Aquaman"])
; => Your first choice is: Marmalade
; => Your second choice is: Handsome Jack
; => We're ignoring the rest of your choices. Here they are in case \
     you need to cry over them: Pigpen, Aquaman
```

Now I wanted to see how other languages support this.

## Scala

Scala has powerful pattern matching abilities for destructuring a list.

```scala
val first::second::rest = List(1,2,3,4,5,6,7,8,9,10)
// first: Int = 1
// second: Int = 2
// rest: List[Int] = List(3, 4, 5, 6, 7, 8, 9, 10)
```

Scala's pattern matching is so powerful that you can go further with it. For example you can find the second last element, or third last element and what ever is inbetween them.

```scala
val first :: second:: (inbetween :+ thirdLast :+ secondLast :+ last) = List(1,2,3,4,5,6,7,8,9,10)
// first: Int = 1
// second: Int = 2
// inbetween: List[Int] = List(3, 4, 5, 6, 7, 8)
// secondLast: Int = 9
// last: Int = 10
```

## Ruby

As you know Ruby has this ability as well!

```ruby
> first, second = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
> first
=> 1
> second
=> 2
```

```ruby
> first, second, *rest = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
> first
=> 1
> second
=> 2
> rest
=> [3, 4, 5, 6, 7, 8, 9, 10]
```

```ruby
> first, second, *inbetween, secondLast, last = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
> last
=> 10
> secondLast
=> 9
> inbetween
=> [3, 4, 5, 6, 7, 8]
> first
=> 1
> second
=> 2
```

## Python

Python also does it beautifully.

```python
[first, second, rest] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
[first, second, *inbetween, secondLast, last] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
# >>> secondLast
# 9
# >>> last
# 10
# >>> second
# 2
# >>> first
# 1
# >>> inbetween
# [3, 4, 5, 6, 7, 8]
```

## Javascript

Javascript also support's destructuring.

```js
const [first, second, ...rest] = [1, 2, 3, 4, 5, 6, 7];
```

## Java

Are you kidding me? :smile:

## References

- https://clojure.org/guides/destructuring
- https://www.braveclojure.com/do-things/#Destructuring
- https://gist.github.com/john2x/e1dca953548bfdfb9844
- http://blog.brunobonacci.com/2014/11/16/clojure-complete-guide-to-destructuring/
- https://alvinalexander.com/scala/how-to-use-lists-nil-cons-scala-match-case-expressions
- http://tony.pitluga.com/2011/08/08/destructuring-with-ruby.html
- http://blog.fogus.me/2011/01/12/pattern-matching-vs-destructuring-to-the-death/
