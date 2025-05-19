# Week 9

Today we will update our Movies app to synchronize with a custom back-end that manages
a database of movie votes.

* Live URL of our back-end dashboard: https://mpcs-movies-ac5358d2aa9a.herokuapp.com
* Git repository for back-end (optional): https://github.com/MPCS52553-SPRING-2025/ruby-movie-db.git

We will learn when to use a React hook called `useEffect` to control when 
our API calls are executed during a component's lifecycle.

* Review of HTTP 
  * HTTP Resources
    * Uniquely identified by URL
    * Can be potentially "CRUD"-ed depending on server functionality
    * Take a look at the [url parsing diagram](url_structure.png)
  * Inspecting network traffic in Chrome
  * Demo: HTTP requests with `curl -v [url]` 
  
  * HTTP Requests
    * General form: `<METHOD>` `<RESOURCE PATH>` `HTTP/<VERSION>`
    * Example: `GET / HTTP/1.1`
    * `METHOD` is one of: `GET` `POST` `PATCH` `DELETE` `PUT` `HEAD` `OPTIONS`
    * `RESOURCE_PATH` is a path relative to the `Host:` header value 
    * List of "headers" (key-value pairs)
      * `Host`
      * `User-Agent`
      * `Accept:`
    * (Optional) Body
      * HTTP 1.1 only supports text encoding; must use base64 if transmitting binary data
      * HTTP 2.0 is binary-encoded

  * HTTP Responses
    * General form: 
      * `HTTP/<VERSION>` `<STATUS CODE>` `<STATUS DESCRIPTION`>
      * Example: `HTTP/1.1 200 OK`
      * List of "headers" (key-value pairs)
        * `Content-Type` reports the MIME type of the response
        * `Content-Length`
      * (Optional) Body
        * Can consist of one part or multiple parts
        * (Unusual) If multiple parts, MIME types are embedded within each part

  * HTTP response status codes
    * 100-199: Connection information
    * 200-299: Success
    * 300-399: Redirection
    * 400-499: Client Error
    * 500-599: Server Error

* Making HTTP requests with JavaScript
  * Using `fetch()` to access a remote resource
  * Using `async` and `await` for simplifying asynchronous patterns
  * Or using `Promise` objects and `then()`
