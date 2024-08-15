
using HTTP_Client.Models;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace HTTP_Client.Services
{
    public class PostServices
    {
        private HttpClient httpClient;
        private ObservableCollection<Post> posts;
        private JsonSerializerOptions jsonSerializerOptions;
        public PostServices()
        {
            httpClient = new HttpClient();
            jsonSerializerOptions = new JsonSerializerOptions {
                PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
                WriteIndented = true,
            };

        }

        public async Task<ObservableCollection<Post>> GetPostsAsync()
        {
            Uri uri = new Uri("https://jsonplaceholder.typicode.com/posts");
                try
            {
                HttpResponseMessage response = await httpClient.GetAsync(uri);
                if (response.IsSuccessStatusCode) { 
                    string content = await response.Content.ReadAsStringAsync();
                    posts = JsonSerializer.Deserialize<ObservableCollection<Post>>(content, jsonSerializerOptions);
                }
            }
            catch (Exception ex)
            {
               
            }

            return posts;
        }
    }
}
