object Closure {

    // define the closure using one line of code, power of Scala
    def incrementBy(x:Int) = (y:Int) => x + y

    def main(args: Array[String]) = {

        var incrementBy3 = incrementBy(3)
        val incrementBy5 = incrementBy(5)

        println(incrementBy3(5))
        println(incrementBy5(10))
        println(incrementBy(20)(20))
    }
}
