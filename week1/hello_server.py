import socket

# Define socket host and port
SERVER_HOST = '0.0.0.0'
SERVER_PORT = 8000

# Create socket
server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server_socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
server_socket.bind((SERVER_HOST, SERVER_PORT))
server_socket.listen(1)
print('Listening on port %s ...' % SERVER_PORT)

while True:
  # Wait for client connections
  client_connection, client_address = server_socket.accept()

  # Get the client request
  request = client_connection.recv(1024).decode()
  print(request)

  # Generate HTML response body
  html = """
  <!DOCTYPE html>
  <html>

  <head>
    <style>
      body {
        font-family: system-ui;
      }
    </style>
  </head>

  <body>
    <h1>Hello, World</h1>
  </body>

  </html>
  """

  # Prepare HTTP headers
  headers = f"Content-Length: {len(html)}\r\n"
  headers += f"Content-Type: text/html"

  # Now create full HTTP response
  response = f"HTTP/1.0 200 OK\n{headers}\n\n{html}"

  # print(f"\nResponse will be:\n{response}")

  # Send HTTP response
  client_connection.sendall(response.encode())
  client_connection.close()

# Close socket
server_socket.close()