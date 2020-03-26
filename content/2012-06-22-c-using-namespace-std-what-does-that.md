---
layout: post
title: "c++:: Using namespace std; What does that mean?"
date: 2012-06-22T19:36:00+05:30
categories: Programming
tags:
 - C/C++
---

Namespaces in C++ are used to define a scope and allows us to group global classes, functions and/or objects into one group.
When you use <code><strong>using namespace std;</strong></code> you are instructing C++ compiler to use the standard C++ library. If you don't give this instruction, then you will have to use <code><strong>std::</strong></code>, each time you use a standard C++ function/entity.
 Have a look at the following example, which is very straight forward.

```cpp
#include &lt;iostream&gt;
using namespace std;
class MyClass {
        public: void sayHello();
};
void MyClass::sayHello() {
     cout<<"Hello World!\n";
}
int main() {
       MyClass myClass;
       myClass.sayHello();
       return 0;
}
```

If you are not using namespace in the above example, you will have to use std:: everywhere you use cout, like the following.

```cpp
#include &lt;iostream&gt;
class MyClass {
        public: void sayHello();
};
void MyClass::sayHello() {
        std::cout<<"Hello World!\n";
}
int main() {
       MyClass myClass;
       myClass.sayHello();
       return 0;
}
```

<h2>More about namespaces in C++</h2>Namespaces allow you to group different entities together. You may create your own namespaces for grouping your entities, and access them the same way you did for '<em>std</em>' namespace.

 ```cpp
#include &lt;iostream&gt;
using namespace std;
namespace myAwesomeNamespace {
  int a=10, b;
}
namespace myAwesomerNamespace {
  int a=20, b;
}
int main() {
   cout&lt;&lt;"Awesome a = "&lt;&lt;myAwesomeNamespace::a;
   cout&lt;&lt;"Awesomer a = "&lt;&lt;myAwesomerNamespace::a;
   return 0;
}
```

You may also use <code><strong>using namespace</strong></code> with your custom namespces.

 ```cpp
#include &lt;iostream&gt;
using namespace std;
namespace myAwesomeNamespace {
  int a=10, b;
}
namespace myAwesomerNamespace {
  int a=20, b;
}
int main() {
   using namespace myAwesomeNamespace;
   cout&lt;&lt;"Awesome a = "&lt;&lt;a;
   cout&lt;&lt;"Awesomer a = "&lt;&lt;myAwesomerNamespace::a;
   return 0;
}
```

Warning: If you use namepaces that have same entities grouped in it, then it will result in ambiguity error.

<div class="my-amazon-links">
<h3>Books you might like:</h3> <a href="http://www.amazon.com/gp/product/1840784326/ref=as_li_ss_il?ie=UTF8&tag=thelaccur-20&linkCode=as2&camp=1789&creative=390957&creativeASIN=1840784326"><img border="0" src="http://ws.assoc-amazon.com/widgets/q?_encoding=UTF8&Format=_SL160_&ASIN=1840784326&MarketPlace=US&ID=AsinImage&WS=1&tag=thelaccur-20&ServiceVersion=20070822" ></a><img src="http://www.assoc-amazon.com/e/ir?t=thelaccur-20&l=as2&o=1&a=1840784326" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" /> <a href="http://www.amazon.com/gp/product/0672329417/ref=as_li_ss_il?ie=UTF8&tag=thelaccur-20&linkCode=as2&camp=1789&creative=390957&creativeASIN=0672329417"><img border="0" src="http://ws.assoc-amazon.com/widgets/q?_encoding=UTF8&Format=_SL160_&ASIN=0672329417&MarketPlace=US&ID=AsinImage&WS=1&tag=thelaccur-20&ServiceVersion=20070822" ></a><img src="http://www.assoc-amazon.com/e/ir?t=thelaccur-20&l=as2&o=1&a=0672329417" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" /> <a href="http://www.amazon.com/gp/product/0596004192/ref=as_li_ss_il?ie=UTF8&tag=thelaccur-20&linkCode=as2&camp=1789&creative=390957&creativeASIN=0596004192"><img border="0" src="http://ws.assoc-amazon.com/widgets/q?_encoding=UTF8&Format=_SL160_&ASIN=0596004192&MarketPlace=US&ID=AsinImage&WS=1&tag=thelaccur-20&ServiceVersion=20070822" ></a><img src="http://www.assoc-amazon.com/e/ir?t=thelaccur-20&l=as2&o=1&a=0596004192" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />  <a href="http://www.amazon.com/gp/product/020170353X/ref=as_li_ss_il?ie=UTF8&tag=thelaccur-20&linkCode=as2&camp=1789&creative=390957&creativeASIN=020170353X"><img border="0" src="http://ws.assoc-amazon.com/widgets/q?_encoding=UTF8&Format=_SL160_&ASIN=020170353X&MarketPlace=US&ID=AsinImage&WS=1&tag=thelaccur-20&ServiceVersion=20070822" ></a><img src="http://www.assoc-amazon.com/e/ir?t=thelaccur-20&l=as2&o=1&a=020170353X" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" /> <a href="http://www.amazon.com/gp/product/0470317264/ref=as_li_ss_il?ie=UTF8&tag=thelaccur-20&linkCode=as2&camp=1789&creative=390957&creativeASIN=0470317264"><img border="0" src="http://ws.assoc-amazon.com/widgets/q?_encoding=UTF8&Format=_SL160_&ASIN=0470317264&MarketPlace=US&ID=AsinImage&WS=1&tag=thelaccur-20&ServiceVersion=20070822" ></a><img src="http://www.assoc-amazon.com/e/ir?t=thelaccur-20&l=as2&o=1&a=0470317264" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
