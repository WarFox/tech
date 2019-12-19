---
layout: post
title: "Webservices using JDeveloper"
date: 2009-12-09T14:30:00+05:30
categories: Java
tags:
 - java
---
* WSDL&nbsp; (Web Services Description Language) : XML-based language for defining Web Services
* SOAP (Simple Object Access Protocol): XML-based language for accessing webservices over HTTP
* UDDI (Univesal Description, Discovery and Integration): Universal catalog of web services that allow softwares to discover and integrate with services on web.
1. Start&nbsp; JDeveloper 10.1.3
2. Start OC4J 10.1.3 {&#37;JDEV_HOME&#37;}\jdev\bin\start_oc4j.bat
3. Create a new Application server connection in JDeveloper to this standalone OC4J 10.1.3 and test connection.
4. Create your java application and make class. For example make a hello world application that accepts {name} and returns Hello World! Welcome {name}.
5. Right click on your application name in Application Navigator of your JDeveloper and then click new and select **Java Web Service** from **Web Services** inside **Business Tier** and click ok.
6. Select J2EE 1.4 (JAX-RPC) Web Service
7. Proceed to enter the details.
8. Give a name for your web service and select component to publish. ( Your java application)
9. Check **Generate annotations into class** and click next
10. Select your method from **Available Methods list** and click **Finish**.

Now some processing will be done and required files will be generated.
Next steps:
1. Open your WSDL document from **WEB-INF\wsdl** (if not already open in the editior).
2. From the source tab copy the url in the **soap: address** node.
3. Deploy the web service to OC4J application server you started by right clicking the **WebServices.deploy** file under **Resources** in the Application Navigation
4. Paste the url taken from WSDL document to a web browser address bar.
5. Testing screen for your application will appear
Detailed description is available in this location: [Deploy WebService in OC4J using JDeveloper 10.1.3](http://www.oracle.com/technology/obe/obe1013jdev/ws/wsandascontrol.htm)
