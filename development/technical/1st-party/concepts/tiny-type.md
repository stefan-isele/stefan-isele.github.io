---
layout: page
---
# Tiny Type

A Tiny Type is a small class that encapsulates a String or primitive in a domain specific class.

Defining the domain type explicitly provides some advantages :
* makes the domain type visible 
* allows trefactoring
* provides a place for all methods acting on the type
* enforces validation
   * the constructor validates the provided string/primitive    
   * all instances are implicitly valid    
* enforces a canonical presentation
   * the constructor strictly allows only the canonical presentation
   * factory methods may be less strict but convert to the canonical presentation 
 

#### Example : 
  

* links
  * [Big benefits from tiny types](https://techbeacon.com/app-dev-testing/big-benefits-tiny-types-how-make-your-codes-domain-concepts-explicit)
  * [Primitive Obsession](http://wiki.c2.com/?PrimitiveObsession)
  * [git-hub-pages mit jekyll (german)](https://www.dev-insider.de/github-pages-in-verbindung-mit-jekyll-a-879571/)
