from http.server import SimpleHTTPRequestHandler, HTTPServer
import os

class SPAHandler(SimpleHTTPRequestHandler):
    def do_GET(self):
        if os.path.exists(self.path[1:]):
            return super().do_GET()
        else:
            self.path = 'index.html'
            return super().do_GET()

PORT = 8082
os.chdir('dist')
httpd = HTTPServer(("", PORT), SPAHandler)
print(f"Serving at port {PORT}")
httpd.serve_forever()
