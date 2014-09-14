---
layout: post
title: "Java: Marshalling in Java"
date: 2011-12-21T19:59:00+05:30
categories:
 - java
---
Marshalling is a technique that can be easily understood and utilized efficiently. It is the process of converting a POJO(Plain Old Java Object) in memory into a format that can be written to disk or send via network, usually in text formats like xml or json. The reverse of this technique is called unmarshalling.

## Difference between Marshalling and Serialization:
Marshalling is similar to Serialization in practice but the difference is that, Marshalling also saves the code of an object in addition to its state.

## Example
In the following example to explain marshalling, standard JAXB(Java Architecture for XML Binding) is used. For marshalling an object using JAXB, it must have annotation for the root element - `@XmlRootElement`

``` java
package blog.warfox.tutorials.marshalling;

import javax.xml.bind.annotation.XmlRootElement;

/**
 * Student class for Marshalling demo example
 * @author warfox
 */
@XmlRootElement(name="student")

public class Student {

     private String name;
     private int rollNo;
     private double marks;
     private int rank;

     public String getName() {
          return this.name;
     }

     public void setName(String name) {
          this.name = name;
     }

     public int getRollNo() {
          return this.rollNo;
     }

     public void setRollNo(int rollNo) {
          this.rollNo = rollNo;
     }

     public double getMarks() {
          return this.marks;
     }

     public void setMarks(double marks) {
          this.marks = marks;
     }

     public int getRank() {
          return this.rank;
     }

     public void setRank(int rank) {
          this.rank = rank;
     }
}
```
</pre>

## Marshaller class which does the marshalling job
An instance of student is created and given for marshalling.

``` java
package blog.warfox.tutorials.marshalling;

import java.io.StringWriter;

import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Marshaller;

public class MyMarshaller {

     public static String marshall(Object object) throws JAXBException {

        JAXBContext context = JAXBContext.newInstance(object.getClass());

        Marshaller m = context.createMarshaller();
        m.setProperty(Marshaller.JAXB_FORMATTED_OUTPUT, true);

        StringWriter writer = new StringWriter();
        m.marshal(object, writer);

        return writer.toString();
    }

    public static void main(String[] args) throws JAXBException {

        Student student = new Student();
        student.setName("Name");
        student.setRollNo(1);
        student.setMarks(99.99);
        student.setRank(1);

        System.out.println(marshall(student));
   }
}
```
Output:

``` xml
<student>
    <marks>99.99</marks>
    <name>Name</name>
    <rank>1</rank>
    <rollno>1</rollno>
</student>
```

In the above example, JAXB has automatically copied the xml tags from the property names of `Student` class. We can set our own tag names by using JAXB's `@XmlElement` annotation on the access method as follows.

``` java
package blog.warfox.tutorials.marshalling;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

/**
 * Student class for Marshalling demo example
 * @author warfox
 *
 */
@XmlRootElement(name="student")
public class Student {

   private String name;

   private int rollNo;

   private double marks;

   private int rank;

   @XmlElement(name="student-name")
   public String getName() {
      return this.name;
   }

   public void setName(String name) {
     this.name = name;
   }

   @XmlElement(name="student-rollno")
   public int getRollNo() {
     return this.rollNo;
   }

   public void setRollNo(int rollNo) {
     this.rollNo = rollNo;
   }

   @XmlElement(name="student-marks")
   public double getMarks() {
     return this.marks;
   }

   public void setMarks(double marks) {
     this.marks = marks;
   }

   @XmlElement(name="student-rank")
   public int getRank() {
     return this.rank;
   }

   public void setRank(int rank) {
    this.rank = rank;
   }
}
```

Output:
``` xml
<student>
    <student-marks>99.99</student-marks>
    <student-name>Name</student-name>
    <student-rank>1</student-rank>
    <student-rollno>1</student-rollno>
</student>
```
*Share this tutorial if it helped you*
