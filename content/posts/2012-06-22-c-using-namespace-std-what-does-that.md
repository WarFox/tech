---
title: "c++:: Using namespace std; What does that mean?"
date: 2012-06-22T19:36:00+05:30
categories:
 - Programming
tags:
 - C/C++
---

Namespaces in C++ are used to define a scope and allows us to group global classes, functions and/or objects into one group.
When you use <code><strong>using namespace std;</strong></code> you are instructing C++ compiler to use the standard C++ library. If you don't give this instruction, then you will have to use <code><strong>std::</strong></code>, each time you use a standard C++ function/entity.
 Have a look at the following example, which is very straight forward.

```cpp
#include <iostream>;
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
#include <iostream>;
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

## More about namespaces in C++

Namespaces allow you to group different entities together. You may create your own namespaces for grouping your entities, and access them the same way you did for '<em>std</em>' namespace.

 ```cpp
#include <iostream>;
using namespace std;
namespace myAwesomeNamespace {
  int a=10, b;
}
namespace myAwesomerNamespace {
  int a=20, b;
}
int main() {
   cout<<"Awesome a = "<<myAwesomeNamespace::a;
   cout<<"Awesomer a = "<<myAwesomerNamespace::a;
   return 0;
}
```

You may also use <code><strong>using namespace</strong></code> with your custom namespces.

 ```cpp
#include <iostream&gt;
using namespace std;
namespace myAwesomeNamespace {
  int a=10, b;
}
namespace myAwesomerNamespace {
  int a=20, b;
}
int main() {
   using namespace myAwesomeNamespace;
   cout<<"Awesome a = "<<a;
   cout<<"Awesomer a = "<<myAwesomerNamespace::a;
   return 0;
}
```

Warning: If you use namepaces that have same entities grouped in it, then it will result in ambiguity error.

