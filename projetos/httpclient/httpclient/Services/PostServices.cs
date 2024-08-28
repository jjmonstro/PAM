using httpclient.Models;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using static System.Net.WebRequestMethods;

namespace httpclient.Services
{
    internal class PostServices
    {
        private HttpClient httpClient;
        private Posts post;
        private ObservableCollection<Posts> posts;
        private JsonSerializerOptions jsonSerializerOptions;
        Uri uri = new Uri("https://jsonplaceholder.typicode.com/posts");

        public PostServices()
        {
            httpClient = new HttpClient();
            jsonSerializerOptions= new JsonSerializerOptions { 
                PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
                WriteIndented = true,
            };

        }

        public async Task<ObservableCollection<Posts>> GetPostsAsync()
        {
            try
            {
                HttpResponseMessage response = await httpClient.GetAsync(uri);
                if (response.IsSuccessStatusCode)
                {
                    string content = await response.Content.ReadAsStringAsync();
                    posts = JsonSerializer.Deserialize<ObservableCollection<Posts>>(content, jsonSerializerOptions);
                }
            }
            catch
            {
                
            }
            return posts;
        }

        public async Task<Posts> SavePostAsync(Posts item)
        {
            try
            {
                string json = JsonSerializer.Serialize<Posts>(item, jsonSerializerOptions);
                StringContent content = new StringContent(json, Encoding.UTF8, "application/json");
                HttpResponseMessage response = await httpClient.PostAsync(uri, content);
                if (response.IsSuccessStatusCode)
                {
                    Debug.WriteLine(response.Content);
                } 
            }
            catch(Exception e) {
                Debug.WriteLine(e.Message);
            }
            return post;
        }
    }
}
