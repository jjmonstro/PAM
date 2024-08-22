using CommunityToolkit.Mvvm.ComponentModel;
using HTTP_Client.Models;
using HTTP_Client.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Input;

namespace HTTP_Client.ViewsModels
{
    public partial class CreatePostViewModel : ObservableObject
    {
        [ObservableProperty]
        string title;
        [ObservableProperty]
        string body;
        [ObservableProperty]
        int id;
        [ObservableProperty]
        int userid=2;

        
        public ICommand SavePostCommand { get;}

        CreatePostViewModel()
        {
            SavePostCommand = new Command(SavePost);
        }

        public async void SavePost()
        {
            Post post = new Post();
            Post newPost = new Post();
            post.Tittle = Title;
            post.Body = Body;
            post.UserId = Userid;

            PostServices postServices = new PostServices();
            newPost = await postServices.SavePostAsync(post);
        }
    }
}
